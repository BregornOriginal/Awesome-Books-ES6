const titleSect1 = document.getElementById('title-sec1');

const showTitle = (getMyLibrary) => {
  if (getMyLibrary.length === 0) {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'there are no books yet but they will soon appear here';
  } else {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'All awesome books';
  }
};

export default showTitle;
