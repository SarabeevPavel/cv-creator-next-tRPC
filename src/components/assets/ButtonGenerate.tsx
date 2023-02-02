interface ButtonGenerateProps {
  position?: string;
  title?: string;
  onClick?: () => void;
  isLoading?: boolean;
  styles?: string;
  disabledConfig?: boolean;
}

export const ButtonGenerate: React.FC<ButtonGenerateProps> = ({
  title,
  onClick,
  styles,
  disabledConfig,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabledConfig}
      className={`mt-2 w-full rounded-lg bg-purple-700 p-1 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:bg-gray-500 disabled:opacity-70 ${
        styles ? styles : ""
      }`}
    >
      Generate {title}
    </button>
  );
};
