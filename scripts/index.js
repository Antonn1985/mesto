const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.popup__close')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popap__input_name')
const popupProfession = document.querySelector('.popap__input_profession')
const formElement = document.querySelector('.popup__button')


editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened')
    popupName.value = profileName.textContent
    popupProfession.value = profileProfession.textContent
})


closePopup.addEventListener('click', function () {
    popup.classList.remove('popup_opened')
})

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileProfession.textContent = popupProfession.value
    profileName.textContent = popupName.value
    popup.classList.remove('popup_opened')
}
formElement.addEventListener('click', formSubmitHandler);