import React from 'react';
import List from './List';

const Book = props => {
  console.log(props.book);
	// constructor(props) {
	//   super(props);

	//   this.state ={
	//     selected:"currentlyReading"
	//   }

	// 	this.myMethod = this.myMethod.bind(this);
	// }
	// myMethod(e) {
	// 	this.setState({
	// 		selected: e.currentTarget.value
	// 	});
	// }

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${props.book.url})`
					}}
				/>
				<div className="book-shelf-changer">
          <List />
          {/* select={this.myMethod} selected={this.state.selected}  */}
				</div>
			</div>
			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{props.book.author}</div>
		</div>
	);
};
export default Book;
