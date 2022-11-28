export default class Card {
  constructor(
    { data, handleCardClick, handleCardDelete, handleClickLike },
    ownerId,
    templateSelector
  ) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleClickLike = handleClickLike;
    this._ownerId = ownerId;
    this._cardOwnerId = data.owner._id;
    this._element = this._getTemplate();
    this._likeCounter = this._element.querySelector(".elements__like-counter");
    this._likeHeart = this._element.querySelector(".elements__like-heart");
    this._trash = this._element.querySelector(".elements__trash");
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  getId() {
    return this._data._id;
  }

  isLiked() {
    return this._data.likes.some((item) => {
      return item._id === this._ownerId;
    });
  }

  setLikes(data) {
    this._data.likes = data.likes;
    this._updateLikes();
  }

  _updateLikes() {
    this._likeCounter.textContent = this._data.likes.length;
    if (this.isLiked()) {
      this._likeHeart.classList.add("elements__like-heart_active");
    } else {
      this._likeHeart.classList.remove("elements__like-heart_active");
    }
  }

  generateCard = () => {
    this._cardImage = this._element.querySelector(".elements__image");
    this._setEventListeners();
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._element.querySelector(".elements__title").textContent =
      this._data.name;
    this._updateLikes();
    if (this._ownerId === this._cardOwnerId) {
      this._trash.classList.add("elements__trash_active");
    }

    return this._element;
  };

  remove(_element) {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners = () => {
    this._trash.addEventListener("click", () => {
      this._handleCardDelete(this);
    });
    this._likeHeart.addEventListener("click", () => {
      this._handleClickLike(this);
    });
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._data)
    );
  };
}
