import { imageCaption, imagePicture, openPopup, imagePopup } from './index.js'

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;

    return this._element;
  }

  _removeCard(element) {
    element.remove();
  }

  _likeToggle = (evt) => {
    evt.target.classList.toggle('elements__like-heart_active')
  }

  _popup = () => {
    openPopup(imagePopup)
    imageCaption.textContent = this._name;
    imagePicture.src = this._link;
    imagePicture.alt = this._name;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like-heart').addEventListener('click', this._likeToggle);
    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._removeCard(this._element)
    })
    this._element.querySelector('.elements__image').addEventListener('click', this._popup)
  };
}

