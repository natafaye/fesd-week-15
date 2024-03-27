import { useEffect, useState } from "react"

export default function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    // Wrapped the slow asynchronous code in a little baggy (another function) so React doesn't have to touch it
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3005/todos")
      const freshTodos = await response.json()
      setTodoList(freshTodos)
    }
    fetchTodos() // immediately call the function
  }, []) // empty dependency array so that it only runs once when the component first loads in
  // technically in development, our component will load in twice, it's just a thing, so you'll see it twice

  const deleteTodo = async (idToDelete) => {
    // Makes the change on the backend
    const response = await fetch("http://localhost:3005/todos/" + idToDelete, {
      method: "DELETE"
    })
    // Make the change on the frontend
    setTodoList(todoList.filter(todo => todo.id !== idToDelete))
  }

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}