const suits = ["♠️", "♣️", "♦️", "❤️"]
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

// If you have code that has nothing to do with Reacty stuff (rendering, listening, state)
// then you can just put it in its own file with nothing Reacty about it

// Nothing Reacty here, just a normal function
export default function getRandomCard() {
  return {
    id: Math.floor(Math.random() * 10000), // Hopefully unique, but definitely consistent (don't do this)
    value: numbers[Math.floor(Math.random() * numbers.length)],
    suit: suits[Math.floor(Math.random() * suits.length)]
  }
}