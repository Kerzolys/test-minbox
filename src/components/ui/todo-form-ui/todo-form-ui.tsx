import { ButtonUI } from "../button-ui/button-ui"
import { InputUI } from "../input-ui/input-ui"
import { TTodoFormUIProps } from "./type"
import styles from './todo-form-ui.module.css'

export const TodoFormUI: React.FC<TTodoFormUIProps> = ({ onSubmit, onChange, placeholder, value,buttonText }) => (
  <form onSubmit={onSubmit} className={styles.form}>
    <InputUI value={value} onChange={onChange} placeholder={placeholder} className={styles.input} />
    <ButtonUI buttonText={buttonText} type="submit" disabled={!value} className={styles.button} />
  </form>
)