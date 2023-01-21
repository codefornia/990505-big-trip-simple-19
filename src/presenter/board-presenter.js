import BoardView from '../view/board-view.js';
import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import {render} from '../render.js';
import EventEditView from '../view/event-edit-view';

export default class BoardPresenter {
  #boardContainer = null;
  #pointsModel = null;

  #boardComponent = new BoardView();
  #eventListComponent = new EventsListView();

  #boardPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    render(this.#boardComponent, this.#boardContainer);
    render(new EventsSortView(), this.#boardComponent.element);
    render(this.#eventListComponent, this.#boardComponent.element);

    for (let eventPoint = 0; eventPoint < this.#boardPoints.length; eventPoint++) {
      this.#renderPoint(this.#boardPoints[eventPoint]);
    }
  }

  #renderPoint(point) {
    const eventComponent = new EventView({point});

    const eventEditComponent = new EventEditView({point});

    const replaceEventToForm = () => {
      this.#eventListComponent.element.replaceChild(eventEditComponent.element, eventComponent.element);
    };

    const replaceFormToEvent = () => {
      this.#eventListComponent.element.replaceChild(eventComponent.element, eventEditComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEventToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    eventEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToEvent();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(eventComponent, this.#eventListComponent.element);
  }
}
