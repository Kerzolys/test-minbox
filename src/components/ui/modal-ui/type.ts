import { ReactNode } from "react";

export type TModalUIProps = {
  isOpen: boolean;
  onClose: (evt: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  children: ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
  closeButtonRef: React.RefObject<HTMLButtonElement>;
};
