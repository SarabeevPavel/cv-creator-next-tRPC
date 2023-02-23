import type { ProjectType, ThemeType } from "../../utils";

interface ItemProps {
  item: string | ProjectType;
  index: number;
  theme: ThemeType;
}

export const Item: React.FC<ItemProps> = ({ item, theme, index }) => (
  <li className="group: relative m-1 flex items-center text-sm">
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
