const ToastService = (() => {
  let timeoutId = null;

  const createMessageElement = ({ title, message, isSuccess, isDismisable }) => {
    const messageElement = document.createElement('div');
    messageElement.className = `snack-message ${isSuccess ? 'success' : 'error'}`;

    if (isDismisable) {
      const closeButton = document.createElement('span');
      closeButton.innerHTML = '&times;';
      closeButton.className = 'close-btn';
      closeButton.onclick = () => dismissMessage(messageElement);
      messageElement.appendChild(closeButton);
    }

    if (title) {
      const titleElement = document.createElement('strong');
      titleElement.textContent = title;
      messageElement.appendChild(titleElement);
    }

    const textElement = document.createElement('p');
    textElement.textContent = message;
    messageElement.appendChild(textElement);

    return messageElement;
  };

  const show = ({ title, message, isSuccess = false, duration, position = 'bottom', isDismisable = false }) => {
    const messageElement = createMessageElement({ title, message, isSuccess, isDismisable });
    document.body.appendChild(messageElement);
    messageElement.style[position] = '20px';

    if (duration) {
      timeoutId = setTimeout(() => dismissMessage(messageElement), duration * 1000);
    }
  };

  const dismissMessage = (element) => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  return { show };
})();

export default ToastService;