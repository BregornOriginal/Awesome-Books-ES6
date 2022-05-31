const newBook = document.getElementById('newbook');
const myForm = document.getElementById('myForm');
const myBookList = document.getElementById('bookList');
const myList = document.getElementById('list');
const myHome = document.getElementById('home');
const myContact = document.getElementById('myContact');
const contactNavLink = document.getElementById('contactNavLink');

const navNewBook = newBook.addEventListener('click', (e) => {
  e.preventDefault();
  myForm.classList.remove('d-none');
  newBook.classList.add('active');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

const navMyList = myList.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

const navHome = myHome.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

const navNavLink = contactNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactNavLink.classList.add('active');
  myForm.classList.add('d-none');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  newBook.classList.remove('active');
  myContact.classList.remove('d-none');
});

export {
  navNewBook, navMyList, navHome, navNavLink,
};
