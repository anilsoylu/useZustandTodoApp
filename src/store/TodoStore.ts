import create from "zustand"

type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  fetchTodos: () => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: number) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: () => {
    const todos: Todo[] = [
      { id: 1, text: "Almanya biletini al", completed: false },
      { id: 2, text: "Daha sıkı çalış", completed: true },
      { id: 3, text: "Asosyalliğe devam", completed: true },
    ]

    set({ todos })
  },
  addTodo: (todo: Todo) => {
    set((state) => ({ todos: [...state.todos, todo] }))
  },
  deleteTodo: (id: number) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }))
  },
}))
