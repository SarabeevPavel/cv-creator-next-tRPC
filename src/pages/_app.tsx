import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import Head from "next/head";
import { GlobalContextProvider } from "../components";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CV-Creator</title>
        <meta name="description" />
        <link rel="icon" href="/bulb-ico.png" />
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
