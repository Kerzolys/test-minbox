import { useDispatch, useSelector } from "react-redux"
import { ButtonUI } from "../ui/button-ui/button-ui"
import { CompletedTodosUI } from "../ui/completed-todos-ui/completed-todos-ui"
import { resetCompletedTodos, todoSelector } from "../../features/todoSlice/todoSlice"
import { useState } from "react"
import { Modal } from "../modal/modal"
import { ModalConfirmation } from "../modal-confirmation/modal-confirmation"
import styles from './todo-management-ui.module.css'


export const TodosManagement = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector(todoSelector)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const activeTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  const handleResetCompleted = () => {
    setIsModalOpen(true)

  }
  const handleReject = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = () => {
    dispatch(resetCompletedTodos())
    setIsModalOpen(false)
  }
  return (
    <div className={styles.container}>
      <CompletedTodosUI amount={activeTodos.length} />
      <ButtonUI buttonText="Clear completed" type="button" onClick={handleResetCompleted} disabled={completedTodos.length === 0} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalConfirmation title='Are you sure?' onReject={handleReject} onSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  )
}