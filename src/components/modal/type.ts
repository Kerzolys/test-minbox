import { ReactNode } from "react";

export type TModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}