import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Bookshelf from '../components/Bookshelf';
import { getAll } from '../BooksAPI';
class ListBooks extends React.Component {
	movebook = this.movebook.bind(this);

	state = {
		books: []
	};

	segregator(status) {
		return this.state.books.filter(book => book.shelf === status);
	}

	getbooks() {
		
		getAll().then(data => {
			this.setState({
				books: data
			});
		});
	}

	componentDidMount() {
		this.getbooks();
	}

	movebook(e) {
		let paretn = e.target.parentNode.parentNode.nextElementSibling;
		let m = this.state.books.filter(book => book.title === paretn.innerText);
		m[0].shelf = e.target.value;
		this.setState({
			books:this.state.books
		});
	}

	render() {
		const currentlyReading = this.segregator('currentlyReading');
		const wantToRead = this.segregator('wantToRead');
		const read = this.segregator('read');
		return (
			<>
				<div className="list-books">
					<Title heading="MyReads" />
					<div className="list-books-content">
						<div>
							<Bookshelf
								title="Currently Reading"
								books={currentlyReading}
								movebook={this.movebook}
							/>
							<Bookshelf
								title="Want to Read"
								books={wantToRead}
								movebook={this.movebook}
							/>
							<Bookshelf
								title="Read"
								books={read}
								movebook={this.movebook}
							/>
						</div>
					</div>
					<div className="open-search">
						<Link to="/search">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default ListBooks;



