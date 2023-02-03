import type { ProjectType } from "../../utils";
import { Item } from "./Item";

interface ListProps {
  items: string[] | ProjectType[];
  isEditing?: boolean;
  onDelete: (i: number) => void;
  styles?: string;
}

export const List: React.FC<ListProps> = ({
  items,
  onDelete,
  isEditing,
  styles,
}) => {
  return (
    <div className="group">
      {items.length ? (
        <ul className={`mt-3 ${styles ? styles : ""}`}>
          {items.map((item, i) => (
            <Item
              key={i}
              item={item}
              onDelete={(index: number) => onDelete(index)}
              index={i}
              isEditing={isEditing}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
