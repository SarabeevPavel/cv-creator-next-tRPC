import { motion } from "framer-motion";
import type { ThemeType, UserType } from "../../utils";

import {
  Avatar,
  Contacts,
  Languages,
  Profile,
  Summary,
  Stack,
  Projects,
} from "../cv";
import ReactPDF from "@react-pdf/renderer";

interface ViewerProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
  theme: ThemeType;
}

export const Viewer: React.FC<ViewerProps> = ({ user, onChange, theme }) => {
  return (
    <motion.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ type: "linear" }}
      className="styled-scrollbar h-full overflow-auto px-4 py-5"
    >
      <div
        id="cv-document"
        className="flex h-[1000px] w-[700px] overflow-hidden"
      >
        <div
          role="user-photo-info"
          className="flex w-2/5 flex-col "
          style={{
            backgroundColor: theme.additionalColor,
            color: theme.mainColor,
          }}
        >
          <div role="avatar" className=" h-1/2 w-full">
            <Avatar user={user} onChange={onChange} />
          </div>
          <div role="contacts" className="container ">
            <Contacts user={user} onChange={onChange} />
          </div>
          <div role="languages" className="container ">
            <Languages user={user} onChange={onChange} />
          </div>
        </div>

        <div
          role="user-about-stack"
          className="w-3/5"
          style={{
            backgroundColor: theme.mainColor,
            color: theme.additionalColor,
          }}
        >
          <div role="name,position" className="h-1/8 container">
            <Profile user={user} onChange={onChange} />
          </div>
          <div role="summary" className="container">
            <Summary user={user} onChange={onChange} />
          </div>

          <div role="stack" className="container">
            <Stack user={user} onChange={onChange} />
          </div>
          <div role="projects" className="container">
            <Projects user={user} onChange={onChange} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
