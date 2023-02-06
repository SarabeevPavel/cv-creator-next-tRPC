import { AiOutlinePlus } from "react-icons/ai";

interface AddButtonProps {
  disabled: boolean;
  onChange: () => void;
  styles?: string;
  view?: boolean;
}

export const AddButton: React.FC<AddButtonProps> = ({
  disabled,
  onChange,
  styles,
  view,
}) => {
  if (!view) {
    return null;
  }

  return (
    <button
      disabled={disabled}
      onClick={onChange}
      className={`ml-2 grid h-8 w-1/5 place-items-center rounded-full bg-blue-500 duration-200 ease-in-out hover:bg-blue-700 disabled:bg-gray-400 disabled:hover:bg-gray-400 ${
        styles ? styles : ""
      }`}
    >
      <AiOutlinePlus size={20} />
    </button>
  );
};
