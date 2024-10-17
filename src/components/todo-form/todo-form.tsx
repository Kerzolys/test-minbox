import { useDispatch, useSelector } from "react-redux"
import { TodoFormUI } from "../ui/todo-form-ui/todo-form-ui"
import { addTodo, todoSelector } from "../../features/todoSlice/todoSlice"
import { useState } from "react"

export const TodoForm = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const {todos} = useSelector(todoSelector)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setValue(value)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(addTodo({
      todo: value,
      completed: false,
      id: todos.length + 1,
    }))
    setValue('')
  }

  return (
    <TodoFormUI value={value} onChange={handleChange} onSubmit={handleSubmit} placeholder='What needs to be done?' buttonText="Add" />
  )
}