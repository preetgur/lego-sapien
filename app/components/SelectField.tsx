import React from "react";
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  ControllerProps,
  FieldPath,
  Controller,
  Control,
} from "react-hook-form";
import CustomSelect from "./CustomSelect";

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return <Controller {...props} />;
};

type SelectFieldProps<TFormValues extends FieldValues> = {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  isMulti?: boolean;
  isCreateableSelect?: boolean;
  control: Control<TFormValues>;
  options?: Array<{ label: string; value: string | number }>;
  closeMenuOnSelect?: boolean;
  wrapperClassName?: string;
  isRequiredField?: boolean;
  error?: string;
};

const SelectField: React.FC<SelectFieldProps<FieldValues>> = ({
  label,
  name,
  placeholder,
  className,
  control,
  ...props
}) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <CustomSelect
            {...field}
            label={label}
            placeholder={placeholder}
            className="[&_.hm-select\_\_control]:focus-visible:shadow-none [&_.hm-select\_\_control]:rounded-md  [&_.hm-select\_\_control]:py-2 [&_.hm-select\_\_control]:shadow-signUp [&_.hm-select\_\_placeholder]:text-secondaryBlack [&_.hm-select\_\_placeholder]:opacity-100  "
            {...props}
          />
        )}
      />
    </>
  );
};

export default SelectField;
