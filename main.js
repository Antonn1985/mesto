(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showError",(function(){o._inputElement.classList.add(o._validationConfig.inputErrorClass),o._error.textContent=o._inputElement.validationMessage,o._error.classList.add(o._validationConfig.errorClass)})),t(this,"removeValidationErrors",(function(){o._inputList.forEach((function(e){o._inputElement=e,o._checkInputValidity(),o._hideError(),o._toggleButtonState()}))})),t(this,"disableSubmitButton",(function(){o._submitButton.classList.add(o._validationConfig.inactiveButtonClass),o._submitButton.setAttribute("disabled",!1)})),t(this,"_ableSubmitButton",(function(){o._submitButton.classList.remove(o._validationConfig.inactiveButtonClass),o._submitButton.removeAttribute("disabled",!1)})),t(this,"_setEventListeners",(function(){o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._inputElement=e,o._checkInputValidity(),o._toggleButtonState()}))}))})),t(this,"_checkInputValidity",(function(){return o._error=o._formElement.querySelector(".".concat(o._inputElement.id,"-error")),o._inputElement.validity.valid?o._hideError():o._showError(),o._error})),t(this,"_hasInvalidInput",(function(){return Array.from(o._inputList).some((function(e){return!e.validity.valid}))})),this._validationConfig=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var r,o;return r=n,(o=[{key:"_hideError",value:function(){this._inputElement.classList.remove(this._validationConfig.inputErrorClass),this._error.classList.remove(this._validationConfig.errorClass),this._error.value=""}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._ableSubmitButton()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this,i=t.data,u=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"generateCard",(function(){return r._element=r._getTemplate(),r._cardImage=r._element.querySelector(".elements__image"),r._setEventListeners(),r._cardImage.src=r._data.link,r._cardImage.alt=r._data.name,r._element.querySelector(".elements__title").textContent=r._data.name,r._element})),o(this,"_likeToggle",(function(e){e.target.classList.toggle("elements__like-heart_active")})),o(this,"_setEventListeners",(function(){r._element.querySelector(".elements__like-heart").addEventListener("click",r._likeToggle),r._element.querySelector(".elements__trash").addEventListener("click",(function(){r._removeCard(r._element)})),r._cardImage.addEventListener("click",(function(){return r._handleCardClick(r._data)}))})),this._data=i,this._templateSelector=n,this._handleCardClick=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_removeCard",value:function(e){this._element.remove()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],a={inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",formSelector:".form",inputErrorPassive:".form__input-error"},c=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__profession"),f=document.querySelector(".form__input_type_name"),p=document.querySelector(".form__input_type_profession"),d=document.querySelector(".profile__add-button"),_=document.querySelector(".form-photo"),m=document.querySelector(".form-name");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=o,this._renderedItems=r}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._buttonClose.addEventListener("click",(function(){e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCaption=t._popup.querySelector(".image-popup__caption"),t._popupPicture=t._popup.querySelector(".image-popup__picture"),t}return t=u,(n=[{key:"open",value:function(e){this._popupCaption.textContent=e.name,this._popupPicture.src=e.link,this._popupPicture.alt=e.name,S(O(u.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".form"),n._inputList=n._form.querySelectorAll(".form__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),I(x(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),I(x(u.prototype),"close",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=n,this._userDescriptionSelector=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.userName=this._userNameSelector.textContent,this._userInfo.userJob=this._userDescriptionSelector.textContent,this._userInfo}},{key:"setUserInfo",value:function(e,t){this._userNameSelector.textContent=e.value,this._userDescriptionSelector.textContent=t.value}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=new n(a,m);N.enableValidation();var A=new n(a,_);A.enableValidation();var U=new j(".image-popup");U.setEventListeners();var F=new T(".popup-photo",(function(e){M.addItem(H(e))}));F.setEventListeners();var J=new T(".popup-name",(function(){z.setUserInfo(f,p)}));J.setEventListeners();var z=new D({userNameSelector:s,userDescriptionSelector:l}),M=new h({renderer:function(e){M.addItem(H(e))}},".elements");function G(e){U.open(e)}function H(e){return new i({data:e,handleCardClick:G},".elements__template").generateCard()}u.reverse(),c.addEventListener("click",(function(){J.open();var e=z.getUserInfo();f.value=e.userName,p.value=e.userJob,N.removeValidationErrors()})),d.addEventListener("click",(function(){A.removeValidationErrors(),A.disableSubmitButton(),_.reset(),F.open()})),M.renderItems(u)})();