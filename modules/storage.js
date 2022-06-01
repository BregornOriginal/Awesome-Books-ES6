const storage = () => {
  if (JSON.parse(localStorage.getItem('booksStorage')) === null) {
    localStorage.setItem('booksStorage', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('booksStorage'));
};

export default storage;
