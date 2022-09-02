
async function deleteBook(isbn) {
  const URL = 'http://localhost:6066/api/books';
  const response = await fetch(URL + "/" + isbn, { method: 'DELETE'});
    // Reloading the page
    location.reload();
}

async function showBooks() {
  const URL = 'http://localhost:6066/api/books';
    const response = await fetch(URL);

    const responseBooks = await response.json();

    for (let book of responseBooks) {
        const card = 
        `<div class="col-4">
          <div class="card">
            <div class="card-body">
            <hr>
             <h5 class="card-title">${book.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${book.isbn}<h6>

              <div>Author: ${book.author}</div>
              <div>Format: ${book.format}</div>
              <br>

              <button type="button" class="btn btn-danger" onClick="${deleteBook()} method="DELETE">Delete</button>
        </div>
        </div>
        </div>`
        document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
      }
    };

showBooks();