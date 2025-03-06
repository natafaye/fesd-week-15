import BoardSlot from "./BoardSlot"

export default function Board() {
    const pegsInRow = 5
    return (
        <div
            className="board bg-light border d-flex justify-content-between align-items-center p-3"
        >
            {[...Array(pegsInRow)].map((_, index) => ( // a little trick to loop pegsInRow times using map
                <BoardSlot key={index}/>
            ))}
        </div>
    )
}