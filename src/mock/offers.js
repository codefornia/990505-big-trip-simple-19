import {getRandomArrayElement} from '../utils.js';
import {OFFER_TITLES} from '../const.js';

const MOCK_OFFERS = [
  {
    'id': 0,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 110
  },
  {
    'id': 1,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 130
  },
  {
    'id': 2,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 140
  },
  {
    'id': 3,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 25
  },
  {
    'id': 4,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 80
  },
  {
    'id': 5,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 90
  },
  {
    'id': 6,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 20
  },
  {
    'id': 7,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 60
  },
  {
    'id': 8,
    'title': getRandomArrayElement(OFFER_TITLES),
    'price': 90
  },
];


export {MOCK_OFFERS};
