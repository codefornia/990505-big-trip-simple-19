import NewEventButtonView from './view/new-event-button-view.js';
import EventsFiltersView from './view/events-filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

import {render} from './render.js';

const siteMainElement = document.querySelector('.trip-main');
const siteControlsFiltersElement = siteMainElement.querySelector('.trip-controls__filters');
const sitePageMainElement = document.querySelector('.page-main');
const sitePageContainerElement = sitePageMainElement.querySelector('.page-body__container');
const pointsModel = new PointsModel();

const boardPresenter = new BoardPresenter({boardContainer: sitePageContainerElement, pointsModel});

render (new NewEventButtonView(), siteMainElement);
render (new EventsFiltersView(), siteControlsFiltersElement);

boardPresenter.init();
