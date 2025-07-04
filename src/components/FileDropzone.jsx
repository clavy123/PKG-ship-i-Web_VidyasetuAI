import { useDropzone } from "react-dropzone";

export const FileDropzone = ({ onDrop, file, error }) => {
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      maxFiles: 1,
    });

  return (
    <div className="mb-4 w-full">
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${
          isDragActive
            ? "border-blue-400 bg-blue-50"
            : "border-indigo-500 bg-gray-900"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-300">
          {isDragActive
            ? "Drop the file here ..."
            : "Drag & drop a PDF file here, or click to select"}
        </p>
        <p className="text-xs text-gray-400 mt-1">Only .pdf file is allowed.</p>
        {file && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-green-400 font-semibold">{file.name}</span>
            <span className="text-xs text-gray-400">
              ({(file.size / 1024).toFixed(1)} KB)
            </span>
          </div>
        )}
      </div>
      {(error || fileRejections.length > 0) && (
        <span className="text-xs text-red-400 mt-1 block">
          {error ||
            (fileRejections.length > 0 &&
              "Invalid file type. Only PDF, DOC, DOCX allowed.")}
        </span>
      )}
    </div>
  );
};
