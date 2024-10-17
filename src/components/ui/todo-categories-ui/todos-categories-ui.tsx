import { ButtonUI } from "../button-ui/button-ui";
import { useDispatch } from "react-redux";
import { filterTodos } from "../../../features/todoSlice/todoSlice";

export const TodoCategoriesUI = () => {
  const dispatch = useDispatch()

  const handleClick = (isCompleted: boolean | null) => {
    dispatch(filterTodos(isCompleted))
  }

  return (
    <>
      <ButtonUI buttonText="All" type="button" onClick={() => handleClick(null)} />
      <ButtonUI buttonText="Active" type="button" onClick={() => handleClick(false)} />
      <ButtonUI buttonText="Completed" type="button" onClick={() => handleClick(true)} />
    </>
  )
}