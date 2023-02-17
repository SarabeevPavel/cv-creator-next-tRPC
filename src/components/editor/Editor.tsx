import { motion } from "framer-motion";
import { VscTriangleUp } from "react-icons/vsc";
import type { ThemeType } from "../../utils";
import { useGlobalContext } from "../../hooks";
import { ThemesList } from "./ThemesList";
import { useState } from "react";
import { EditorBar } from "./EditorBar";
import { LayoutsList } from "./LayoutsList";

interface EditorProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeType;
  onChange: (updatedTheme: ThemeType) => void;
}

export const Editor: React.FC<EditorProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme, layout, setLayout } = useGlobalContext();

  const [tab, setTab] = useState("themes");

  return (
    <motion.div
      initial={{ scale: 0.1, y: 0, x: -130 }}
      animate={{ scale: 1, y: -63, x: 5 }}
      exit={{ scale: 0.1, y: 100, x: -130 }}
      transition={{ type: "linear", duration: 0.2 }}
      className="absolute bottom-7 left-3 z-20 h-[470px] w-72 -translate-y-full transform rounded-xl bg-gray-800 pb-4 text-white/80"
    >
      <EditorBar currentTab={tab} onChange={(tab: string) => setTab(tab)} />
      <motion.div className="pt-4">
        <ThemesList
          tab={tab}
          currentTheme={theme}
          onChange={(updatedTheme: ThemeType) => setTheme(updatedTheme)}
        />
        <LayoutsList
          tab={tab}
          currentLayout={layout}
          onChange={(updatedLayout: string) => setLayout(updatedLayout)}
        />
        <VscTriangleUp
          className="absolute left-2 bottom-0 translate-y-5 rotate-180 transform text-gray-800"
          size={30}
        />
      </motion.div>
    </motion.div>
  );
};
