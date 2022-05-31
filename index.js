/* eslint-disable max-classes-per-file */

import { bookList } from './modules/books.js';
import { luxon } from './modules/luxon.js';
import { renderBook, showTitle, storage } from './modules/functions.js';
import { navNewBook, navMyList, navHome, navNavLink } from './modules/events.js'

const time = document.getElementById('dateTime');
time.innerHTML = luxon.DateTime.now().toLocaleString(
  luxon.DateTime.DATETIME_MED_WITH_SECONDS,
);

const addBookButton = document.getElementById('add-book');
let getMyLibrary = storage();

addBookButton.addEventListener('click', () => {
  bookList.addBook();
});

window.addEventListener('load', () => {
  renderBook(getMyLibrary);
  showTitle(getMyLibrary)
});
