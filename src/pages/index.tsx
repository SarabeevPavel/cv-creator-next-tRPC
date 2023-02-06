import { type NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import type { UserType } from "../utils/types";
import { useRouter } from "next/router";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { initialUser } from "../utils";
import { RingLoader } from "react-spinners";

const Home: NextPage = () => {
  const { mutate } = trpc.cv.initCV.useMutation();

  const router = useRouter();
  const { user, setUser } = useGlobalContext();
  const [about, setAbout] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleGenerateCv = () => {
    setLoading(true);
    mutate(
      { text: about },
      {
        onSuccess: (res) => {
          if (res) {
            console.log(res);
            console.log(JSON.parse(res) as UserType);
            const newUser = JSON.parse(res) as UserType;
            setUser(newUser);
            void router.push({ pathname: "/cv" });
          }
          setError(false);
        },
        onError: () => {
          setError(true);
          setUser(initialUser);
        },
        onSettled: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Creator <span className="text-[hsl(280,100%,70%)]">Your</span> CV
          </h1>
          {/* <h3>What are you want to continue?</h3>
          <div className="flex">
            <div className="flex flex-col "> */}
          <textarea
            value={about}
            disabled={loading}
            className="hide-scrollbar h-28 w-80 resize-none rounded-lg bg-black/30 px-3 py-2 text-white/95 disabled:bg-gray-400"
            onChange={(e) => setAbout(e.currentTarget.value)}
          />
          {/* <Link >To cv</Link> */}

          <button
            type="button"
            disabled={about.length < 10 || loading}
            className="default-button mx-auto my-2"
            onClick={() => handleGenerateCv()}
          >
            {loading ? (
              <RingLoader
                color="white"
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <span>Continue</span>
            )}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
