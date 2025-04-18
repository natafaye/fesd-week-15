import BigCard from "./BigCard"
import { Card } from "./types"

type Props = {
    cards: Card[] // Array<Card> is great too
    canCheat: boolean
    onHide: (theSpecialIdToHide: number) => void
    onSwap: (idToSwap: number) => void
}

export default function CardList({ cards, canCheat, onHide, onSwap }: Props) {
    return (
        <div className="d-flex gap-3 mt-3">
            {cards.map(c => (
                <BigCard card={c} key={c.id} canCheat={canCheat} onCardHide={onHide} onCardSwap={onSwap} />
            ))}
        </div>
    )
}