import {validationConfig} from './index.js'
export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = document.querySelector(formElement);
  }

  _setEventListeners () {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._inputElement = inputElement
        this._checkInputValidity();
        this._toggleButtonState();
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

  _showError = () => {
    this._inputElement.classList.add(this._validationConfig.inputErrorClass);
    this._error.textContent = this._inputElement.validationMessage;
    this._error.classList.add(this._validationConfig.errorClass);
  };

  _hideError() {
    this._inputElement.classList.remove(this._validationConfig.inputErrorClass);
    this._error.classList.remove(this._validationConfig.errorClass);
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
    const button = this._formElement.querySelector(this._validationConfig.submitButtonSelector)
    if (this._hasInvalidInput()) {
      button.classList.add(this._validationConfig.inactiveButtonClass);
      button.setAttribute("disabled", false)
    } else {
      button.classList.remove(this._validationConfig.inactiveButtonClass);
      button.removeAttribute("disabled", false)
    };
  };
}


 