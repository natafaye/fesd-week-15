import { useState } from "react"

export default function CreateUserForm({ createUser }) {
    // In-progress form data state
    const [nameValue, setNameValue] = useState("")

    const onSubmitClick = (event) => {
        event.preventDefault() // keeps it from refreshing the page

        const newUserData = {
            name: nameValue // because the nameValue piece of state will always have whatever is in the input (connected)
        }

        createUser(newUserData)

        // Clear the form
        setNameValue("")
    }

    return (
        <form>
            <h3>New User</h3>
            <label>Name</label>
            <input type="text" className="form-control" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
            <button className="btn btn-success" onClick={onSubmitClick}>Add</button>
        </form>
    )
}