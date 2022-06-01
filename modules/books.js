/* eslint no-use-before-define: ["error", { "variables": false }] */

import storage from './storage.js';
import Books from './books-constructor.js';

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const bookInfo = document.getElementById('booksContainer');

export class StorageFun {
  constructor(array) {
    this.array = array;
  }

  updateStorage = () => {
    localStorage.booksStorage = JSON.stringify(this.array);
  };

  addBook = () => {
    const newBook = new Books(titleInput.value, authorInput.value);
    this.array.push(newBook);

    this.updateStorage();
    renderBook(storage());
    titleInput.value = '';
    authorInput.value = '';
  };

  deleteBook = (id) => {
    this.array.splice(id, 1);
    this.updateStorage();
    renderBook(storage());
  };
}

export const bookList = new StorageFun(storage());

export const renderBook = (getMyLibrary) => {
  bookInfo.innerHTML = '';
  getMyLibrary.forEach((element, id) => {
    const tr = document.createElement('tr');
    bookInfo.appendChild(tr);
    const td = document.createElement('td');

    tr.setAttribute('id', `${id}`);
    td.classList.add('ms-4');
    td.classList.add('fs-5');
    tr.appendChild(td);

    const span = document.createElement('span');
    span.classList.add('ms-3');
    span.innerText = `${element.title} by ${element.author}`;
    td.appendChild(span);

    const td2 = document.createElement('td');
    td2.classList.add('d-flex');
    tr.appendChild(td2);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-warning');
    deleteButton.classList.add('fs-5');
    deleteButton.classList.add('mx-auto');
    deleteButton.innerText = 'Delete';
    td2.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => bookList.deleteBook(id));
  });
};
