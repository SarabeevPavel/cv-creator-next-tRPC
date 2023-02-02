interface EditorProps {
  test?: string;
}

export const Editor: React.FC<EditorProps> = ({}) => {
  return (
    <div
      role="editor-theme-and-layout"
      className="grid w-2/5 place-items-center"
    >
      <div className="h-1/2 w-3/4 rounded-xl bg-gray-800 p-3">
        <h2 className="text-center text-2xl font-semibold text-white">
          Editor
        </h2>
        <p className="mt-10 text-center text-lg text-white/50">
          Choose theme and layout (WIP)
        </p>
      </div>
    </div>
  );
};
