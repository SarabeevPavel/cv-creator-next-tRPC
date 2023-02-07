interface ErrorMessageProps {
  isError: boolean;
  text?: string;
  styles?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  isError,
  text,
  styles,
}) => {
  if (!isError) return null;
  return (
    <p className={`ml-2 text-base text-red-500 ${styles ? styles : ""}`}>
      {text ? text : "Error... Try again!"}
    </p>
  );
};
