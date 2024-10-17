import { ModalConfirmationUI } from "../ui/modal-confirmation-ui/modal-confirmation-ui"
import { TModalConfirmationProps } from "./type"

export const ModalConfirmation: React.FC<TModalConfirmationProps> = ({ onSubmit, onReject, title }) => {
  return <ModalConfirmationUI onSubmit={onSubmit} onReject={onReject} title={title} />
}