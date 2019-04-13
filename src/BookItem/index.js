import React from 'react';
import BookRate from './BookRate';
import BookTitle from './BookTitle';
import './style.css';

export default function BookItem({bookItem, setCurrentBook}) {
    return (
        <div onClick={() =>
            setCurrentBook(Object.assign({}, bookItem, {'tempRate': bookItem.rate}))}
             className="book-item">
            {bookItem.rate ? <BookRate rate={bookItem.rate}/> : ''}
            {bookItem.name ? <BookTitle title={bookItem.name}/> : ''}
            {bookItem.id || bookItem.imgUrl
                ? <img alt={bookItem.name} src={bookItem.imgUrl}/>
                : <span className="no-image">+</span>}
        </div>
    );
};