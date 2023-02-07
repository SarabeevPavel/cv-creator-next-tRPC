import { type NextPage } from "next";
import { useState } from "react";
import type { UserType } from "../utils/";
import { trpc } from "../utils/";
import { useRouter } from "next/router";
import { useGlobalContext } from "../hooks";
import { initialUser } from "../utils";
import { About, GetStartedButton, Choice, Loader } from "../components";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  const { mutate } = trpc.cv.initCV.useMutation();

  const router = useRouter();
  const { setUser } = useGlobalContext();
  const [about, setAbout] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [choice, setChoice] = useState<"get-started" | "choice" | "about">(
    "get-started"
  );

  const handleGenerateCv = () => {
    setIsLoading(true);
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
          setIsError(false);
        },
        onError: () => {
          setIsError(true);
          setUser(initialUser);
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
              isView={choice === "choice"}
              onSelect={(value: string) => {
                if (value === "about") {
                  setChoice("about");
                } else {
                  setUser(initialUser);
                  void router.push({ pathname: "/cv" });
                }
              }}
            />

            <About
              isView={choice === "about"}
              isLoading={isLoading}
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
