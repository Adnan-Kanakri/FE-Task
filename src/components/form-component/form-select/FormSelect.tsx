import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import MainUtils from "@/utils/main";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

interface FormSelectProps {
  name: string;
  onSelect?: (value: any) => void;
  options: { value: string; label: string }[];
  isMulti?: boolean;
  label: string;
  required?: boolean;

}

const FormSelect: FC<FormSelectProps> = ({ name, options, onSelect, isMulti = false, label, required = false, ...reset }) => {
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
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-label">{label}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={value || ""}
                onBlur={onBlur}
                onChange={onChange}
                error={!!_error}
                className={"fullContent"}
                label={label}
              >
                {options.map((name) => (
                  <MenuItem
                    key={name.value}
                    value={name.value}
                  >
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormHelperText error={!!_error}>{_error}</FormHelperText>
          </div>

        );
      }}
    />
  );
};

export default FormSelect;
