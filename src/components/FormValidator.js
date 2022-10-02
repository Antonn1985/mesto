import { validationConfig } from '../utils/constants.js'
export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = document.querySelector(formElement);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    this._submitButton = this._formElement.querySelector(this._validationConfig.submitButtonSelector)
  }

  _showError = () => {
    this._inputElement.classList.add(this._validationConfig.inputErrorClass);
    this._error.textContent = this._inputElement.validationMessage;
    this._error.classList.add(this._validationConfig.errorClass);
  };

  _hideError() {
    this._inputElement.classList.remove(this._validationConfig.inputErrorClass);
    this._error.classList.remove(this._validationConfig.errorClass);
  };

  removeValidationErrors = () => {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement
      this._checkInputValidity()
      this._hideError()
      this._toggleButtonState()
    });
  }

  disableSubmitButton = () => {
    this._submitButton.classList.add(this._validationConfig.inactiveButtonClass);
    this._submitButton.setAttribute("disabled", false)
  }

  _ableSubmitButton = () => {
    this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass);
    this._submitButton.removeAttribute("disabled", false)
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._inputElement = inputElement
        this._checkInputValidity();
        this._toggleButtonState()
      });
    });
  }
  _checkInputValidity = () => {
    this._error = this._formElement.querySelector((`.${this._inputElement.id}-error`))
    if (!this._inputElement.validity.valid) {
      this._showError();
    } else {
      this._hideError();
    }
    return this._error
  };


  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  _hasInvalidInput = () => {
    return Array.from(this._inputList).some((input) => {
      return !input.validity.valid;
    })
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton()
    } else {
      this._ableSubmitButton()
    };
  };
}
