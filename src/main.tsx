import React from "react"
import ReactDOM from "react-dom/client"
import TodoList from "./components/TodoList"
import "./index.css"
import TodoForm from "./components/TodoForm"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <TodoList />
      <TodoForm />
    </div>
  </React.StrictMode>
)
