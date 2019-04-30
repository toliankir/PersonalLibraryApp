import React, {useState} from 'react';

export default function BookAuthor({onBookAuthorChange, bookAuthor, setGlobalError}) {
    const [error, setError] = useState(false);

    const authorCheck = (author) => {
        const error = !author.match(/^[a-zA-Z ]+$/);
        setGlobalError(error);
        return error;
    };

    return (
        <p>
            <label form="bookAuthor">Author</label>
            <input
                className={error ? 'error' : ''}
                id="bookAuthor"
                type="text" value={bookAuthor}
                onChange={ (el) => {
                    setError(authorCheck(el.target.value));
                    onBookAuthorChange(el);
                }}
                placeholder="e.g.: Lewis Carroll"/>
        </p>
    );
};