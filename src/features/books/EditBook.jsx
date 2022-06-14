import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBooks } from './BooksSlice';

export default function EditBook() {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBooks({ id, title, author }));
        navigate('/show-books', { replace: true });
    };

    return (
        <div>
            <h2>Edit Book</h2>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
}
