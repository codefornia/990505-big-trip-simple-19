import BoardView from '../view/board-view.js';
import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventsListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    render(this.boardComponent, this.boardContainer);
    render(new EventsSortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());

    render(new EventEditView(), this.eventListComponent.getElement());

    for (let eventPoint = 0; eventPoint < this.boardPoints.length; eventPoint++) {
      render(new EventView({point: this.boardPoints[eventPoint]}), this.eventListComponent.getElement());
    }
  }
}
