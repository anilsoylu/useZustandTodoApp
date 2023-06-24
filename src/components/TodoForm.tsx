import { useState } from "react"
import { useTodoStore } from "../store/TodoStore"

const TodoForm = () => {
  const [text, setText] = useState("")
  const { addTodo } = useTodoStore()

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const newTodo = { id: Date.now(), text, completed: false } // id eklenmiş
      addTodo(newTodo)
      setText("")
    }
  }

  return (
    <div className="flex justify-between hr align-center my-20">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default TodoForm
