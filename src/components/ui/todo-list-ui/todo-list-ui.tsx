import { FC, memo, useState } from "react";
import { TTodoListUIProps } from "./type";
import { Todo } from "../../todo/todo";
import styles from './todo-list-ui.module.css'

export const TodoListUI: FC<TTodoListUIProps> = memo(({ todos }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const todosPerPage = 5
  const indexOfLastTodo = currentPage * todosPerPage
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

  const totalPages = Math.ceil(todos.length / todosPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <ul className={styles.list}>
        {currentTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>

      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  )
})