import AbstractView from '../framework/view/abstract-view';
import {humanizDateForm} from '../utils';
import {MOCK_OFFERS} from '../mock/offers';

function createEventListTemplate(type, allTypes) {
  return (
    `<div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${allTypes.map((name) =>
      `<div class="event__type-item">
            <input id="event-type-${name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${name}" ${type === name ? 'checked' : ''}}>
              <label class="event__type-label  event__type-label--${name}" for="event-type-${name}-1">${name}</label>
         </div>`).join('')}
        </div>
      </fieldset>
    </div>`
  );
}

function createOffersTemplate(offers, allOffers) {
  if (!offers) {
    return '';
  }
  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${allOffers.map(({id, title, price}) =>
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${id}" type="checkbox" name="event-offer-luggage"  ${offers.includes(id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-luggage-${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
        </div>`).join('')}
      </div>
    </section>`
  );
}

function createDestinationTemplate(destination) {
  if (!destination) {
    return '';
  }
  const destinationPhotoTemplate = destination?.pictures ? createDestinationPhotoTemplate(destination.pictures) : '';
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>

      ${destinationPhotoTemplate}

    </section>`
  );
}


function createDestinationPhotoTemplate(photos){
  return (
    `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${photos.map(({src, description}) =>
      `<img class="event__photo" src="${src}" alt="${description}">`)
      .join('')}
      </div>
    </div>`
  );
}


function createEditEventTemplate(point) {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = point;
  const eventListTemplate = createEventListTemplate(type, MOCK_OFFERS);
  const offersTemplate = createOffersTemplate(offers, MOCK_OFFERS);
  const destinationTemplate = createDestinationTemplate(destination);

  const dateFromFormat = humanizDateForm(dateFrom);
  const dateToFormat = humanizDateForm(dateTo);

  return (
    `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    ${eventListTemplate}

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination?.name ? destination.name : ''}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>
                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromFormat}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToFormat}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">

                  ${offersTemplate}

                  ${destinationTemplate}


                </section>
              </form>
            </li>`
  );
}


export default class EventEditView extends AbstractView{
  #point = null;

  constructor({point}) {
    super();
    this.#point = point;
  }

  get template() {
    return createEditEventTemplate(this.#point);
  }
}
