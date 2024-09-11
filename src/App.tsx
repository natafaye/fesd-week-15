import { useState } from "react"
import LetterOptions from "./components/LetterOptions"
import Man from "./components/Man"
import WordCard from "./components/WordCard"
import { getRandomWord } from "./components/randomWords"

export default function App() {
  const [word, setWord] = useState("follicles")
  const [letters, setLetters] = useState(["a", "l", "c"])

  const resetGame = () => {
    // set the word to a new word "rubber"
    const newWord = getRandomWord()
    setWord(newWord)
  }

  const addLetter = (letterToAdd: string) => {
    // if this is confusing
    setLetters([...letters, letterToAdd])

    // You can totally do this
    // const copyOfLetters = letters.slice() // [...letters]
    // copyOfLetters.push(letterToAdd)
    // setLetters(copyOfLetters)
  }

  return (
    <div>
      <Man/>
      <WordCard word={word}/>
      <LetterOptions letters={letters} onLetterClick={addLetter}/>
      <button onClick={resetGame}>New Game</button>
    </div>
  )
}


// variables in different contexts with the same data probably should be named the same
// variables in the same context with different data, please name those different as possible