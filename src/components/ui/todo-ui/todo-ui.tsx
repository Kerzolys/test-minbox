import { ButtonUI } from "../button-ui/button-ui"
import { TTodoUIProps } from "./type"
import styles from './todo-ui.module.css'
import classNames from "classnames"

export const TodoUI: React.FC<TTodoUIProps> = ({ todo, isCompleted, onDelete, onEdit, onChange }) => (
  <div className={styles.container}>
    <label>
      <input className={styles.input} type="checkbox" checked={isCompleted} onChange={onChange} />
      <span className={styles.checkbox}></span>
    </label>
    <p className={classNames(styles.todo,{ [styles.completed]: isCompleted })} onClick={onEdit}>{todo.todo}</p>
    <ButtonUI onClick={onDelete} className={styles.button} type="button" />
  </div>
)
