import type { NextPage } from "next";
import { useGlobalContext } from "../../hooks/useGlobalContext";

// components:
import { Viewer, Editor } from "../../components";
import type { UserType } from "../../utils";

const CV: NextPage = () => {
  const { user, setUser } = useGlobalContext();
  console.log(user);

  return (
    <div className="styled-scrollbar grid h-screen w-screen place-items-center bg-gray-800">
      <div className="flex h-full w-3/4 justify-center gap-5 overflow-hidden bg-gray-900 ">
        <Editor />
        <Viewer
          user={user}
          onChange={(updatedUser: UserType) => setUser(updatedUser)}
        />
      </div>
    </div>
  );
};

export default CV;
