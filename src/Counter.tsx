import { Button } from "react-bootstrap"

type Props = {
    label: string
    count: number
    id: number
    add: () => void
    subtract: () => void
    deleteResource: (deleteId: number) => void
}

export default function Counter({ label, count, add, subtract, deleteResource, id }: Props) {

    return (
        <div>
            { label }
            {/* React Bootstrap */}
            <Button onClick={subtract} variant="primary" size="lg">-</Button>
            <span className="fs-1 mx-3">{count}</span>
            {/* Manual Bootstrap */}
            <button onClick={add} className="btn btn-primary btn-lg">+</button>
            
            <Button variant="danger" onClick={() => deleteResource(id)}>Delete</Button>
        </div>
    )
}