import dayjs from 'dayjs';

const DATE_POINT_FORMAT = 'MMM DD';
const TIME_POINT_FORMAT = 'HH:mm';
const DATE_FORM_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizDatePoint(datePoint) {
  return datePoint ? dayjs(datePoint).format(DATE_POINT_FORMAT) : '';
}

function humanizTimePoint(datePoint) {
  return datePoint ? dayjs(datePoint).format(TIME_POINT_FORMAT) : '';
}

function humanizDateForm(datePoint) {
  return datePoint ? dayjs(datePoint).format(DATE_FORM_FORMAT) : '';
}

export {getRandomArrayElement, humanizDatePoint, humanizTimePoint, humanizDateForm};
