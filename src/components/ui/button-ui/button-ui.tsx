import { memo } from "react"
import { TButtonUIProps } from "./type"
import styles from "./button-ui.module.css"
import classNames from "classnames"

export const ButtonUI: React.FC<TButtonUIProps> = memo(({ onClick, type, buttonText, disabled, className, ref }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, className)}
    >
      {buttonText}
    </button>
  )
})