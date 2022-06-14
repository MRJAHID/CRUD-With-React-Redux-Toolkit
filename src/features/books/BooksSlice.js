const { createSlice } = require('@reduxjs/toolkit');
const { v4: uuidv4 } = require('uuid');

const initialBooks = {
    books: [
        { id: uuidv4(), title: 'Love Bangladesh', author: 'Jahid' },
        { id: uuidv4(), title: 'Love Javascript', author: 'Js' },
    ],
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        updateBooks: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    },
});

export const { showBooks, addBooks, deleteBooks, updateBooks } = booksSlice.actions;
export default booksSlice.reducer;
