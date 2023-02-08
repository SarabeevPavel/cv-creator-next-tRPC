import { Cropper } from "react-cropper";
import { useRef } from "react";
import "cropperjs/dist/cropper.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { Portal } from "../../assets";

interface CropProps {
  open: boolean;
  onClose: () => void;
  avatarUrl: string;
  onCrop: (newAvatar: string) => void;
}

export const Crop: React.FC<CropProps> = ({
  onClose,
  avatarUrl,
  onCrop,
  open,
}) => {
  const cropperRef = useRef<HTMLImageElement>(null);

  if (!open) return null;

  const handleCrop = () => {
    const imageElement: any = cropperRef?.current; /* eslint-disable-line */

    const cropper = imageElement?.cropper; /* eslint-disable-line */

    onCrop(cropper.getCroppedCanvas().toDataURL()); /* eslint-disable-line */
    onClose();
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
      <div className="flex h-full flex-col justify-between bg-gray-900">
        <div className="grid h-full place-items-center overflow-hidden">
          <Cropper
            src={avatarUrl}
            style={{ height: "100%", width: "100%" }}
            initialAspectRatio={16 / 9}
            guides={false}
            ref={cropperRef}
          />
        </div>

        <div className="m-2 flex items-center justify-center gap-4">
          <button
            className="h-10 w-36 rounded-xl bg-green-500 duration-200 ease-in-out hover:bg-green-700 hover:text-white hover:shadow-lg"
            onClick={handleCrop}
          >
            Save
          </button>
          <button
            className="h-10 w-36 rounded-xl bg-red-500 duration-200 ease-in-out hover:bg-red-700 hover:text-white hover:shadow-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
