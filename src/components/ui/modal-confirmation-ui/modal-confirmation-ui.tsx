import { ButtonUI } from "../button-ui/button-ui"
import { TModalConfirmationUIProps } from "./type"
import styles from './modal-confirmation-ui.module.css'

export const ModalConfirmationUI: React.FC<TModalConfirmationUIProps> = ({ onSubmit, onReject, title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.buttons_container}>
      <ButtonUI className={styles.confirm_button} buttonText="Yes" type="submit" onClick={onSubmit} />
      <ButtonUI className={styles.reject_button} buttonText="No" type="button" onClick={onReject} />
      </div>
    </div>
  )
}