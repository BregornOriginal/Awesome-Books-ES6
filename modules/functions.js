const BookInfo = document.getElementById('booksContainer');
const titleSect1 = document.getElementById('title-sec1');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

let getMyLibrary = JSON.parse(localStorage.getItem('mesLivres1'));

import { Books, StorageFun, booksData } from './books.js'


const renderBook = (dataArr) => {
  BookInfo.innerHTML = '';
  dataArr.forEach((element, id) => {
    const tr = document.createElement('tr');
    BookInfo.appendChild(tr);
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

    deleteButton.addEventListener('click', () => booksData.deleteBook(`${id}`));
  })
}

//     BookInfo.innerHTML += `<tr>
//       <td class="ms-4 fs-5">
//         <span class="ms-3">
//           "${element.title}" by ${element.author}
//         </span>
//       </td>
//       <td class="d-flex">
//         <button class="btn btn-warning fs-5 mx-auto" onclick = "StorageFun(${index})">
//           Delete
//         </button>
//       </td>
//     </tr>`;
//   });
// }

const showTitle = (dataArr) => {
  if (dataArr.length === 0) {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'there are no books yet but they will soon appear here';
  } else {
    titleSect1.innerHTML = '';
    titleSect1.innerHTML += 'All awesome books';
  }
}

const storage = () => {
  if (JSON.parse(localStorage.getItem('mesLivres1')) === null) {
    getMyLibrary = [];
  } else {
    getMyLibrary = JSON.parse(localStorage.getItem('mesLivres1'));
  }
  return getMyLibrary;
}

export { renderBook, showTitle, storage };
