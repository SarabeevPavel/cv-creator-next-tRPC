import type { NextPage } from "next";
import { Page, Viewer } from "../../components";
import { useGlobalContext } from "../../hooks";

const TestPage: NextPage = () => {
  const { user, theme, layout } = useGlobalContext();
  console.log(user);
  return <Page user={user} theme={theme} layout={layout} />;
};

export default TestPage;
