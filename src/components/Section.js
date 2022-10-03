export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._renderedItems = items;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(array) {
    array.forEach((item) => {
      this._renderer(item);
    });
  }
}
