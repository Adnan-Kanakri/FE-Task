"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface FormProps {
  defaultValues: any;
  children:
  | ReactNode
  | ((methods: UseFormReturn<any, any, undefined>) => ReactNode);
  onSubmit?: (data: any) => void;
  schema?: yup.ObjectSchema<any>;
  getValues?: (data: any) => void;
  formClassName?: string;
  onReset?: () => void;
  resetOnChange?: string;
  setFormDirtyState?: (data: any) => void;
  onError?: (data: any) => void;
}

const Form: FC<FormProps> = ({
  defaultValues,
  children,
  onSubmit,
  schema = yup.object({}),
  getValues,
  formClassName,
  setFormDirtyState = () => { },
  onError,
}) => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: schema ? yupResolver(schema) : undefined,
    values: defaultValues,
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    setFormDirtyState(methods.formState.isDirty);
  }, [methods.formState.isDirty, setFormDirtyState]);

  const handleRenderChildren = () => {
    if (typeof children === "function") {
      return children(methods);
    }
    return children;
  };

  return (
    <FormProvider {...methods}>
      <form
        className={formClassName}
        onSubmit={handleSubmit((data) => onSubmit?.(data))}
        onChange={() => (getValues ? getValues(methods.getValues()) : {})}
      >
        {handleRenderChildren()}
      </form>
    </FormProvider>
  );
};

export default Form;
