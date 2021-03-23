import { Component } from 'react';

export default class Child extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inuptValue: '',
		}
	}

	onHandleChange = ({ target: { value } }) => {
		this.props.handleText(value);
		this.setState({ inuptValue: value });
	}

	render() {
		const { inuptValue } = this.state;
		// this.props.handleText(value)
		console.log(this.props);

		return (
			<>
				<input value={inuptValue} onChange={this.onHandleChange} />
				<p>value: {inuptValue}</p>
			</>
		)
	}
}