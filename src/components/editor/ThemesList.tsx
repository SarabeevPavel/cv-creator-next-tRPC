import classNames from "classnames";
import type { ThemeType } from "../../utils";
import { initialThemes } from "../../utils";

interface ThemeListProps {
  tab: string;
  currentTheme: ThemeType;
  onChange: (updatedTheme: ThemeType) => void;
}

export const ThemesList: React.FC<ThemeListProps> = ({
  tab,
  currentTheme,
  onChange,
}) => {
  const themes = initialThemes;

  if (tab !== "themes") return null;

  return (
    <ul className="grid grid-cols-2 gap-5">
      {Object.entries(themes).map(([name, value], index) => (
        <li key={index} className="grid place-items-center">
          <button className="text-center" onClick={() => onChange(value)}>
            <div
              className={classNames(
                currentTheme === value ? "rgb-background" : "bg-transparent",
                "grid h-24 w-24 place-items-center rounded-lg bg-gray-700"
              )}
            >
              <div
                className={classNames(
                  value === currentTheme && "ring-2",
                  "relative h-20 w-20 overflow-hidden "
                )}
                style={{ backgroundColor: value.mainColor }}
              >
                <div
                  className="absolute top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 transform"
                  style={{ backgroundColor: value.additionalColor }}
                ></div>
              </div>
            </div>
            <p className="text-center first-letter:uppercase">
              {name.split("_").join(" ")}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};
