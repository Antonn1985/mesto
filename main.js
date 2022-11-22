(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showError",(function(){o._inputElement.classList.add(o._validationConfig.inputErrorClass),o._error.textContent=o._inputElement.validationMessage,o._error.classList.add(o._validationConfig.errorClass)})),t(this,"removeValidationErrors",(function(){o._inputList.forEach((function(e){o._inputElement=e,o._checkInputValidity(),o._hideError(),o._toggleButtonState()}))})),t(this,"disableSubmitButton",(function(){o._submitButton.classList.add(o._validationConfig.inactiveButtonClass),o._submitButton.setAttribute("disabled",!1)})),t(this,"_ableSubmitButton",(function(){o._submitButton.classList.remove(o._validationConfig.inactiveButtonClass),o._submitButton.removeAttribute("disabled",!1)})),t(this,"_setEventListeners",(function(){o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._inputElement=e,o._checkInputValidity(),o._toggleButtonState()}))}))})),t(this,"_checkInputValidity",(function(){return o._error=o._formElement.querySelector(".".concat(o._inputElement.id,"-error")),o._inputElement.validity.valid?o._hideError():o._showError(),o._error})),t(this,"_hasInvalidInput",(function(){return Array.from(o._inputList).some((function(e){return!e.validity.valid}))})),this._validationConfig=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var r,o;return r=n,(o=[{key:"_hideError",value:function(){this._inputElement.classList.remove(this._validationConfig.inputErrorClass),this._error.classList.remove(this._validationConfig.errorClass),this._error.value=""}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._ableSubmitButton()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r){var i=this,a=t.data,u=t.handleCardClick,c=t.handleCardDelete,s=t.handleClickLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"generateCard",(function(){return i._cardImage=i._element.querySelector(".elements__image"),i._setEventListeners(),i._cardImage.src=i._data.link,i._cardImage.alt=i._data.name,i._element.querySelector(".elements__title").textContent=i._data.name,i._updateLikes(),i._ownerId===i._cardOwnerId&&i._element.querySelector(".elements__trash").classList.add("elements__trash_active"),i._element})),o(this,"_setEventListeners",(function(){i._element.querySelector(".elements__trash").addEventListener("click",(function(){i._handleCardDelete(i)})),i._element.querySelector(".elements__like-heart").addEventListener("click",(function(){i._handleClickLike(i)})),i._cardImage.addEventListener("click",(function(){return i._handleCardClick(i._data)}))})),this._data=a,this._templateSelector=r,this._handleCardClick=u,this._handleCardDelete=c,this._handleClickLike=s,this._ownerId=n,this._cardOwnerId=a.owner._id,this._element=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"getId",value:function(){return this._data._id}},{key:"isLiked",value:function(){var e=this;return this._data.likes.some((function(t){return t._id===e._ownerId}))}},{key:"setLikes",value:function(e){this._data.likes=e.likes,this._updateLikes()}},{key:"_updateLikes",value:function(){this._element.querySelector(".elements__like-counter").textContent=this._data.likes.length,this.isLiked()?this._element.querySelector(".elements__like-heart").classList.add("elements__like-heart_active"):this._element.querySelector(".elements__like-heart").classList.remove("elements__like-heart_active")}},{key:"remove",value:function(e){this._element.remove(),this._element=null}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a={inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",formSelector:".form",inputErrorPassive:".form__input-error"},u=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__avatar"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__profession"),f=document.querySelector(".form__input_type_name"),p=document.querySelector(".form__input_type_profession"),h=document.querySelector(".profile__add-button"),d=document.querySelector(".form__type-photo"),_=document.querySelector(".form__type-name"),y=document.querySelector(".form__type-avatar"),m=document.querySelector(".profile__photo"),v=document.querySelector(".form__button_type_name"),b=document.querySelector(".form__button_type_picture"),g=document.querySelector(".form__button_type_avatar");function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=o,this._renderedItems=r}var t,n;return t=e,n=[{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.append(e):this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}],n&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._buttonClose.addEventListener("click",(function(){e.close()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupCaption=t._popup.querySelector(".image-popup__caption"),t._popupPicture=t._popup.querySelector(".image-popup__picture"),t}return t=a,(n=[{key:"open",value:function(e){this._popupCaption.textContent=e.name,this._popupPicture.src=e.link,this._popupPicture.alt=e.name,L(q(a.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function N(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".form"),n._inputList=n._form.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),x(V(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),x(V(a.prototype),"close",this).call(this)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=F(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function F(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function W(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".form"),t._submitHandler=null,t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler()})),z(G(a.prototype),"setEventListeners",this).call(this)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=n,this._userDescriptionSelector=r,this._userAvatarSelector=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.userName=this._userNameSelector.textContent,this._userInfo.userJob=this._userDescriptionSelector.textContent,this._userInfo}},{key:"setUserName",value:function(e){this._userNameSelector.textContent=e.name,this._userDescriptionSelector.textContent=e.about}},{key:"setUserInfo",value:function(e){this._userAvatarSelector.src=e.avatar,this._id=e.id}},{key:"getId",value:function(){return this._id}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var $=new WeakSet,ee=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=$),r.add(n),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(Z(this,$,te))}},{key:"getName",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(Z(this,$,te))}},{key:"sendName",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userJob})}).then(Z(this,$,te))}},{key:"sendCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(Z(this,$,te))}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(Z(this,$,te))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarLink})}).then(Z(this,$,te))}},{key:"changeLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then(Z(this,$,te))}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e){return e.ok?e.json():Promise.reject({message:"Ошибка на стороне сервера",res:e})}var ne=new n(a,_);ne.enableValidation();var re=new n(a,d);re.enableValidation();var oe=new n(a,y);oe.enableValidation();var ie=new R(".image-popup");ie.setEventListeners();var ae=new U(".popup-photo",(function(e){b.textContent="Сохранение...",pe.sendCard(e).then((function(e){fe.addItem(ye(e))})).catch((function(e){console.log(e)})).then((function(){b.textContent="Сохранить"})).catch((function(e){console.log(e)}))}));ae.setEventListeners();var ue=new U(".popup-name",(function(e){v.textContent="Сохранение...",pe.sendName(e).then((function(e){le.setUserName({name:e.name,about:e.about})})).catch((function(e){console.log(e)})).then((function(){v.textContent="Сохранить"})).catch((function(e){console.log(e)}))}));ue.setEventListeners();var ce=new U(".popup-avatar",(function(e){g.textContent="Сохранение...",pe.changeAvatar(e).then((function(e){le.setUserInfo({avatar:e.avatar})})).catch((function(e){console.log(e)})).then((function(){g.textContent="Сохранить"})).catch((function(e){console.log(e)}))}));ce.setEventListeners();var se=new K(".popup-delete");se.setEventListeners();var le=new X({userNameSelector:s,userDescriptionSelector:l,userAvatarSelector:c}),fe=new k({renderer:function(e){fe.addItem(ye(e),!0)}},".elements"),pe=new ee({url:"https://mesto.nomoreparties.co/v1/cohort-51",headers:{"Content-Type":"application/json",Authorization:"7f566e4f-f93a-41b2-81ab-61db9108a2c8"}});function he(e){ie.open(e)}function de(e){se.open(),se.setSubmitAction((function(){pe.removeCard(e.getId()).then((function(){e.remove(),se.close()})).catch((function(e){console.log(e)}))}))}function _e(e){pe.changeLike(e.getId(),e.isLiked()).then((function(t){e.setLikes(t)})).catch((function(e){console.log(e)}))}function ye(e){return new i({data:e,handleCardClick:he,handleCardDelete:de,handleClickLike:_e},le.getId(),".elements__template").generateCard()}pe.getAllCards().then((function(e){fe.renderItems(e)})).catch((function(e){console.log(e)})),pe.getName().then((function(e){le.setUserInfo({avatar:e.avatar,id:e._id}),le.setUserName({name:e.name,about:e.about})})).catch((function(e){console.log(e)})),u.addEventListener("click",(function(){ue.open();var e=le.getUserInfo();f.value=e.userName,p.value=e.userJob,ne.removeValidationErrors()})),h.addEventListener("click",(function(){re.removeValidationErrors(),re.disableSubmitButton(),d.reset(),ae.open()})),m.addEventListener("click",(function(){oe.removeValidationErrors(),oe.disableSubmitButton(),y.reset(),ce.open()}))})();