
import { TModalUIProps } from "./type";
import styles from "./modal-ui.module.css"
import classNames from "classnames";


export const ModalUI: React.FC<TModalUIProps> = ({ isOpen, onClose, children, modalRef, closeButtonRef }) => (
  <div ref={modalRef} onClick={onClose} className={classNames(styles.modal, { [styles.opened]: isOpen, [styles.closed]: !isOpen })}>
    <div className={styles.content}>
      <button ref={closeButtonRef} className={styles.close_button} onClick={onClose} type="button" />
      {children}
    </div>
  </div>
)
