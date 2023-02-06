import { isError } from "@tanstack/react-query";
import { ButtonGenerate } from "../assets";
import { RingLoader } from "react-spinners";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  position?: string;
  onGenerate?: () => void;
  onContinue?: (startText: string) => void;
  value: string;
  isLoading?: boolean;
  isError?: boolean;
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
        <ButtonGenerate
          styles={`opacity-0 inline-block group-hover:opacity-100 ${
            isLoading ? "opacity-100" : ""
          }`}
          disabledConfig={
            position ? !position?.trim().length : isLoading || isLoading
          }
          onClick={onGenerate}
        />
        {isError && (
          <p className="ml-2 text-base text-red-500">Error... Try again!</p>
        )}
        {isLoading && (
          <RingLoader
            color="blue"
            loading={isLoading}
            size={28}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="ml-2"
          />
        )}
      </div>

      <textarea
        onChange={onChange}
        className={`default-input hide-scrollbar resize-none ${
          styles ? styles : ""
        }`}
        placeholder={placeholder}
        maxLength={maxLength || 300}
        value={value}
        style={{ height: "" }}
        disabled={isLoading}
      />
    </div>
  );
};
