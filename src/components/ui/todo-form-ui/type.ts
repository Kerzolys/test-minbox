export type TTodoFormUIProps = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  value: string;
  buttonText?: string;
};
