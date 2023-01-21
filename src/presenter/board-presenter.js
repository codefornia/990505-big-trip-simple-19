import BoardView from '../view/board-view.js';
import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import {render} from '../render.js';

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
    render(eventComponent, this.#eventListComponent.element);
  }
}
