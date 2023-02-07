import { ButtonGenerate, ErrorMessage, Loader } from "../assets";
import classNames from "classnames";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  position?: string;
  onGenerate?: () => void;
  onContinue?: (startText: string) => void;
  value: string;
  isLoading: boolean;
  isError: boolean;
  styles?: string;
  maxLength?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
  position,
  onGenerate,
  value,
  isLoading,
  isError,
  styles,
  maxLength,
}) => {
  return (
    <div className="field-container group flex flex-col">
      <div className="mb-2 flex w-full items-center">
        <label className="mb-1 mr-2 font-semibold uppercase">{label}</label>
        {onGenerate && (
          <>
            <ButtonGenerate
              isLoading={isLoading}
              styles="opacity-0 inline-block group-hover:opacity-100"
              disabledConfig={
                position ? !position?.trim().length : isLoading || isLoading
              }
              onClick={onGenerate}
            />

            <ErrorMessage isError={isError} />
            <Loader isLoading={isLoading} color="blue" />
          </>
        )}
      </div>

      <textarea
        onChange={onChange}
        className={classNames(
          styles,
          "default-input hide-scrollbar resize-none"
        )}
        placeholder={placeholder}
        maxLength={maxLength || 300}
        value={value}
        disabled={isLoading}
      />
    </div>
  );
};
