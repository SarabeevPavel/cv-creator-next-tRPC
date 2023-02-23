import type { ProjectType, ThemeType } from "../../utils";
import { List } from "./List";

interface ProjectsProps {
  items: string[] | ProjectType[];
  theme: ThemeType;
}

export const Projects: React.FC<ProjectsProps> = ({ items, theme }) => (
  <List items={items} theme={theme} />
);
