
import { ModalTodoUI } from "../ui/modal-todo-ui/modal-todo-ui"
import { TModalTodoProps } from "./type"

export const ModalTodo: React.FC<TModalTodoProps> = ({value, onChange, onSubmit}) => {
  return <ModalTodoUI value={value} onChange={onChange} onSubmit={onSubmit}/>
}