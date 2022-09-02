async function showBooks() {

    const URL = 'http://localhost:6066/api/books';
    const response = await fetch(URL);

    const responseBooks = await response.json();

    for (let book of responseBooks) {
        const card = `<div class="col-4">
        <div class="card">
        <div class="card-body">
        <h5 class="class-title">${book.title}</h5>
        </div>
        </div>
        </div>`
        document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
      }
    };

showBooks();