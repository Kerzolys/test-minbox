import { TodoFormUI } from '../todo-form-ui/todo-form-ui'
import styles from './modal-todo-ui.module.css'
import { TModalTodoUIProps } from './type'

export const ModalTodoUI: React.FC<TModalTodoUIProps> = ({value, onChange, onSubmit}) => {
  return (
    <div className={styles.modal}>
      <TodoFormUI placeholder="What do you wanna change?" value={value} buttonText="Change" onChange={onChange} onSubmit={onSubmit}/>
    </div>
  )
}