import { useState } from "react"
import CardList from "./CardList"
import getRandomCard from "./getRandomCard"

export default function App() {
  // You cannot add or remove from this hand (without state)
  //const myHand = [ getRandomCard(), getRandomCard() ]
  const [myHand, setMyHand] = useState([getRandomCard(), getRandomCard()])
  // myHand would look something like this:
  // const myHand = [
  //   {
  //     id: 2343243,
  //     value: 4,
  //     suit: "♣️"
  //   },
  //   {
  //     id: 43243,
  //     value: 10,
  //     suit: "❤️"
  //   }
  // ]
  const [dealerHand, setDealerHand] = useState([getRandomCard(), getRandomCard()])

  // my bet piece of state
  //const myBet = 0
  const [bet, setBet] = useState(0)

  const raiseBet = () => {
    // BLASPHEMY
    // bet++
    // GORGEOUS
    setBet(bet + 1)
  }

  const lowerBet = () => {
    setBet(bet - 1)
  }

  const handleHit = () => {
    // BLASPHEMY
    // myHand.push(getRandomCard())

    // We have to do this WITHOUT CHANGING THE ORIGINAL ARRAY
    // We have to make a copy and add the card to the copy, then set the state to that updated copy
    //setMyHand(the hand with one more card in it)

    // IMPORTANT NOTE
    // This does not make a copy
    //const myHandCopy = myHand // <--- NO BAD


    // THIS IS A GREAT OPTION
    // Make a copy of the array
    // const myHandCopy = [...myHand] // myHand.slice()
    // myHandCopy.push(getRandomCard())
    // // Set the myHand piece of state to the updated copy with the new card in it
    // setMyHand( myHandCopy )

    // BEAUTIFUL STREAMLINED VERSION
    // Set my hand to a new array with all the insides of myHand and a random card on the end
    setMyHand([...myHand, getRandomCard()])

    // const user = { id: 3 }
    // const copyOfUser = { ...user }
  }

  const hideInSleeve = (idToHide: number) => {
    // Set myHand to a copy of myHand without the card that matches the idToHide

    // LONG HANDED WAY OF DOING IT
    // const myHandCopy = [...myHand]
    // const indexToDelete = myHandCopy.findIndex(card => card.id === idToHide)
    // myHandCopy.splice(indexToDelete, 1)
    // setMyHand(myHandCopy)

    // SHORTHANDED WAY
    // setSomeArray(someArray.filter(
    //   item => item.id !== idToDelete
    // ))
    setMyHand(myHand.filter(
      card => card.id !== idToHide
    ))
  }

  const swapWithA = (swapId: number) => {
    // Set my hand to a copy of the array with the card with the swapId replaced with a copy of itself with the value set to A

    // Longhanded
    // const copyOfMyHand = [...myHand]
    // const swapCard = myHand.find(card => card.id === swapId)! // <-- Typescript trick to say this won't be undefined
    // const copyOfSwapCard = { ...swapCard }
    // copyOfSwapCard.value = "A"
    // const indexToReplace = copyOfMyHand.indexOf(swapCard)
    // copyOfMyHand[indexToReplace] = copyOfSwapCard
    // setMyHand(copyOfMyHand)

    // Shorthand
    // setSomeArray(someArray.map(item => (
    //   item.id !== idToUpdate ? item : {
    //     ...item,
    //     property: newValue
    //   }
    // )))
    setMyHand(myHand.map(card => (
      card.id !== swapId ? card : {
        ...card,
        value: "A"
      }
    )))
  }

  const handleStand = () => {
    alert("Standing!")
  }

  // Return what that part of the page should look like right now (eventually based on the state)
  return (
    <div className="container mt-3">
      <h2>Blackjack</h2>
      <p>
        Betting
        <button className="btn btn-primary" onClick={raiseBet}>⬆️</button>
        <span className="p-3">{bet}</span>
        <button className="btn btn-primary" onClick={lowerBet}>⬇️</button>
      </p>
      <div>
        <h4>Dealer</h4>
        <CardList cards={dealerHand} canCheat={false} onHide={hideInSleeve} onSwap={swapWithA} />
        <button className="btn btn-success mt-4" onClick={handleHit}>Hit Me</button>
        <button className="btn btn-primary mt-4" onClick={handleStand}>Stand</button>
        <h4>You</h4>
        <CardList cards={myHand} canCheat={true} onHide={hideInSleeve} onSwap={swapWithA} />
      </div>
    </div>
  )
}