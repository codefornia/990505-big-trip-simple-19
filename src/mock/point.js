import {getRandomArrayElement} from '../utils.js';
import {POINT_TYPES} from '../const.js';
import {MOCK_OFFERS} from './offers';
import {MOCK_DESTINATIONS} from './destinations.js';

const MOCK_POINTS = [
  {
    'basePrice': 3000,
    'dateFrom': new Date(2023, 2, 10, 8, 40),
    'dateTo': new Date(2023, 2, 11, 7, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '0',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[1],
  },
  {
    'basePrice': 2000,
    'dateFrom': new Date(2023, 2, 11, 10, 50),
    'dateTo': new Date(2023, 2, 12, 6, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '1',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[2],
  },
  {
    'basePrice': 1000,
    'dateFrom': new Date(2023, 2, 13, 8, 40),
    'dateTo': new Date(2023, 2, 18, 6, 50),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '2',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[3],
  },
  {
    'basePrice': 4000,
    'dateFrom': new Date(2023, 2, 19, 6, 50),
    'dateTo': new Date(2023, 2, 22, 6, 50),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '3',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[4],
  },
  {
    'basePrice': 5000,
    'dateFrom': new Date(2023, 2, 23, 8, 10),
    'dateTo': new Date(2023, 2, 25, 23, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '4',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[5],
  },
  {
    'basePrice': 6000,
    'dateFrom': new Date(2023, 2, 25, 9, 10),
    'dateTo': new Date(2023, 2, 27, 23, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '5',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[6],
  },
  {
    'basePrice': 7000,
    'dateFrom': new Date(2023, 2, 27, 8, 30),
    'dateTo': new Date(2023, 3, 21, 23, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '6',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[7],
  },
  {
    'basePrice': 8000,
    'dateFrom': new Date(2023, 3, 1, 12, 50),
    'dateTo': new Date(2023, 3, 3, 23, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '7',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[8],
  },
  {
    'basePrice': 9000,
    'dateFrom': new Date(2023, 3, 4, 10, 50),
    'dateTo': new Date(2023, 3, 27, 23, 30),
    'destination': getRandomArrayElement(MOCK_DESTINATIONS),
    'id': '8',
    'offers': [
      getRandomArrayElement(MOCK_OFFERS).id,
      getRandomArrayElement(MOCK_OFFERS).id,
    ],
    'type': POINT_TYPES[0],
  },
];

function getRandomPoint() {
  return getRandomArrayElement(MOCK_POINTS);
}

export {getRandomPoint};
