export default class Api {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res });
  }

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  getAllCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers }).then(
      this.#onResponce
    );
  }

  getName() {
    return fetch(`${this._url}/users/me`, { headers: this._headers }).then(
      this.#onResponce
    );
  }

  sendName(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userJob,
      }),
    }).then(this.#onResponce);
  }

  sendCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this.#onResponce);
  }

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this.#onResponce);
  }

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
      }),
    }).then(this.#onResponce);
  }

  changeLike(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this.#onResponce);
  }
}
