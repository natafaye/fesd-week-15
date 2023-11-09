import { useEffect, useState } from "react";
import UserList from "./UserList";
import CreateUserForm from "./CreateUserForm";

export default function App() {
  const [userList, setUserList] = useState([])

  const deleteUser = async (idToDelete) => {
    // Update data on Back-End
    await fetch("http://localhost:3005/users/" + idToDelete, {
      method: "DELETE"
    })
    // Update data on Front-End
    // Update state to have one less user in it, by working off copies
    setUserList(userList.filter(user => user.id !== idToDelete))
  }

  const createUser = async (newUserData) => {
    // Update on Back-End
    const response = await fetch("http://localhost:3005/users", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData)
    })
    const createdUserWithId = await response.json()
    // Update on Front-End
    setUserList(userList.concat(createdUserWithId))
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3005/users")
      const fetchedUsers = await response.json()
      setUserList(fetchedUsers)
    }
    fetchUsers()
  }, []) // empty dependency array = run once and never again (but in Strict Mode in development it will run twice - not a problem)

  return (
    <div>
      App
      <CreateUserForm createUser={createUser}/>
      <UserList listOfUsers={userList} allowDelete={true} deleteUser={deleteUser} />
    </div>
  )
}