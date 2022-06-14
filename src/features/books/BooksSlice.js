const { createSlice } = require('@reduxjs/toolkit');

const initialBooks = {
    books: [
        { id: 1, title: 'Love Bangladesh', author: 'Jahid' },
        { id: 2, title: 'Love Javascript', author: 'Js' },
    ],
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;
