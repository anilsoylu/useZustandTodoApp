import { useEffect } from "react"
import { useTodoStore } from "../store/TodoStore"

const TodoList = () => {
  const { todos, fetchTodos, deleteTodo } = useTodoStore()

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
