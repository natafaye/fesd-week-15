import { useState } from "react"
import { useRandomNumber } from "./pickRandomNumber"

// let shoppingList = []



// // BUTLER/RENDERING
// function ShoppingCart() {
//   // EVENT LISTENER
//   const addToCart = () => {
//     shoppingList.push(fdsfdss)
//     renderShoppingCart()
//   }

//   return (
//     <div>
//       <button onClick={addToCart}>Add</button>
//       show shopping cart items here
//     </div>
//   )
// }





export default function App() {
  const number = useRandomNumber()

  return (
    <div>
      I'm an app
      {/* with piece of state set to true */}
      <SpecialButton text={"Click Me " + number + " Times"} />

      Info about our product
      {/* with piece of state set to false */}
      <SpecialButton text="Buy Stuff" />
    </div>
  )
}

type Props = {
  text: string
}

// FEEL FREE TO IGNORE THIS
// function useState(initialValue) {
//   // more magic
//   let stateVariable = initialValue
//   const setState = (newValue) => {
//     stateVariable = newValue
//     // also do rendering magic
//   }

//   return [stateVariable, setState]
// }


function SpecialButton({ text }: Props) {
  //let hasBeenClicked = false
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  // const [variableName, settingFunctionName] = useState(INTIIAL_VALUE)
  // const [state, butlerForState] = useState(initialValue)

  const handleClick = () => {
    // BLASPHEMY
    // hasBeenClicked = true

    // Politely requesting a change to that piece of state and a re-render
    setHasBeenClicked(true)
  }

  return (
    <button
      onClick={handleClick}
      className={hasBeenClicked ? "btn btn-primary" : "btn btn-secondary"}
    >
      {text}
    </button>
  )
}