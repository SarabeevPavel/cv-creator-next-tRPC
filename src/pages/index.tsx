import { type NextPage } from "next";
import { useEffect, useState } from "react";
import type { ThemeType, UserType } from "../utils/";
import { trpc } from "../utils/";
import { useRouter } from "next/router";
import { useGlobalContext } from "../hooks";
import { initialUser } from "../utils";
import { About, GetStartedButton, Choice } from "../components";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Home: NextPage = () => {
  const { mutate } = trpc.cv.initCV.useMutation();

  const router = useRouter();
  const { setUser, setTheme } = useGlobalContext();

  const [saveUser, setSaveUser] = useState<string | null>(null);
  const [saveTheme, setSaveTheme] = useState<string | null>(null);

  const [about, setAbout] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [choice, setChoice] = useState<
    "get-started" | "choice" | "about" | "continue"
  >("get-started");

  useEffect(() => {
    // Perform localStorage action
    const oldUser = localStorage.getItem("user");
    const oldTheme = localStorage.getItem("theme");
    setSaveUser(oldUser);
    setSaveTheme(oldTheme);
  }, []);

  const handleGenerateCv = () => {
    setIsLoading(true);
    mutate(
      { text: about },
      {
        onSuccess: (res) => {
          if (res) {
            const newUser = JSON.parse(res) as UserType;
            setUser(newUser);
            void router.push({ pathname: "/cv" });
          }
          setIsError(false);
          toast.success("Generated success!");
        },
        onError: () => {
          setIsError(true);
          toast.error("Oops, something's gone wrong. Try again!");
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 overflow-hidden px-4 py-16 ">
          <motion.h1
            initial={{
              x: 1000,
            }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Creator <span className="text-[hsl(280,100%,70%)]">Your</span> CV
          </motion.h1>

          <div className="relative flex h-52 w-1/2 flex-col items-center">
            <GetStartedButton
              isView={choice === "get-started"}
              onSelect={() => setChoice("choice")}
            />

            <Choice
              isSave={Boolean(saveUser)}
              isView={choice === "choice"}
              onSelect={(value: string) => {
                if (value === "about") {
                  setChoice("about");
                } else if (value === "continue") {
                  setChoice("continue");
                  if (saveUser && saveTheme) {
                    setUser(JSON.parse(saveUser) as UserType);
                    setTheme(JSON.parse(saveTheme) as ThemeType);
                    void router.push({ pathname: "/cv" });
                  }
                } else {
                  setUser(initialUser);
                  void router.push({ pathname: "/cv" });
                }
              }}
            />

            <About
              isView={choice === "about"}
              isLoading={isLoading}
              isError={isError}
              value={about}
              onChange={(value: string) => setAbout(value)}
              onGenerate={() => handleGenerateCv()}
              onBack={() => setChoice("choice")}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
