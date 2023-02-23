import classNames from "classnames";
import { useEffect, useState } from "react";
import { RxMagicWand } from "react-icons/rx";
import { VscTriangleUp } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import type { UserType } from "../../utils";
import { trpc } from "../../utils";
import { Loader } from "./Loader";
import { toast } from "react-toastify";

interface MagicButtonProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const MagicButton: React.FC<MagicButtonProps> = ({ user, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const { mutate: genFullCv } = trpc.cv.generateFullCV.useMutation();
  const { mutate: genStack } = trpc.cv.generateStack.useMutation();
  const { mutate: genNewSummary } = trpc.cv.generateSummary.useMutation();
  const { mutate: genConSummary } = trpc.cv.continueSummary.useMutation();

  const genSummary =
    user.summary.length > 15 && user.summary.length < 150
      ? genConSummary
      : genNewSummary;

  const handleGenerate = (operation?: string) => {
    setIsLoading(true);
    if (operation === "full-cv") {
      genFullCv(
        { text: user.position },
        {
          onSuccess: (res) => {
            if (res) {
              const newUser = JSON.parse(res) as UserType;
              onChange(newUser);
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
    }
    if (operation === "summary") {
      genSummary(
        {
          text:
            user.summary.length > 15 && user.summary.length < 150
              ? user.summary
              : user.position,
        },
        {
          onSuccess: (res) => {
            if (res) {
              onChange({
                ...user,
                summary:
                  user.summary.length > 15 && user.summary.length < 150
                    ? user.summary + res.trim()
                    : res.trim(),
              });
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
    }

    if (operation === "stack") {
      genStack(
        { text: user.position },
        {
          onSuccess: (res) => {
            if (res) {
              const getArrayFromString = (str: string) => {
                return str
                  .split("\n")
                  .map((item) => item.split(".")[1])
                  .filter((item) => typeof item === "string" && item.trim());
              };
              const newStack = getArrayFromString(res);
              // setGeneratedStack(newStack as string[]);
              onChange({ ...user, technologies: newStack as string[] });
            }
            setIsError(false);
          },
          onError: () => {
            setIsError(true);
          },
          onSettled: () => {
            setIsLoading(false);
          },
        }
      );
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.1, y: 0, x: 30 }}
            animate={{ scale: 1, y: -63, x: 5 }}
            exit={{ scale: 0.1, y: 0, x: 30 }}
            transition={{ type: "linear", duration: 0.2 }}
            className="absolute bottom-1/3 right-5 flex w-32 transform flex-col place-items-center rounded-xl bg-gray-800 p-2 text-white/80"
          >
            <h3 className="mb-2 text-center font-bold">What generate?</h3>
            <motion.div className="flex flex-col justify-center">
              <button
                className="mr-2 hover:text-blue-400"
                onClick={() => {
                  setIsOpen(false);
                  handleGenerate("full-cv");
                }}
              >
                Random CV
              </button>

              <button
                className="mr-2 hover:text-blue-400"
                onClick={() => {
                  setIsOpen(false);
                  handleGenerate("summary");
                }}
              >
                Summary
              </button>

              <button
                className="mr-2 hover:text-blue-400"
                onClick={() => {
                  setIsOpen(false);
                  handleGenerate("stack");
                }}
              >
                Stack
              </button>

              <button
                className="mt-1 font-semibold hover:text-red-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>

              <VscTriangleUp
                className="absolute right-2 bottom-0 translate-y-5 rotate-180 transform text-gray-800"
                size={30}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={!user.position.length || isLoading}
        className={classNames(
          isOpen && "rgb-background",
          !user.position.length
            ? "disabled:bg-white/25"
            : "disabled:bg/black/50 hover:rgb-background",
          " group relative grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-black/50 text-white transition-all  duration-200 ease-in-out  disabled:opacity-70"
        )}
      >
        {isLoading ? (
          <Loader isLoading={isLoading} styles="m-0" />
        ) : (
          <RxMagicWand size={30} />
        )}
        {!user.position.length && (
          <motion.span className="absolute bg-gray-600 opacity-0 group-hover:opacity-100 ">
            Input position!
          </motion.span>
        )}
      </button>
    </div>
  );
};
