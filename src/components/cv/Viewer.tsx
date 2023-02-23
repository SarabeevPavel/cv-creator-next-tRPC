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
  SidebarLeft,
  SidebarRight,
  SidebarTop,
} from "../cv";

interface ViewerProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
  theme: ThemeType;
  layout: string;
}

export const Viewer: React.FC<ViewerProps> = ({
  user,
  onChange,
  theme,
  layout,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ type: "linear" }}
      className="hide-scrollbar h-full overflow-auto px-4 py-5"
    >
      <div className="h-[1132px] w-[803px]">
        {layout === "sidebar-left" && (
          <SidebarLeft
            theme={theme}
            avatar={<Avatar user={user} onChange={onChange} />}
            contacts={<Contacts user={user} onChange={onChange} />}
            languages={<Languages user={user} onChange={onChange} />}
            profile={<Profile user={user} onChange={onChange} />}
            summary={<Summary user={user} onChange={onChange} />}
            stack={<Stack user={user} onChange={onChange} />}
            projects={<Projects user={user} onChange={onChange} />}
          />
        )}

        {layout === "sidebar-right" && (
          <SidebarRight
            theme={theme}
            avatar={<Avatar user={user} onChange={onChange} />}
            contacts={<Contacts user={user} onChange={onChange} />}
            languages={<Languages user={user} onChange={onChange} />}
            profile={<Profile user={user} onChange={onChange} />}
            summary={<Summary user={user} onChange={onChange} />}
            stack={<Stack user={user} onChange={onChange} />}
            projects={<Projects user={user} onChange={onChange} />}
          />
        )}

        {layout === "sidebar-top" && (
          <SidebarTop
            theme={theme}
            avatar={<Avatar user={user} onChange={onChange} />}
            contacts={<Contacts user={user} onChange={onChange} />}
            languages={<Languages user={user} onChange={onChange} />}
            profile={<Profile user={user} onChange={onChange} />}
            summary={<Summary user={user} onChange={onChange} />}
            stack={<Stack user={user} onChange={onChange} />}
            projects={<Projects user={user} onChange={onChange} />}
          />
        )}
      </div>
    </motion.div>
  );
};
