import BoardView from '../view/board-view.js';
import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
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

    render(new EventEditView(), this.#eventListComponent.element);

    for (let eventPoint = 0; eventPoint < this.#boardPoints.length; eventPoint++) {
      render(new EventView({point: this.#boardPoints[eventPoint]}), this.#eventListComponent.element);
    }
  }
}
