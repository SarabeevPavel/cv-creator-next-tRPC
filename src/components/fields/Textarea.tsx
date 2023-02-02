import { ButtonGenerate } from "../assets";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  onChange: (e: any) => void;
  position?: string;
  onGenerate?: () => void;
  onContinue?: (startText: string) => void;
  value: string;
  isLoading?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
  position,
  onGenerate,
  onContinue,
  value,
  isLoading,
}) => {
  return (
    <div className="field-container">
      <label className="mb-1 first-letter:uppercase">{label}</label>
      <textarea
        onChange={onChange}
        className="input-sm hide-scrollbar h-40 resize-none"
        placeholder={placeholder}
        maxLength={300}
        value={value}
      />
      <div className="flex gap-3">
        {onGenerate !== undefined ? (
          <ButtonGenerate
            disabledConfig={
              position
                ? !position?.trim().length || isLoading
                : true || isLoading
            }
            title="summary"
            onClick={onGenerate}
            isLoading={isLoading}
          />
        ) : null}
        {onContinue !== undefined ? (
          <ButtonGenerate
            disabledConfig={
              value.trim().length < 10 || value.length > 50 || isLoading
            }
            title="a description continuation"
            onClick={() => onContinue(value)}
            isLoading={isLoading}
            styles=""
          />
        ) : null}
      </div>
    </div>
  );
};
