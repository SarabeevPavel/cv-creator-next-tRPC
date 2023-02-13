import ReactTextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onContinue?: (startText: string) => void;
  value: string;
  isLoading: boolean;
  styles?: string;
  maxLength?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
  value,
  isLoading,
  styles,
  maxLength,
}) => {
  return (
    <div className="field-container group flex flex-col">
      <div className="mb-2 flex w-full items-center">
        <label className="mb-1 ml-2 font-semibold uppercase">{label}</label>
      </div>

      <ReactTextareaAutosize
        onChange={onChange}
        className={classNames(
          styles,
          "default-input hide-scrollbar resize-none"
        )}
        placeholder={placeholder}
        maxLength={maxLength || 300}
        value={value}
        disabled={isLoading}
        minRows={2}
        aria-multiline={true}
      />
    </div>
  );
};
