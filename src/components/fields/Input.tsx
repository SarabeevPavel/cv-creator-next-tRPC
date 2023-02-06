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
    <div className={`field-container mb-1 ${styles ? styles : ""}`}>
      <label
        className={`w-1/8 text-sm ${
          label ? "mr-1" : ""
        } first-letter:uppercase`}
      >
        {label ? label : ""}
      </label>
      <input
        maxLength={maxLength || 50}
        onChange={onChange}
        type="text"
        className={`default-input w-7/8 h-9 ${
          styles ? styles : ""
        }text-ellipsis`}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
