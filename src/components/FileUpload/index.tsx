"use client";

import React, { useEffect, useState } from "react";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";
import { PhotoIcon } from "@heroicons/react/24/solid";

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
}

export default function FileUploader({ onFilesSelected }: FileUploaderProps) {
  // const [files, setFiles] = useState<File[]>([]);
  // const [successfullySent, setSuccessfullySent] = useState(false);
  const {
    files,
    setFiles,
    successfullySentUploadCV,
    setSuccessfullySentUploadCV,
  } = useMobilePageNavButtonContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    console.log(e.dataTransfer.files);
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles: File[] = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileRemoval = (index: number) => {
    console.log("Removal Triggered");
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <div
      className="col-span-full"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <label
        htmlFor="file-upload"
        className="block text-sm font-medium leading-6 text-white"
      >
        Select a file to upload
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-ic8 px-6 py-10">
        <div className="w-full text-center">
          {files.length !== 0 ? (
            <>
              <p className="pb-8 text-ic8">
                {files.length} file(s) ready for upload!
              </p>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="mb-4 flex flex-col py-2 md:flex-row"
                >
                  <p className="md:4/6 w-5/6 text-left text-ic8">{file.name}</p>
                  <button
                    type="reset"
                    className="w-full text-left text-white md:w-2/6"
                    onClick={() => {
                      handleFileRemoval(index);
                    }}
                  >
                    Remove File
                  </button>
                </div>
              ))}
              <label
                htmlFor="file-upload"
                className="relative mt-12 cursor-pointer rounded-md bg-black text-sm font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-ic8 focus-within:ring-offset-2 hover:text-ic8"
              >
                <span>Add another file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  multiple
                />
              </label>
            </>
          ) : successfullySentUploadCV ? (
            <p className="mt-4 text-lg text-ic8teal">Successfully Sent</p>
          ) : (
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
          )}

          {files.length !== 0 ? (
            <>
              {/* <button
                type="reset"
                className="border-b-2 pt-8"
                onClick={() => {handleFileRemoval(index)}}
              >
                Remove File
              </button> */}
            </>
          ) : (
            <>
              <div className="mt-4 flex justify-center text-sm leading-6 text-white">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-black font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-ic8 focus-within:ring-offset-2 hover:text-ic8"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    multiple
                  />
                </label>
                <p className="pl-1 text-ic8">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-ic8">
                DOC, DOCX, PDF up to 2MB
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
