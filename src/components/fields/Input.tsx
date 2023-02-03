import type { ReactNode } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string | ReactNode;
  value: string;
  styles?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  label,
  value,
  styles,
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
        onChange={onChange}
        type="text"
        className={`default-input w-7/8 h-9 ${styles ? styles : ""}`}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
