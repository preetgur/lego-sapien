import { cn } from "@/app/lib/utils";
import React from "react";
import { UseFormRegister, FieldValues, FieldError } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
  isRequiredField?: boolean;
  className?: string;
  rows?: number;
  disabled?: boolean;
  textAreaStyle?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`focus-visible:shadow-none w-full rounded-md border border-transparent bg-background py-3 px-6 text-base text-body-color  placeholder-body-color shadow-signUp outline-none focus:border-primary ${
          error && "focus:border-[#b14040]"
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

interface TextAreaFieldProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  error: string;
  textAreaClassName?: string;
}
const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ className, textAreaClassName, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `focus-visible:shadow-none w-full rounded-md border border-transparent bg-background py-3 px-6 text-base text-body-color  placeholder-body-color shadow-signUp outline-none focus:border-primary ${
            error && "focus:border-[#b14040]"
          }`,
          textAreaClassName
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextAreaField.displayName = "TextAreaField";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  error,
  className,
  isRequiredField = false,
  ...props
}) => {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="mb-3 block text-sm font-semibold text-secondaryBlack dark:text-secondaryBlack"
        >
          {label}
          {isRequiredField && (
            <span className="items-center text-primary">*</span>
          )}
        </label>
      )}
      {props.type === "textarea" ? (
        <>
          <TextAreaField {...register(name)} error={error || ""} {...props} />
        </>
      ) : (
        <Input {...register(name)} error={error || ""} {...props} />
      )}
      <span className="mt-1 ml-1 text-xs font-medium text-[#b14040]">
        {error && error}
      </span>
    </div>
  );
};

InputField.displayName = "InputField";

export default InputField;
