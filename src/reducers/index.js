import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers ({
    //state: (state = {}) => state
    books: BooksReducer,   //which output comes from reducer_books it store on BookReducer as reducer...and books is a state..we can name books as we want..
    activeBook: ActiveBook

     });

export default rootReducer;