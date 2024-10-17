import { ModalUI } from "../ui/modal-ui/modal-ui"
import ReactDOM from "react-dom"
import { TModalProps } from "./type"
import { useRef } from "react"

export const Modal: React.FC<TModalProps> = ({ isOpen, children, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleClose = (evt: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if ((modalRef.current && evt.target === modalRef.current) || (closeButtonRef.current && evt.target === closeButtonRef.current)) {
      onClose()
    }
  }

  const modalRoot = document.getElementById('modal-root')
  return ReactDOM.createPortal(
    <ModalUI modalRef={modalRef} closeButtonRef={closeButtonRef} children={children} isOpen={isOpen} onClose={handleClose} />, modalRoot!
  )
}