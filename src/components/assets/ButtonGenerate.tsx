import classNames from "classnames";
import { RxMagicWand } from "react-icons/rx";

interface ButtonGenerateProps {
  position?: string;
  onClick?: () => void;
  isLoading?: boolean;
  styles?: string;
  disabledConfig?: boolean;
}

export const ButtonGenerate: React.FC<ButtonGenerateProps> = ({
  onClick,
  styles,
  isLoading,
  disabledConfig,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabledConfig}
      className={classNames(
        "hover:rgb-background grid h-7 w-7 place-items-center rounded-lg  bg-purple-700 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-70",
        styles,
        isLoading && "opacity-100"
      )}
    >
      <RxMagicWand />
    </button>
  );
};
