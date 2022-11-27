import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  config,
  validationConfig,
  buttonEditName,
  profileName,
  profileProfession,
  popupName,
  popupProfession,
  cardList,
  buttonAdd,
  formElementPhoto,
  formElementName,
  profileAvatar,
  buttonAvatar,
  formElementAvatar,
  buttonSaveAvatar,
  buttonSaveName,
  buttonSavePicture,
} from "../utils/constants.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDelete from "../components/PopupDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formValidName = new FormValidator(validationConfig, formElementName);
formValidName.enableValidation();

const formValidPhoto = new FormValidator(validationConfig, formElementPhoto);
formValidPhoto.enableValidation();

const formValidAvatar = new FormValidator(validationConfig, formElementAvatar);
formValidAvatar.enableValidation();

const imagePopup = new PopupWithImage(".image-popup");
imagePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup-photo", handlePhotoFormSubmit);
addCardPopup.setEventListeners();

const editNamePopup = new PopupWithForm(".popup-name", submitEditProfileForm);
editNamePopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  ".popup-avatar",
  submitEditAvatarForm
);
editAvatarPopup.setEventListeners();

const deletePopup = new PopupDelete(".popup-delete");
deletePopup.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userDescriptionSelector: profileProfession,
  userAvatarSelector: profileAvatar,
});

const cardSection = new Section(
  {
    renderer: (item) => {
      cardSection.addItem(createCard(item), true);
    },
  },
  cardList
);

const api = new Api(config);

function handleCardClick(data) {
  imagePopup.open(data);
}

function handleCardDelete(card) {
  deletePopup.open();
  deletePopup.setSubmitAction(() => {
    api
      .removeCard(card.getId())
      .then(function () {
        card.remove();
        deletePopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function handleClickLike(card) {
  api
    .changeLike(card.getId(), card.isLiked())
    .then((data) => {
      card.setLikes(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function submitEditProfileForm(dataObj) {
  buttonSaveName.textContent = "Сохранение...";
  api
    .sendName(dataObj)
    .then((data) => {
      userInfo.setUserName({ name: data.name, about: data.about });
      editNamePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveName.textContent = "Сохранить";
    })  
}

function submitEditAvatarForm(dataObj) {
  buttonSaveAvatar.textContent = "Сохранение...";
  api
    .changeAvatar(dataObj)
    .then((data) => {
      userInfo.setUserInfo({ avatar: data.avatar });
      editAvatarPopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveAvatar.textContent = "Сохранить";
    })  
}

function createCard(item) {
  const card = new Card(
    { data: item, handleCardClick, handleCardDelete, handleClickLike },
    userInfo.getId(),
    ".elements__template"
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function handlePhotoFormSubmit(formValues) {
  buttonSavePicture.textContent = "Сохранение...";
  api
    .sendCard(formValues)
    .then((data) => {
      cardSection.addItem(createCard(data));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSavePicture.textContent = "Создать";
    })  
}

  Promise.all([api.getName(), api.getAllCards()])
  .then(([data, array]) => {
    userInfo.setUserInfo({ avatar: data.avatar, id: data._id });
    userInfo.setUserName({ name: data.name, about: data.about });
    cardSection.renderItems(array);
  })
  .catch((err) => {
    console.log(err);
  });

buttonEditName.addEventListener("click", function () {
  editNamePopup.open();
  const currentUserInfo = userInfo.getUserInfo();
  popupName.value = currentUserInfo.userName;
  popupProfession.value = currentUserInfo.userJob;
  formValidName.removeValidationErrors();
});

buttonAdd.addEventListener("click", function () {
  formValidPhoto.removeValidationErrors();
  formValidPhoto.disableSubmitButton();
  addCardPopup.open();
});

buttonAvatar.addEventListener("click", function () {
  formValidAvatar.removeValidationErrors();
  formValidAvatar.disableSubmitButton();
  editAvatarPopup.open();
});
