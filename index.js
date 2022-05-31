/* eslint-disable no-unused-vars */
// Added disable no-unused-vars because this ones are called only for the events of the nav bar

import { bookList, renderBook } from './modules/books.js';
import { luxon } from './modules/luxon.js';
import showTitle from './modules/functions.js';
import storage from './modules/storage.js';
import {
  navNewBook, navMyList, navHome, navNavLink,
} from './modules/events.js';

const time = document.getElementById('dateTime');
time.innerHTML = luxon.DateTime.now().toLocaleString(
  luxon.DateTime.DATETIME_MED_WITH_SECONDS,
);

const addBookButton = document.getElementById('add-book');
const getMyLibrary = storage();

addBookButton.addEventListener('click', () => {
  bookList.addBook();
});

window.addEventListener('load', () => {
  renderBook(getMyLibrary);
  showTitle(getMyLibrary);
});
