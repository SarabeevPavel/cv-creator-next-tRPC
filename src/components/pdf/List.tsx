import classNames from "classnames";
import type { ProjectType, ThemeType } from "../../utils";
import { Item } from "./Item";

interface ListProps {
  items: string[] | ProjectType[];
  styles?: string;
  theme: ThemeType;
}

export const List: React.FC<ListProps> = ({ items, styles, theme }) => (
  <div className="group">
    {items.length ? (
      <ul className={classNames(styles, "mt-3")}>
        {items.map((item, i) => (
          <Item key={i} item={item} index={i} theme={theme} />
        ))}
      </ul>
    ) : null}
  </div>
);
