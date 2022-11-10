import React, { Component, useState } from 'react'

// export default class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			color: "green", // create and give an initial value
//			amount: 3
// 		}
// 	}

// 	onSetClick = () => {
// 		this.setState({ color: "blue" }) // change it
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Greeting name="Natalie" size={5} />
// 				{ this.state.color }
// 				<button onClick={this.onSetClick}>Set</button>
// 			</div>
// 		)
// 	}
// }

// NOT THE REAL CODE, JUST A VAGUE IDEA OF IT
// const useState = (initialValue) => {
// 	let pieceOfState = initialValue;

// 	const setState = (newValue) => {
// 		pieceOfState = newValue;
// 	}

// 	return [pieceOfState, setState]
// }

export default function App() {
	// const twoThings = useState("green") // create and give an initial value
	// color = twoThings[0] // value of the piece of state
	// setColor = twoThings[1] // function for updating that piece of state

	const [color, setColor] = useState("green") // create and give an initial value
	const [amount, setAmount] = useState(3)

	const onSetClick = () => {
		setColor("blue") // change it
		setAmount(5);
	}

	return (
		<div>
			<Greeting name="Natalie" size={5} />
			{ color }
			{ amount }
			<button onClick={onSetClick}>Set</button>
		</div>
	)
}

// props = {
// 	name: "Natalie",
// 	size: 2
// }

// class Greeting extends Component {
// 	render() {
// 		return (
// 			<p>Hello { this.props.name} { this.props.size } </p>
// 		)
// 	}
// }

function Greeting( { name, size } ) {
	return (
		<p>Hello { name} { size } </p>
	)
}




// HACK TO RETURN 2 THINGS FROM A FUNCTION

// function getMeal() {
// 	const chicken = "chicken";
// 	const pie = "pie";
// 	return [chicken, pie]
// }

// const [mainDish, dessert] = getMeal();

// const meal = getMeal();
// const mainDish = meal[0];
// const dessert = meal[1]


