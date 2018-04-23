// State argument is not application state, only the state
//this reducer is responsible for
// below state will always be called when dispatch from send data from container/book_list.js file.
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload

    }
    return state
}