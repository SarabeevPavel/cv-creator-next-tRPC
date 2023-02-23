import type { ThemeType } from "../../utils";

interface SummaryProps {
  text: string;
  theme: ThemeType;
}

export const Summary: React.FC<SummaryProps> = ({ text }) => (
  <div className="h-full w-full">
    <h3 className="text-md mb-2 text-center font-semibold uppercase">
      Summary
    </h3>
    <p>{text}</p>
  </div>
);
