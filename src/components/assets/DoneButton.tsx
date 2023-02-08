import classNames from "classnames";
import { useGlobalContext } from "../../hooks";

interface DoneButtonProps {
  isEditing: boolean;
  onChange: () => void;
  styles?: string;
}

export const DoneButton: React.FC<DoneButtonProps> = ({
  isEditing,
  onChange,
  styles,
}) => {
  const { theme } = useGlobalContext();

  if (!isEditing) {
    return null;
  }
  return (
    <button
      className={classNames(
        styles,
        isEditing ? "opacity-100" : "opacity-0",
        `text-[${theme.mainColor}] group-hover:text-[${theme.mainColor}]`,
        "ml-1 grid h-7 place-items-center  rounded-lg bg-green-700 px-2 transition-opacity hover:bg-green-800 hover:shadow-md "
      )}
      onClick={onChange}
    >
      Done
    </button>
  );
};
