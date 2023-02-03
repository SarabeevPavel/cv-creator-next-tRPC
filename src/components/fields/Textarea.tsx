interface TextareaProps {
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  position?: string;
  onGenerate?: () => void;
  onContinue?: (startText: string) => void;
  value: string;
  isLoading?: boolean;
  styles?: string;
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
  styles,
}) => {
  return (
    <div className={`field-container flex flex-col`}>
      <label className="mb-1 font-semibold uppercase">{label}</label>
      <textarea
        onChange={onChange}
        className={`default-input resize-none ${styles ? styles : ""}`}
        placeholder={placeholder}
        maxLength={300}
        value={value}
        style={{ height: "" }}
      />
      {/* <div className="flex gap-3">
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
      </div> */}
    </div>
  );
};
