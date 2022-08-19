const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  formSelector: '.form',
  formPhoto: '.form-photo',
  inputErrorPassive: '.form__input-error'
}

const removeValidationErrors = (validationConfig, form) => {
  const inputError = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  inputError.forEach(input => { input.classList.remove(validationConfig.inputErrorClass); })
  const textError = Array.from(form.querySelectorAll(validationConfig.inputErrorPassive));
  textError.forEach(text => { text.classList.remove(validationConfig.errorClass); })
}

const disableSubmitButton = (validationConfig, buttonError) => {
  buttonError.classList.add(validationConfig.inactiveButtonClass);
  buttonError.setAttribute("disabled", false)
}

const showError = (errorElement, inputElement, validationConfig) => {
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

const hideError = (errorElement, inputElement, validationConfig) => {
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    showError(errorElement, inputElement, validationConfig);
  } else {
    hideError(errorElement, inputElement, validationConfig);
  }
};

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
}

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute("disabled", false)
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", false)
  };
};

enableValidation(validationConfig)