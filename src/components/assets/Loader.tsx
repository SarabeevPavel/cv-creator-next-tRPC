import { RingLoader } from "react-spinners";

interface LoaderProps {
  isLoading: boolean;
  color?: string;
  size?: number;
  styles?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  isLoading,
  color,
  size,
  styles,
}) => {
  if (!isLoading) return null;

  return (
    <RingLoader
      color={color || "white"}
      loading={isLoading}
      size={size || 28}
      aria-label="Loading Spinner"
      data-testid="loader"
      className={`${styles ? styles : ""}`}
    />
  );
};
