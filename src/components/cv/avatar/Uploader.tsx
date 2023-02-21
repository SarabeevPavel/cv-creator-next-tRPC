interface UploaderProps {
  onUpload: (imageUrl: string) => void;
  position: string;
  isLoading: boolean;
}

export const Uploader: React.FC<UploaderProps> = ({ onUpload, isLoading }) => {
  return (
    <div className="flex w-full flex-col justify-center p-4">
      <div className="group relative h-10 w-full">
        <button
          disabled={isLoading}
          type="button"
          className="h-10 w-full rounded-lg bg-purple-700 p-2 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:bg-gray-400 group-hover:bg-purple-800 disabled:group-hover:bg-gray-400"
        >
          Upload avatar
        </button>

        <input
          disabled={isLoading}
          type="file"
          accept=".png, .jpg, .jpeg"
          className="absolute top-0 left-0 h-10 w-full opacity-0"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              onUpload(imageUrl);
              return () => URL.revokeObjectURL(imageUrl);
            }

            return;
          }}
        />
      </div>
    </div>
  );
};
