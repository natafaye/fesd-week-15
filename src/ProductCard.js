import { Component, useState } from "react";


// class ProductCard extends Component {
//     // happens by default
//     constructor(props) {
//         super(props);

//         this.state = {
//             color: "red",
//             number: 3
//         }
//     }

//     setColorToGreen = () => {
//         this.setState({ color: "green" })
//     }

//     render() {
//         return (
//             <div className="border p-3">
//                 { this.props.product.name } - { this.props.product.price }
//                 <p>{ this.state.color } { this.state.number }</p>
//                 <button onClick={this.setColorToGreen}>Set Color to Green</button>
//             </div>
//         )
//     }
// }

function ProductCard({ product }) {
    const [color, setColor] = useState("red")
    const [number, setNumber] = useState(3)

    const setColorToGreen = () => {
        setColor("green")
    }

    return (
        <div className="border p-3">
            { product.name } - { product.price }
            <p>{ color } { number }</p>
            <button onClick={setColorToGreen}>Set Color to Green</button>
        </div>
    )
}

export default ProductCard;

// props = {
// 	product: {
// 		name: "watch",
// 		price: 30
// 	}
// }




// ONE WAY YOU COULD PICTURE IT
// function useState(initialValue) {
//     // NOT THE REAL CODE, WOULD NOT WORK
//     let pieceOfState = initialValue;

//     const setPieceOfState = (newValue) => {
//         pieceOfState = newValue;
//     }

//     return [pieceOfState, setPieceOfState]
// }




// function getSnackAndDrink() {
//     const chips = "doritos"
//     const cup = "sprite"
//     return [chips, cup]
// }

// const [snack, drink] = getSnackAndDrink()

// console.log( snack )