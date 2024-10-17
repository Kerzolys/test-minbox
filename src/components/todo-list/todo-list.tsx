import { useSelector } from "react-redux"
import { todoSelector } from "../../features/todoSlice/todoSlice"
import { TodoListUI } from "../ui/todo-list-ui/todo-list-ui"

export const TodoList = () => {
  const {filteredTodos} = useSelector(todoSelector)

  return (
    <TodoListUI todos={filteredTodos} />
  )
}