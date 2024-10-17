export type TButtonUIProps = {
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  buttonText?: string;
  disabled?: boolean;
  className?: string;
  ref?: React.RefObject<HTMLButtonElement>
};
