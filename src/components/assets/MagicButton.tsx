import classNames from "classnames";
import { useEffect, useState } from "react";
import { RxMagicWand } from "react-icons/rx";
import { VscTriangleUp } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import type { UserType } from "../../utils";
import { trpc } from "../../utils";
import { Loader } from "./Loader";

interface MagicButtonProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const MagicButton: React.FC<MagicButtonProps> = ({ user, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [generatedSummary, setGeneratedSummary] = useState<null | string>(null);
  const [generatedStack, setGeneratedStack] = useState<null | string[]>(null);

  useEffect(() => {
    if (generatedSummary && generatedStack) {
      onChange({
        ...user,
        summary: generatedSummary,
        technologies: generatedStack,
      });
      setGeneratedSummary(null);
      setGeneratedStack(null);
    }
  }, [generatedStack, generatedSummary, onChange, user]);

  const { mutate: genStack } = trpc.cv.generateStack.useMutation();
  const { mutate: genNewSummary } = trpc.cv.generateSummary.useMutation();
  const { mutate: genConSummary } = trpc.cv.continueSummary.useMutation();

  const genSummary =
    user.summary.length > 15 && user.summary.length < 50
      ? genConSummary
      : genNewSummary;

  const handleGenerate = () => {
    setIsLoading(true);
    genSummary(
      { text: user.position },
      {
        onSuccess: (res) => {
          if (res) {
            setGeneratedSummary(res.trim());
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

    genStack(
      { text: user.position },
      {
        onSuccess: (res) => {
          if (res) {
            const newStack = res
              .split("\n")
              .filter((item: string) => item.length > 0)
              .map((item: string) => item.trim());

            setGeneratedStack(newStack);
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
            className="absolute -top-5 right-5 grid w-32 -translate-y-full transform place-items-center rounded-xl bg-gray-800 p-2 text-white/80"
          >
            <h3 className="mb-2 text-center">Generate?</h3>
            <motion.div>
              <button
                className="mr-2 hover:text-green-400"
                onClick={() => {
                  setIsOpen(false);
                  handleGenerate();
                }}
              >
                Yes
              </button>
              <button
                className="hover:text-red-400"
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
