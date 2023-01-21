import {createElement} from '../render.js';

function createTripEventsMsgTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class TripEventsMsgView {
  #element = null;

  get template() {
    return createTripEventsMsgTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
