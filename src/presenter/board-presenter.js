import BoardView from '../view/board-view.js';
import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new EventsSortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());

    render(new EventEditView(), this.eventListComponent.getElement());

    for (let eventPoint = 0; eventPoint < 3; eventPoint++) {
      render(new EventView(), this.eventListComponent.getElement());
    }

  }
}
