import { useState } from "react"
import Board from "./Board"
import Footer from "./Footer"
import LowScoreTable from "./LowScoreTable"
import Message from "./Message"
import NameEntry from "./NameEntry"
import { TEST_DATA } from "./testData"

export default function App() {
  const [messageText, setMessageText] = useState("")
  const [playerList, setPlayerList] = useState(TEST_DATA)
  const [currentPlayerId, setCurrentPlayerId] = useState<null | number>(null)

  const handleStart = (name: string) => {
    let nextPlayer = playerList.find(playerToCheck => playerToCheck.name === name)

    if (nextPlayer === undefined) {
      nextPlayer = { id: 5, name: name, lowScore: 1000 } // TODO: fix that id at some point

      // EVIL
      // playerList.push(nextPlayer)
      // FINE
      // set the playerList to a copy of itself with the next player on the end
      // const copyOfPlayerList = [...playerList]
      // copyOfPlayerList.push(nextPlayer)
      // setPlayerList(copyOfPlayerList)
      // MAGNIFICENT
      setPlayerList([...playerList, nextPlayer])
    }
    
    // EVIL
    // currentPlayerId = nextPlayer.id
    // MAGNIFICENT
    setCurrentPlayerId(nextPlayer.id)

    // Rendering based on that state
    setMessageText("Welcome " + nextPlayer.name + " Your lowest score so far is " + nextPlayer.lowScore)
  }

  return (
    <div>
      <NameEntry onNameEntered={handleStart} />
      <Message messageText={messageText} textColor="blue" />
      <Board />
      <Footer />
      <LowScoreTable playerList={playerList} />
    </div>
  )
}

