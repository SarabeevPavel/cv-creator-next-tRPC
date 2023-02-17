import classNames from "classnames";

interface EditorTabProps {
  currentTab: string;
  onChange: (tab: string) => void;
}

export const EditorBar: React.FC<EditorTabProps> = ({
  currentTab,
  onChange,
}) => {
  return (
    <div className="mb-auto grid h-10 w-full grid-cols-2 rounded-t-xl bg-gray-700">
      <button
        onClick={() => onChange("themes")}
        className={classNames(
          currentTab === "themes" && "bg-gray-800",
          "grid place-items-center rounded-t-xl"
        )}
      >
        Theme
      </button>
      <button
        onClick={() => onChange("layouts")}
        className={classNames(
          currentTab === "layouts" && "bg-gray-800",
          "grid place-items-center rounded-t-xl"
        )}
      >
        Layout
      </button>
    </div>
  );
};
