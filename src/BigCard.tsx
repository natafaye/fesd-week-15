import { Card } from "./types"

type Props = {
    card: Card
    canCheat: boolean
    onCardHide: (theSpecialIdToHide: number) => void
    onCardSwap: (idToSwap: number) => void
}

// onCardHide = set to hideInSleeve from the app component = (idToHide: number) => {
//     const myHandCopy = [...myHand]
//     const indexToDelete = myHandCopy.findIndex(card => card.id === idToHide)
//     myHandCopy.splice(indexToDelete, 1)
//     setMyHand(myHandCopy)
//   }

export default function BigCard({ card, canCheat, onCardHide, onCardSwap }: Props) {
    const handleHide = () => {
        onCardHide( card.id )
    }
    const handleSwapToA = () => {
        onCardSwap( card.id )
    }

    return (
        <div className="p-4 border fs-3">
            {card.value} {card.suit}
            {canCheat ?
                <>
                    <button className="fs-6 btn-sm btn btn-warning" onClick={handleHide}>
                        Hide in Your Sleeve 
                        {/* (delete) */}
                    </button>
                    <button className="fs-6 btn-sm btn btn-warning" onClick={handleSwapToA}>
                        Swap with an A 
                        {/* (update) */}
                    </button>
                </>
                : null
            }
        </div>
    )
}