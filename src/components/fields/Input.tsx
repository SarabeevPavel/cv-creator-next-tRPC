import classNames from "classnames";
import type { ReactNode } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string | ReactNode;
  value: string;
  styles?: string;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  label,
  value,
  styles,
  maxLength,
}) => {
  return (
    <div className={classNames(styles, "field-container mb-1")}>
      <label
        className={classNames(
          "w-1/8 text-sm first-letter:uppercase",
          label && "mr-1"
        )}
      >
        {label ? label : ""}
      </label>
      <input
        maxLength={maxLength || 50}
        onChange={onChange}
        type="text"
        className={classNames(styles, "default-input w-7/8 h-9 text-ellipsis")}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
