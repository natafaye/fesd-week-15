import UserCard from "./UserCard"

export default function UserList({ listOfUsers, allowDelete, deleteUser }) {
    return (
        <div>
            {listOfUsers.map(user => (
                <UserCard key={user.id} user={user} allowDelete={allowDelete} deleteUser={deleteUser}/>
            ))}
        </div>
    )
}

function getFood() {
    return ["spaghetti", "ice cream"]
}

const [dinner, dessert] = getFood()

// TODO:
// example with a form
// passing from a lower component to a higher component
// pass down state updating functions

// working with array of objects (or object) in state