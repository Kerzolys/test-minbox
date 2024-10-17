import { TTodo } from '../../../utils/types'
export type TTodoUIProps = {
  todo: TTodo;
  isCompleted: boolean
  onDelete: () => void;
  onEdit: () => void;
  onChange: () => void
};
