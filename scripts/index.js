const buttonEdit = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup-name')
const popupUserClose = document.querySelector('.popup__close-name')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.form__input_type_name')
const popupProfession = document.querySelector('.form__input_type_profession')
const formElementUser = document.querySelector('.form-name')
const placeForplaces = document.querySelector('.elements');
const templateForPlaces = document.querySelector('.elements__template').content.querySelector('.elements__element')
const buttonAdd = document.querySelector('.profile__add-button')
const popupPhoto = document.querySelector('.popup-photo')
const popupPhotoClose = document.querySelector('.popup__close-photo')
const formElementPhoto = document.querySelector('.form-photo')
const popupPictureName = formElementPhoto.querySelector('.form__input_type_picture-name')
const popupPictureLink = formElementPhoto.querySelector('.form__input_type_picture-link')
const imagePopup = document.querySelector('.image-popup')
const imageClose = document.querySelector('.image-popup__close')
const imageCaption = document.querySelector('.image-popup__caption')
const imagePicture = document.querySelector('.image-popup__picture')





function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function escPopup(evt) {
  const currentPopup = document.querySelector('.' + 'popup_opened');
  if (evt.key === 'Escape') {
    currentPopup.classList.remove('popup_opened');
    formElementPhoto.reset();
  }
}

function clickOutside(evt) {
  const currentPopup = document.querySelector('.' + 'popup_opened');
  if (evt.target.classList.contains('popup_opened')) {
    currentPopup.classList.remove('popup_opened');
    formElementPhoto.reset();
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileProfession.textContent = popupProfession.value
  profileName.textContent = popupName.value
  closePopup(popupUser)
}

function addCardsBegin(name, link) {
  const cardsElement = templateForPlaces.cloneNode(true);
  imageElement = cardsElement.querySelector('.elements__image')
  cardsElement.querySelector('.elements__title').textContent = name;
  imageElement.src = link;
  imageElement.alt = name;
  cardsElement.querySelector('.elements__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-heart_active')
  });
  cardsElement.querySelector('.elements__image').addEventListener('click', function () {
    openPopup(imagePopup)
    imageCaption.textContent = name;
    imagePicture.src = link;
    imagePicture.alt = name;
  });
  cardsElement.querySelector('.elements__trash').addEventListener('click', function () {
    cardsElement.remove();
  });
  return cardsElement;
}


function photoFormSubmitHandler(evt) {
  const cardInfo = {
    name: popupPictureName.value,
    link: popupPictureLink.value,
    alt: popupPictureName.value
  }
  const newCard = addCardsBegin(cardInfo.name, cardInfo.link);
  placeForplaces.prepend(newCard)
  evt.preventDefault();
  formElementPhoto.reset();
  closePopup(popupPhoto);
}


initialCards.forEach(function ({ name, link }) {
  placeForplaces.prepend(addCardsBegin(name, link))
})

buttonEdit.addEventListener('click', function () {
  openPopup(popupUser)
  popupName.value = profileName.textContent
  popupProfession.value = profileProfession.textContent;
  let eventInput = new Event("input");
  popupName.dispatchEvent(eventInput);
  popupProfession.dispatchEvent(eventInput);
})

popupUserClose.addEventListener('click', function () {
  closePopup(popupUser)
})

formElementUser.addEventListener('submit', formSubmitHandler);


imageClose.addEventListener('click', function () {
  closePopup(imagePopup);
})

buttonAdd.addEventListener('click', function () {
  openPopup(popupPhoto);
})

popupPhotoClose.addEventListener('click', function () {
  closePopup(popupPhoto);
  formElementPhoto.reset();
})

formElementPhoto.addEventListener('submit', photoFormSubmitHandler);

document.addEventListener('keydown', function (evt) {
  escPopup(evt)
})

document.body.addEventListener('click', function (evt) {
  clickOutside(evt)
})

