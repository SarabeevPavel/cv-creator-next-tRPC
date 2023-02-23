import type { ThemeType } from "../../utils";
import { List } from "./List";

interface StackProps {
  items: string[];
  theme: ThemeType;
}

export const Stack: React.FC<StackProps> = ({ items, theme }) => (
  <div className="min-h-44 group container relative">
    <div className="flex">
      <h3 className="text-md mb-2 text-center font-semibold uppercase">
        Stack
      </h3>
      <List
        items={items}
        theme={theme}
        styles="grid grid-cols-3 place-items-start"
      />
    </div>
  </div>
);
