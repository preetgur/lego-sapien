import { cn } from "@/app/lib/utils";
import classNames from "classnames";
import Select from "react-select";
import type { Props, StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
interface SelectProps extends Omit<Props, "wrapperClassName"> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  selectClassName?: any;
  isMulti?: boolean;
  isCreateableSelect?: boolean;
  labelClassNames?: string;
  isRequiredField?: boolean;
}

const colourStyles: StylesConfig<any, true> = {
  container: (styles: any) => {
    return {
      ...styles,
      background: "#FFFFFF",
      borderRadius: "4px",
      display: "flex",
    };
  },
  input: (styles: any) => ({
    ...styles,
    color: "#959CB1",
    paddingLeft: "4px",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: "#959CB1",
    paddingLeft: "10px",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    background: "rgb(240 240 240)",
    color: "#090E34", // selected value shown
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "rgb(240 240 240)", // here change container color
    paddingTop: "5px",
    paddingBottom: "5px",
    border: "none",
    borderRadius: "4px",
    width: "100%",
    overflow: "scroll",
    overflowY: "auto",
    maxHeight: "90px",
  }),
  menu: (styles: any) => ({
    ...styles,
    background: "#212227",
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#FFFFFF"
        : isFocused
        ? "#FB607F"
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "#FB607F" : "#FFFFFF",
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "pink"
            : undefined
          : undefined,
      },
    };
  },
  multiValue: (styles: any, { data }) => {
    return {
      ...styles,
      backgroundColor: "#090E34",
      opacity: ".8",
    };
  },
  multiValueLabel: (styles: any, { data }) => ({
    ...styles,
    color: "#FFFFFF",
  }),
  multiValueRemove: (styles: any, { data }) => ({
    ...styles,
    // opacity: ".4",
    color: "#ff2c57", // cross icon
    ":hover": {
      backgroundColor: "red",
      color: "#ff2c57",
      opacity: ".8",
    },
  }),
  dropdownIndicator: (styles: any) => {
    return {
      ...styles,
      color: "#090E34",
    };
  },
};

export default function CustomSelect({
  options,
  wrapperClassName,
  label,
  closeMenuOnSelect = true,
  error,
  isMulti = false,
  isCreateableSelect = false,
  labelClassNames,
  isRequiredField = false,
  ...props
}: SelectProps) {
  const Component = isCreateableSelect ? CreatableSelect : Select;
  return (
    <div className={cn("no-scrollbar flex w-full flex-col", wrapperClassName)}>
      {label && (
        <label
          // htmlFor={name}
          className={classNames(
            "mb-3 block text-sm font-semibold text-secondaryBlack",
            labelClassNames
          )}
        >
          {label}
          {isRequiredField && (
            <span className=" items-center  text-primary">*</span>
          )}
        </label>
      )}
      <Component
        isMulti={isMulti}
        {...props}
        closeMenuOnSelect={closeMenuOnSelect}
        styles={colourStyles}
        classNamePrefix="hm-select"
        options={options}
        // controlShouldRenderValue={!props.isMulti}
      />
      {error && (
        <span className="my-1 text-xs font-medium text-[#b14040]">{error}</span>
      )}
    </div>
  );
}
