export async function validateForm(formData = {}, newErrors = {}) {
  for (const key in formData) {
    const value = formData[key]?.toString().trim();
    newErrors[key] = !value; // true if empty, false if valid
  }
  return newErrors;
}
