import { useState } from "react";
import TopBar from "./TopBar";
import { Button } from "react-bootstrap";

export default function App() {
  //const [count, setCount] = useState(1)

  const [modeStatus, setModeStatus] = useState("dark")
  const [itemsInCart, setItemsInCart] = useState([
    {
      type: "shoes",
      pickUp: true
    },
    {
      type: "hat",
      pickUp: false
    },
  ])

  const flipMode = () => {
    // HORRIBLE: modeStatus = "light"

    // GREAT
    // if(modeStatus === "light") {
    //   setModeStatus("dark")
    // } else {
    //   setModeStatus("light")
    // }

    // GREATER
    setModeStatus(modeStatus === "light" ? "dark" : "light")
  }

  const addToCart = (typeToAdd: string) => {
    // add an item of that type to the cart
    const newItem = {
      type: typeToAdd,
      pickUp: false
    }

    // HORRIBLE BLASPHEMY - Set state directly / mutated state
    // BAD WRONG itemsInCart.push(newItem)
    // Usually shows up as it not changing at all
    // it changing twice

    // GOOD
    // sets itemsInCart to a copy with the new item on the end
    // const copyOfItemsInCart = [...itemsInCart]
    // copyOfItemsInCart.push(newItem)
    // setItemsInCart(copyOfItemsInCart)

    // GREAT
    // sets itemsInCart to a copy with the new item on the end
    setItemsInCart([...itemsInCart, newItem])
  }

  // a little hacky using the index
  // we should be doing this by id
  const removeFromCart = (indexToRemove: number) => {
    // BAD itemsInCart.splice(indexToRemove, 1)
    // GOOD
    const copyOfItemsInCart = [...itemsInCart]
    copyOfItemsInCart.splice(indexToRemove, 1)
    setItemsInCart(copyOfItemsInCart)
    // BEST
    // setItemsInCart(itemsInCart.filter(
    //   item => item.id !== idToDelete
    // ))
  }

  return (
    <div>
      <TopBar mode={modeStatus} cartCount={itemsInCart.length} />
      <Button onClick={flipMode}>{modeStatus}</Button>
      <div>
        Shoes
        <button onClick={() => addToCart("shoes")}>Add to Cart</button>
      </div>
      <div>
        Hat
        <button onClick={() => addToCart("hat")}>Add to Cart</button>
      </div>
      <h3>Cart</h3>
      {itemsInCart.map((item, index) => (
        <div>
          {item.type}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      {/* <Sibling1 count={count}/>
      <Sibling2 count={count} setCount={setCount}/> */}
    </div>
  )
}



// const [nameOfVariable, setNameOfVariable] = useState(INITIAL_VALUE)
// const nameOfVariable = INITIAL_VALUE


// BUCKETS
// variable
// parameter
// prop
// state

// DATA TYPES
// string
// number
// boolean
// object
// array
// JSX
// function