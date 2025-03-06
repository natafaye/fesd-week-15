
type Props = {
    messageText: string
    textColor: string
}

export default function Message({ messageText, textColor }: Props) {
    return (
        <div className="m-3" style={{ color: textColor }}>
            {messageText}
        </div>
    )
}