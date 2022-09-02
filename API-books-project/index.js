import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import BOOKS from './books.js';
import path  from 'path';

const app = express();

const port = 6066;

app.use(cors());

const __dirname = path.resolve();

app.use(express.static("client"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

//how to get data from form to add to Books (middleware)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/addbook', (req, res) => {
    const newBook = req.body;
    console.log(newBook);
    BOOKS.push(newBook);

    res.send('Book is added to the database');
});

// deleting a book from our API
app.delete('/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    BOOKS = BOOKS.filter(i => {
        if(i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
})
//creating /api/books endpoint - GET REQUEST
app.get('/api/books', (req, res) => {
    res.json(BOOKS);
    console.log(BOOKS);
})

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`));

