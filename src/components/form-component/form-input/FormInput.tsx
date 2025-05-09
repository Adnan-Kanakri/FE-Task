import MainUtils from "@/utils/main";
import { FormHelperText, TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;

}

const FormInput: FC<FormInputProps> = ({ name, label, required = false, multiline = false, rows = 1, ...reset }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();


  const _error: string = MainUtils.getValueByPath(errors, name)
    ?.message as string;

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <div className="fullContent">
            <TextField
              error={!!_error}
              onBlur={onBlur}
              className="fullContent"
              onChange={onChange}
              value={value ?? ""}
              id="outlined-required"
              multiline={multiline}
              rows={rows}
              label={label}
            />
            <FormHelperText error={!!_error}>{_error}</FormHelperText>
          </div>
        );
      }}
    />
  );
};

export default FormInput;
