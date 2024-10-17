export type TModalTodoUIProps = {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}
