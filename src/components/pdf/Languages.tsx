import type { ThemeType } from "../../utils";
import { List } from "./List";

interface LanguagesProps {
  items: string[];
  theme: ThemeType;
}

export const Languages: React.FC<LanguagesProps> = ({ items, theme }) => (
  <div className="flex ">
    <h3 className="text-md mb-2 text-left font-semibold uppercase">
      Languages
    </h3>
    <List items={items} theme={theme} />
  </div>
);
