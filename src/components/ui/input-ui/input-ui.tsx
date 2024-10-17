import { FC, memo } from "react"
import { TInputUIProps } from "./type"

export const InputUI: FC<TInputUIProps> = memo(({ onChange, placeholder, value, className }) => (
  <input type="text" onChange={onChange} placeholder={placeholder} value={value} className={className} />
))