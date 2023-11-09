export default function UserCard({ user, allowDelete, deleteUser }) {
    return (
        <div>{user.name}
            {allowDelete ? <button onClick={() => deleteUser(user.id)}>Delete</button> : null}
        </div>
    )
}