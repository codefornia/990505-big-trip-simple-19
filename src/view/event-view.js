import AbstractView from '../framework/view/abstract-view';
import {humanizDatePoint, humanizTimePoint} from '../utils.js';
import {MOCK_OFFERS} from '../mock/offers';

function createOffersTemplate(offers, allOffers) {
  if (!offers) {
    return '';
  }
  const offersSelected = allOffers.filter((offer) => offers.includes(offer));
  return (
    `${offersSelected.map((offer) =>
      `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
      </li>`).join('')}`
  );
}

function createEventTemplate(point) {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = point;
  const offersTemplate = createOffersTemplate(offers, MOCK_OFFERS);


  const dateFromFormat = humanizDatePoint(dateFrom);
  const timeFromFormat = humanizTimePoint(dateFrom);
  const timeToFormat = humanizTimePoint(dateTo);

  return (
    `<li class="trip-events__item">
            <div class="event">
              <time class="event__date" datetime="2019-03-18">${dateFromFormat}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${type} ${destination ? destination.name : ''}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="2019-03-18T12:25">${timeFromFormat}</time>
                  &mdash;
                  <time class="event__end-time" datetime="2019-03-18T13:35">${timeToFormat}</time>
                </p>
              </div>
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
                ${offersTemplate}
              </ul>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
                </button>
              </button>
            </div>
          </li>`
  );
}

export default class EventView extends AbstractView {
  #point = null;
  #handleEditClick = null;

  constructor({point, onEditClick}) {
    super();
    this.#point = point;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createEventTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
