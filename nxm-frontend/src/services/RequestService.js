export default class RequestService {
  static sessionCookie = null; 
  static authLogout = null; 
  static tokenRefreshHandler = null;

  /**
   * Register logout callback from AuthProvider
   */
  static registerLogoutCallback(callback) {
    if (typeof callback === "function") {
      this.authLogout = callback;
    }
  }

  /**
   * Register token refresh handler (optional)
   */
  static registerTokenRefreshHandler(callback) {
    if (typeof callback === "function") {
      this.tokenRefreshHandler = callback;
    }
  }

  /**
   * Extract cookie name from Set-Cookie header
   */
  static extractCookieName(cookieHeader) {
    const match = cookieHeader.match(/session=([^;]*)/);
    return match ? match[1] : null;
  }

  /**
   * Logout (internal + global)
   */
  static logout(logoutCallback) {
    this.sessionCookie = null;
    if (typeof logoutCallback === "function") logoutCallback();
    if (this.authLogout) this.authLogout();
  }

  /**
   * Core request handler
   */
  static async request(method, endpoint = "", options = {}, retryAttempt = false) {
    let normalizedBody = {};

    // --- Normalize body ---
    if (options.formData instanceof FormData) {
      options.formData.forEach((value, key) => (normalizedBody[key] = value));
    } else if (options.data && typeof options.data === "object") {
      normalizedBody = { ...options.data };
    } else if (options.data) {
      normalizedBody = { value: options.data };
    }

    // --- Setup headers ---
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (options.token) headers.append("Authorization", `Bearer ${options.token}`);
    if (this.sessionCookie) headers.append("Cookie", `session=${this.sessionCookie}`);
    if (options.headers) {
      Object.entries(options.headers).forEach(([k, v]) => headers.append(k, v));
    }

    const config = {
      method,
      headers,
      credentials: "include",
    };

    if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      config.body = JSON.stringify(normalizedBody);
    }

    // Optional loading indicator
    if (options.isLoading) options.isLoading(true);

    try {
      const response = await fetch(endpoint, config);

      // Capture session cookie after login
      if (options.pageName === "login") {
        const cookieHeader = response.headers.get("Set-Cookie");
        if (cookieHeader) this.sessionCookie = this.extractCookieName(cookieHeader);
      }

      // Try parse JSON response
      let data;
      try {
        data = await response.json();
      } catch {
        const text = await response.text();
        data = { status: response.ok, message: text || "Invalid server response" };
      }

      // --- Handle Network or Unauthorized ---
      if (!response.status) {
        this.logout(options.logoutCallback);
        return { status: false, message: "Please log in again.", data: [] };
      }

      // --- Handle Token Expiration ---
      const message = String(data?.message || "").trim().toLowerCase();
      if (!data.status && message.includes("invalid or expired token")) {
        // Attempt token refresh once
        if (!retryAttempt && this.tokenRefreshHandler) {
          const newToken = await this.tokenRefreshHandler();

          if (newToken) {
            return this.request(method, endpoint, { ...options, token: newToken }, true);
          }
        }

        // Token refresh failed → logout
        this.logout(options.logoutCallback);
        return { status: false, message: "Session expired. Please log in again.", data: [] };
      }

      // --- Handle generic HTTP errors ---
      if (!response.ok) {
        return {
          status: false,
          message: data.message || `Request failed (${response.status})`,
          data: [],
        };
      }

      return data;
    } catch (error) {
      return { status: false, message: "Network or server error: " + error.message, data: [] };
    } finally {
      if (options.isLoading) options.isLoading(false);
    }
  }

  // --- HTTP method wrappers ---
  static get(endpoint, options) { return this.request("GET", endpoint, options); }
  static post(endpoint, options) { return this.request("POST", endpoint, options); }
  static put(endpoint, options) { return this.request("PUT", endpoint, options); }
  static patch(endpoint, options) { return this.request("PATCH", endpoint, options); }
  static delete(endpoint, options) { return this.request("DELETE", endpoint, options); }
  static options(endpoint, options) { return this.request("OPTIONS", endpoint, options); }
}
