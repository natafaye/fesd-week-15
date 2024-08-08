type Props = { 
    count: number, 
    setCount: (value: number) => void 
}

export default function Sibling2({ count, setCount }: Props) {
    

    return (
        <div>
            Sibling 2
            COUNT: {count}
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}