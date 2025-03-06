import { useState } from "react"
import ballImg from "./assets/ball.png"

type Props = {}
export default function BoardSlot({ }: Props) {
    const [showBall, setShowBall] = useState(false)
    return (
        <>
            <div className="peg"></div>
            <button
                className="drop-button flex-grow-1 border-0"
                onMouseEnter={() => setShowBall(true)}
                onMouseLeave={() => setShowBall(false)}
            >
                {showBall ? (
                    <div className="ball">
                        <img src={ballImg} />
                    </div>
                ) : null}
            </button>
        </>
    )
}