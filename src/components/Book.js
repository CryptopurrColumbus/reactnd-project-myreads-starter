import React from 'react';
import List from './List';

const Book = props => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${props.book.imageLinks.thumbnail})`
					}}
				/>
				<div className="book-shelf-changer">
					<List movebook={props.movebook} rstate={props.book.shelf} />
				</div>
			</div>
			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{props.book.authors}</div>
		</div>
	);
};
export default Book;
