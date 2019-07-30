import React from 'react';

const List = props => {
	return (
		<select onChange={props.movebook} value={props.rstate}>
			<option value="move" disabled>
				Move to...
			</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
			<option value="none">None</option>
		</select>
	);
};

export default List;
