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
  if (!isEditing) {
    return null;
  }
  return (
    <button
      className={`ml-1 grid h-7 place-items-center  rounded-lg bg-green-700 px-2 transition-opacity hover:bg-green-800 hover:shadow-md ${
        styles ? styles : ""
      }
        ${isEditing ? "opacity-100" : "opacity-0"}`}
      onClick={onChange}
    >
      Done
    </button>
  );
};
