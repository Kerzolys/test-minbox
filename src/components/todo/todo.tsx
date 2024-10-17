import { FC, useState } from "react";
import { TTodoProps } from "./type";
import { TodoUI } from "../ui/todo-ui/todo-ui";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../features/todoSlice/todoSlice";
import { Modal } from "../modal/modal";
import { ModalTodo } from "../modal-todo/modal-todo";
import { ModalConfirmation } from "../modal-confirmation/modal-confirmation";

export const Todo: FC<TTodoProps> = ({ todo }) => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todoValue, setTodoValue] = useState(todo.todo)
  const [modalType, setModalType] = useState<'edit' | 'remove' | null>(null)

  const handleRemove = () => {
    setIsModalOpen(true)
    setModalType('remove')
  }

  const handleOpenEdit = () => {
    if (!todo.completed) {
      setModalType('edit')
      setIsModalOpen(true)
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setTodoValue(todo.todo)
  }

  const handleEditTodo = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const todo = evt.target.value
    setTodoValue(todo)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(editTodo({ ...todo, todo: todoValue }))

    setIsModalOpen(false)
  }
  const handleChange = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleSubmitRemove = () => {
    dispatch(removeTodo(todo.id))
    setIsModalOpen(false)
  }

  const handleRejectRemove = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <TodoUI isCompleted={todo.completed} todo={todo} onDelete={handleRemove} onEdit={handleOpenEdit} onChange={handleChange} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          {modalType === 'edit' &&
            <ModalTodo value={todoValue} onChange={handleEditTodo} onSubmit={handleSubmit} />
          }
          {modalType === 'remove' && <ModalConfirmation onSubmit={handleSubmitRemove} onReject={handleRejectRemove} title="Are you sure?" />}
        </Modal>
      )}
    </>
  )
}