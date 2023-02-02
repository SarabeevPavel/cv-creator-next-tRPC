import type { ReactNode } from "react";

interface InputProps {
  onChange: (e: any) => void;
  placeholder: string;
  label?: string | ReactNode;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  label,
  value,
}) => {
  return (
    <div className="field-container mb-1 ">
      <label className="w-1/8 text-sm first-letter:uppercase">
        {label ? label : ""}
      </label>
      <input
        onChange={onChange}
        type="text"
        className="default-input w-7/8 ml-1"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
