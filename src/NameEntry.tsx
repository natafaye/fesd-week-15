type Props = {
    onNameEntered: (name: string) => void
}

export default function NameEntry({ onNameEntered }: Props) {
    return (
        <div>
            <label>Name</label>
            <div>
                <input type="text" />
                <button onClick={() => onNameEntered("Haley")}>Start</button>
            </div>
        </div>
    )
}