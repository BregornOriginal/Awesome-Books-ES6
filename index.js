/* eslint-disable max-classes-per-file */

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBookButton = document.getElementById('add-book');
const BookInfo = document.getElementById('booksContainer');
const titreSect1 = document.getElementById('title-sec1');
let getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));

if (JSON.parse(localStorage.getItem('mesLivres1')) === null) {
  getmylibrary = [];
} else {
  getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));
}

function renderBook() {
  BookInfo.innerHTML = '';
  getmylibrary.forEach((element, index) => {
    BookInfo.innerHTML += `<tr>
      <td class="ms-4 fs-5">
        <span class="ms-3">
          "${element.title}" by ${element.author}
        </span>
      </td>
      <td class="d-flex">
        <button class="btn btn-warning fs-5 mx-auto" onclick = BL.deleteBook(${index})>
          Delete
        </button>
      </td>
    </tr>`;
  });

  if (getmylibrary.length === 0) {
    titreSect1.innerHTML = '';
    titreSect1.innerHTML += 'there are no books yet but they will soon appear here';
  } else {
    titreSect1.innerHTML = '';
    titreSect1.innerHTML += 'All awesome books';
  }
}

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class StorageFun {
  constructor(array) {
    this.array = array;
  }

    updateStorage = () => {
      localStorage.mesLivres1 = JSON.stringify(this.array);
    };

    addBook = () => {
      const newBook = new Books(titleInput.value, authorInput.value);
      this.array.push(newBook);
      this.updateStorage();
      renderBook();
      titleInput.value = '';
      authorInput.value = '';
    };

   deleteBook = (i) => {
     this.array.splice(i, 1);
     this.updateStorage();
     renderBook();
   };
}

/** navigation function */

const newBook = document.getElementById('newbook');
const myForm = document.getElementById('myForm');
const myBookList = document.getElementById('bookList');
const myList = document.getElementById('list');
const myHome = document.getElementById('home');
const myContact = document.getElementById('myContact');
const contactNavLink = document.getElementById('contactNavLink');

/* Add time vue */
const time = document.getElementById('dateTime');
time.innerHTML = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
/* End */

newBook.addEventListener('click', (e) => {
  e.preventDefault();
  myForm.classList.remove('d-none');
  newBook.classList.add('active');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myList.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myHome.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

contactNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactNavLink.classList.add('active');
  myForm.classList.add('d-none');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  newBook.classList.remove('active');
  myContact.classList.remove('d-none');
});

/* End function */

const BL = new StorageFun(getmylibrary);
addBookButton.addEventListener('click', () => {
  BL.addBook();
});

window.addEventListener('load', () => {
  renderBook();
});