import type { ThemeType } from "../../utils";

interface ProfileProps {
  name: string;
  position: string;
  theme: ThemeType;
}

export const Profile: React.FC<ProfileProps> = ({ name, position }) => (
  <div className="h-full w-full ">
    <p className="rounded-xl text-center text-3xl font-bold">{name}</p>
    <p className="h-8 rounded-xl text-center text-lg font-bold  uppercase opacity-80">
      {position}
    </p>
  </div>
);
