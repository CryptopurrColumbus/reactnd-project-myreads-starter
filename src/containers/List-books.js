import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Bookshelf from '../components/Bookshelf';
class ListBooks extends React.Component {
	movebook = this.movebook.bind(this);

	state = {
		books: [
			{
				author: 'Harper Lee',
				title: 'To Kill a Mockingbird',
				url:
					'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
				readstate: 'currentlyReading'
			},
			{
				author: 'Orson Scott Card',
				title: "Ender's Game",
				url:
					'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
				readstate: 'currentlyReading'
			},
			{
				author: 'David McCullough',
				title: '1776',
				url:
					'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
				readstate: 'wantToRead'
			},
			{
				author: 'J.K. Rowling',
				title: "Harry Potter and the Sorcerer's Stone",
				url:
					'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
				readstate: 'wantToRead'
			},
			{
				author: 'J.R.R. Tolkien',
				title: 'The Hobbit',
				url:
					'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
				readstate: 'read'
			},
			{
				author: 'Seuss',
				title: "Oh, the Places You'll Go!",
				url:
					'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
				readstate: 'read'
			},
			{
				author: 'Mark Twain',
				title: 'The Adventures of Tom Sawyer',
				url:
					'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
				readstate: 'read'
			}
		],
		currentlyReading: [],
		wantToRead: [],
		read: []
	};

	segregator(status) {
		return this.state.books.filter(book => book.readstate === status);
	}

	componentDidMount() {
		this.setState({
			currentlyReading: this.segregator('currentlyReading'),
			wantToRead: this.segregator('wantToRead'),
			read: this.segregator('read')
		});
	}

	movebook(e) {
		let paretn = e.target.parentNode.parentNode.nextElementSibling;
		let m = this.state.books.filter(book => book.title === paretn.innerText);
		m[0].readstate = e.target.value;
		this.setState({
			currentlyReading: this.segregator('currentlyReading'),
			wantToRead: this.segregator('wantToRead'),
			read: this.segregator('read')
		});
	}

	render() {
		return (
			<>
				<div className="list-books">
					<Title heading="MyReads" />
					<div className="list-books-content">
						<div>
							<Bookshelf
								title="Currently Reading"
								books={this.state.currentlyReading}
								movebook={this.movebook}
							/>
							<Bookshelf
								title="Want to Read"
								books={this.state.wantToRead}
								movebook={this.movebook}
							/>
							<Bookshelf
								title="Read"
								books={this.state.read}
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
