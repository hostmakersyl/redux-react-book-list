import  React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return ( <li

                    key={book.title}
                    onClick ={() => this.props.selectBook(book)}
                    className="">
                    {book.title}
            </li>
            );
        })
    };

    render(){
        return(
            <ul className="">
                {this.renderList()};
            </ul>

        )
    }

}


function mapStateToProps(state) {
// Whatever is returnd will show up as props
    // inside of BookList
    return{
        books: state.books
    };
}
//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, teh result should be passed
    // to all of our reducer
    return bindActionCreators({selectBook: selectBook }, dispatch);

}
// Promote BookList from a component to a container ---it needs to know
// about this new dispatch methond, selectBook. make it availabe
// as a prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
