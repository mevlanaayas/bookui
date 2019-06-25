import axios from 'axios'

const api = '/api/';

// get
const books = api + 'me/books';
const words = api + 'me/words';
const stats = api + 'me/stats';
const relatedWords = api + 'words';

//post
const createBook = api + 'books';
const createWord = api + 'words';

export default  {
    Stats: function (options) {
        console.log(`Options: ${options}`);
        console.log(`Stats: ${stats}`);
        return axios.get(stats, {...options})
    },
    Books: function (options) {
        console.log(`Options: ${options}`);
        console.log(`Books: ${books}`);
        return axios.get(books, {...options})
    },
    Words: function (options) {
        console.log(`Options: ${options}`);
        console.log(`Words: ${words}`);
        return axios.get(words, {...options})
    },
    CreateBook: function (options) {
        console.log(`Options: ${options}`);
        console.log(`CreateBook: ${createBook}`);
        return axios.post(createBook, {...options})
    },
    CreateWord: function (options) {
        console.log(`Options: ${options}`);
        console.log(`CreateWord: ${createWord}`);
        return axios.post(createWord, {...options})
    },
    RelatedWords: function (options) {
        console.log(`Options: ${options}`);
        console.log(`RelatedWords: ${relatedWords}`);
        return axios.get(relatedWords, {...options})
    }
}
