import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
const FileUpload = (props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  let inputClasses = "";
  if (uploadedFiles.length != 0) {
    inputClasses =
      "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]";
  }

  return (
    <div
      className="relative w-full h-24 border border-[#D0D0D2] rounded-lg px-2 md:px-6 text-center hover:cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {uploadedFiles.length == 0 ? (
        <p className="text-sm md:text-base absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {props.message}
        </p>
      ) : (
        ""
      )}
      <ul className={inputClasses}>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FileUpload;
