import { TextField } from "@mui/material";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
  type Control,
} from "react-hook-form";

type ControlFieldProp<T extends FieldValues> = {
  name: FieldPath<T>;
  type?: "text" | "email" | "password" | "number" ;
  multiline?: boolean;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions<T, FieldPath<T>>;
  control: Control<T>;
  rows?: number;
};

export default function ControlField<T extends FieldValues>({
  name,
  type ='text',
  label,
  placeholder,
  control,
  rules,
  multiline = false,
  rows,
}: ControlFieldProp<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState : {error} }) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          type={type}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          fullWidth
          error={!!error}
          helperText = {error?.message}
          value={field.value ?? ""}
        />
      )}
    />
  );
}
