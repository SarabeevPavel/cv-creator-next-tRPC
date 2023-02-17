import classNames from "classnames";
import { initialLayouts } from "../../utils";
import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";

interface LayoutsListProps {
  tab: string;
  currentLayout: string;
  onChange: (updatedLayout: string) => void;
}

export const LayoutsList: React.FC<LayoutsListProps> = ({
  tab,
  currentLayout,
  onChange,
}) => {
  const layouts = initialLayouts;

  if (tab !== "layouts") return null;

  return (
    <ul className="grid grid-cols-2 gap-5">
      {layouts.map((layout, index) => (
        <li key={index} className="grid place-items-center">
          <button
            className="grid place-items-center text-center"
            onClick={() => onChange(layout)}
          >
            <div
              className={classNames(
                currentLayout === layout ? "rgb-background" : "bg-transparent",
                "grid h-24 w-24 place-items-center rounded-lg "
              )}
            >
              <div className="grid h-20 w-20 place-items-center rounded-lg bg-gray-700">
                {layout === "sidebar-left" && <BsLayoutSidebar size={60} />}
                {layout === "sidebar-right" && (
                  <BsLayoutSidebarReverse size={60} />
                )}
              </div>
            </div>
            <p className="text-center capitalize">
              {layout.split("-").join(" ")}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};
