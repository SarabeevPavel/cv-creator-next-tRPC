import classNames from "classnames";
import type { ProjectType } from "../../utils";
import { Item } from "./Item";

interface ListProps {
  items: string[] | ProjectType[];
  isEditing?: boolean;
  onDelete: (i: number) => void;
  styles?: string;
  buttonStyles?: string;
}

export const List: React.FC<ListProps> = ({
  items,
  onDelete,
  isEditing,
  styles,
  buttonStyles,
}) => {
  return (
    <div className="group">
      {items.length ? (
        <ul className={classNames(styles, "mt-3")}>
          {items.map((item, i) => (
            <Item
              key={i}
              item={item}
              onDelete={(index: number) => onDelete(index)}
              index={i}
              isEditing={isEditing}
              buttonStyles={buttonStyles}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
