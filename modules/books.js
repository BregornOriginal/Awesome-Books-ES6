const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

import { renderBook } from './functions.js'
import { storage } from "./functions.js";

export class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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
