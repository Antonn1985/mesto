export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__image");
    this._setEventListeners();
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._element.querySelector(".elements__title").textContent =
      this._data.name;

    return this._element;
  };

  _removeCard(_element) {
    this._element.remove();
  }

  _likeToggle = (evt) => {
    evt.target.classList.toggle("elements__like-heart_active");
  };

  _setEventListeners = () => {
    this._element
      .querySelector(".elements__like-heart")
      .addEventListener("click", this._likeToggle);
    this._element
      .querySelector(".elements__trash")
      .addEventListener("click", () => {
        this._removeCard(this._element);
      });
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._data)
    );
  };
}
