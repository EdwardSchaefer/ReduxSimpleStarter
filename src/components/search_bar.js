import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		//call props of Component
		super(props);

		//initialize search term value as empty string
		//otherwise use this.setState
		this.state = { term: '' }
	}

	render() {
		return (
			<div className="search-bar">
				<input
					//controlled component
					value = {this.state.term}
					onChange = {event => this.onInputChange(event.target.value)} />
			</div>
		);
	};

	onInputChange(term) {
		this.setState({term})
		this.props.onSearchTermChange(term);
	}
};

/* Function-based component
const SearchBar = () => {
	return <input />
};
*/

export default SearchBar