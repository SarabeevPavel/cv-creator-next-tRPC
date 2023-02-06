import { useState } from "react";
import type { UserType } from "../../utils";
import { trpc } from "../../utils";
import {
  AddButton,
  ButtonGenerate,
  DoneButton,
  EditButton,
  List,
} from "../assets";
import { Input } from "../fields";
import { RingLoader } from "react-spinners";

interface StackProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Stack: React.FC<StackProps> = ({ user, onChange }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { position } = user;
  const { mutate } = trpc.cv.generateStack.useMutation();

  const handleGenerateStack = () => {
    setIsLoading(true);
    mutate(
      { text: user.summary },
      {
        onSuccess: (res) => {
          if (res) {
            console.log(res);
            onChange({
              ...user,
              technologies: res
                .split(" ")
                .map((item) => item.replace(/[0-9.]/g, "")),
            });
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
    <div className="group container relative">
      <div className="flex">
        <h3 className="text-md mb-2 text-center font-semibold">
          Stack of technologies
        </h3>
        <ButtonGenerate
          styles={`opacity-0 inline-block group-hover:opacity-100 ml-2 ${
            isLoading ? "opacity-100" : ""
          }`}
          disabledConfig={
            position ? !position?.trim().length : isLoading || isLoading
          }
          onClick={handleGenerateStack}
        />
        {isError && (
          <p className="ml-2 text-base text-red-500">Error... Try again!</p>
        )}
        {isLoading && (
          <RingLoader
            color="blue"
            loading={isLoading}
            size={28}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="ml-2"
          />
        )}

        <EditButton
          items={user.technologies}
          isEditing={editing}
          onChange={() => {
            setEditing(true);
            setIsOpen(false);
          }}
          styles="text-blue-600 group-hover:text-blue-600 hover:bg-black/20"
        />

        <DoneButton
          isEditing={editing}
          onChange={() => setEditing(false)}
          styles="text-white"
        />

        <AddButton
          view={editing && user.technologies.length !== 0}
          disabled={
            user.technologies.length !== 0 && user.technologies.length > 11
          }
          onChange={() => {
            setIsOpen(true);
          }}
          styles={"w-10 h-8 text-white/80 hover:bg-blue-600 hover:text-white"}
        />
      </div>

      <AddButton
        view={!user.technologies.length && !editing}
        disabled={
          user.technologies.length !== 0 && user.technologies.length > 11
        }
        onChange={() => {
          setEditing(true);
          setIsOpen(true);
        }}
        styles={`ml-auto mr-auto text-white mt-2 mb-0 block opacity-0 group-hover:opacity-100 disabled:hidden`}
      />

      {editing && isOpen && user.technologies.length < 12 && (
        <div
          className={`${
            editing
              ? "opacity-100 transition-opacity duration-200"
              : "opacity-0 transition-opacity duration-200"
          }    absolute left-1/2 z-10 mx-auto mt-2 flex w-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/50 p-2 duration-200 ease-in-out`}
        >
          <Input
            maxLength={12}
            placeholder="Next.js"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.currentTarget.value)
            }
            styles="bg-black/10 rounded-lg text-white/80"
          />
          <AddButton
            view={isOpen}
            disabled={!value.trim().length || value.length === 13}
            onChange={() => {
              onChange({
                ...user,
                technologies: [...user.technologies, value],
              });
              setValue("");
            }}
            styles="text-white"
          />
        </div>
      )}
      <List
        buttonStyles="mr-1"
        items={user.technologies}
        isEditing={editing}
        onDelete={(i) =>
          onChange({
            ...user,
            technologies: user.technologies.filter((_, index) => index !== i),
          })
        }
        styles="grid grid-cols-3"
      />
    </div>
  );
};
