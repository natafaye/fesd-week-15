import type { Player } from "./types"

type Props = {
  playerList: Player[]
}

export default function LowScoreTable({ playerList }: Props) {
  return (
    <div>
      <h4>Low Scores</h4>
      <table className="table table-striped">
        <tbody>
          {playerList.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td><td>{player.lowScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}