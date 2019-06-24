import axios from 'axios'

const api = '/api/';

const books = api + 'me/books';
const words = api + 'me/words';
const stats = api + 'me/stats';

export default  {
    Stats: function (options) {
        console.log(`Options: ${options}`);
        console.log(`Stats: ${stats}`);
        return axios.get(stats, {...options})
    }
}
