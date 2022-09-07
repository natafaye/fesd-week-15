import { Component, useState } from "react";


// class TaskList extends Component {
//     // Happens by default
//     constructor(props) {
//         super(props);

//         // initialize the state
//         this.state = {
//             count: 0,
//             color: "red"
//         }
//     }

//     setCountTo20 = () => {
//         this.setState({ count: 20 })
//     }

//     render() {
//         return (
//             <div>
//                 { this.props.color }
//                 { this.state.count }
//                 <button onClick={this.setCountTo20}>Set to 20</button>
//             </div>
//         )
//     }
// }

const TEST_DATA = [
    {
        id: 0,
        name: "fdsfdsf"
    }
]

function TaskList({ color, number }) {
    const [ count, setCount ] = useState(0)
    // const [ color, setColor ] = useState("red")

    const [ users, setUsers ] = useState(TEST_DATA)
    // SAME THING
    // const [ users, setUsers ] = useState([
    //     {
    //         id: 0,
    //         name: "fdsfdsf"
    //     }
    // ])

    const setCountTo20 = () => {
        setCount(20)
    }

    return (
        <div>
           { count }
           <button onClick={setCountTo20}>Set to 20</button>
        </div>
    )
}

export default TaskList;


// IMAGINATION NOT THE ACTUAL USESTATE FUNCTION
// const useState = (initialValue) => {
//     let pieceOfState = initialValue;

//     // WOULDN'T ACTUALLY WORK
//     const setPieceOfState = (newValue) => {
//         pieceOfState = newValue;
//     }

//     return [ pieceOfState, setPieceOfState ]
// }




// props = {
// 	color: "red",
// 	number: 3,
// 	order: {
// 		main: "spaghetti",
// 		side: "potatoes"
// 	}
// }



// function getSnacks() {
//     return ["drink", "chips"]
// }

// const [drink, crunchyThing] = getSnacks();


// console.log(crunchyThing)