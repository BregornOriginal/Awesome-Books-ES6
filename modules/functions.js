const bookInfo = document.getElementById('booksContainer');
const titleSect1 = document.getElementById('title-sec1');

import { bookList } from './books.js'


const renderBook = (getMyLibrary) => {
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
    span.innerText = `${element.title} by ${element.author}`
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
  })
}

const showTitle = (getMyLibrary) => {
  if (getMyLibrary.length === 0) {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'there are no books yet but they will soon appear here';
  } else {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'All awesome books';
  }
}

const storage = () => {
  if (JSON.parse(localStorage.getItem('booksStorage')) === null) {
    localStorage.setItem('booksStorage', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('booksStorage'));
}

export { renderBook, showTitle, storage };
