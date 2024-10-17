import { memo } from "react";
import { TCompletedTodosUIProps } from "./type";

export const CompletedTodosUI:React.FC<TCompletedTodosUIProps> = memo(({ amount }) => (
  <p>{amount} items left</p>
))