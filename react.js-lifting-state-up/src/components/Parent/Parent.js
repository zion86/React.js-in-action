import { Component } from 'react';
import Child from '../Child/Child';

export default class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		}
	}

	handleTextChange = newText => {
		this.setState({ text: newText });
	}

	render() {
		const { text } = this.state;

		return (
			<>
				<h1>Lifting State up in ReactJS</h1>

				<h3>Parent class Component</h3>
				<p>value: {text}</p>
				{/* handleText(value) */}

				<br />

				<h3>Child class Component</h3>
				<Child handleText={this.handleTextChange} />
			</>
		)
	}
}