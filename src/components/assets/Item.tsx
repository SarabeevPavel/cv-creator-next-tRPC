import { useGlobalContext } from "../../hooks";
import type { ProjectType } from "../../utils";
import { DeleteButton } from "./DeleteButton";

interface ItemProps {
  item: string | ProjectType;
  index: number;
  isEditing?: boolean;
  onDelete: (index: number) => void;
  buttonStyles?: string;
}

export const Item: React.FC<ItemProps> = ({
  item,
  onDelete,
  index,
  isEditing,
  buttonStyles,
}) => {
  const { theme } = useGlobalContext();
  return (
    <li className="group: relative m-1 flex items-center text-sm">
      {isEditing && (
        <DeleteButton styles={buttonStyles} index={index} onDelete={onDelete} />
      )}
      {typeof item === "string" && <span>{item}</span>}
      {typeof item === "object" && (
        <div
          key={index}
          className="w-full rounded-xl px-4 py-2 text-white"
          style={{
            backgroundColor: theme.additionalColor,
            color: theme.mainColor,
          }}
        >
          <h5 className="text-md">{item.title}</h5>
          <p className="text-sm">{item.description}</p>
          <a className="text-xs underline" href={item.repositoryUrl}>
            {item.repositoryUrl}
          </a>
        </div>
      )}
    </li>
  );
};
