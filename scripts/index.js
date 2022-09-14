import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { initialCards } from './cards.js';

const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  formSelector: '.form',
  formPhoto: '.form-photo',
  inputErrorPassive: '.form__input-error',
  formName: '.form-name'
}

const buttonEdit = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup-name')
const popupUserClose = document.querySelector('.popup__close-name')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.form__input_type_name')
const popupProfession = document.querySelector('.form__input_type_profession')
const formElementUser = document.querySelector('.form-name')
const cardList = document.querySelector('.elements');
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

const allPopups = Array.from(document.querySelectorAll('.popup'));

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    currentPopup.classList.remove('popup_opened')
  }
}

function clickOutside(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const currentPopup = document.querySelector('.popup_opened');
    currentPopup.classList.remove('popup_opened')
  }
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileProfession.textContent = popupProfession.value
  profileName.textContent = popupName.value
  closePopup(popupUser)
}

function createCard(item) {
  const card = new Card(item.name, item.link, '.elements__template');
  const cardElement = card.generateCard();
  return cardElement
}

function handlePhotoFormSubmit(evt) {
  const name = popupPictureName.value;
  const link = popupPictureLink.value;
  const alt = popupPictureName.value
  const newCard = createCard({ name, link, alt });
  cardList.prepend(newCard)
  evt.preventDefault();
  closePopup(popupPhoto);
  formValidPhoto.disableSubmitButton();
}

initialCards.reverse();

buttonEdit.addEventListener('click', function () {
  openPopup(popupUser)
  popupName.value = profileName.textContent
  popupProfession.value = profileProfession.textContent;
  formValidName.removeValidationErrors();
})

popupUserClose.addEventListener('click', function () {
  closePopup(popupUser)
})

formElementUser.addEventListener('submit', submitEditProfileForm);

imageClose.addEventListener('click', function () {
  closePopup(imagePopup);
})

buttonAdd.addEventListener('click', function () {
  formValidPhoto.removeValidationErrors();
  formValidPhoto.disableSubmitButton();
  formElementPhoto.reset();
  openPopup(popupPhoto);
})

popupPhotoClose.addEventListener('click', function () {
  closePopup(popupPhoto);
})

formElementPhoto.addEventListener('submit', handlePhotoFormSubmit);

allPopups.forEach(function () {
  addEventListener('click', function (evt) {
    clickOutside(evt)
  })
})

initialCards.forEach((item) => {
  const card = createCard(item)
  cardList.prepend(card)
})

const formValidName = new FormValidator(validationConfig, validationConfig.formName);
formValidName.enableValidation();
const formValidPhoto = new FormValidator(validationConfig, validationConfig.formPhoto);
formValidPhoto.enableValidation();

export { validationConfig };
export { imageCaption, imagePicture, openPopup, imagePopup }

