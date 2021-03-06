import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BooksSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: uuidv4(), title, author };
        dispatch(addBooks(book));
        navigate('/show-books', { replace: true });
    };
    return (
        <div>
            <h2>AddBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="author">Author </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
