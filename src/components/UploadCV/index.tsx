"use client";
import React, { useState, useRef } from "react";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";
import FileUploader from "../FileUpload";
import { XMarkIcon } from "@heroicons/react/24/solid";

// SUPABASE Stuff

import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// SUPABASE Stuff

export default function UploadCV() {
  // const [successfullySent, setSuccessfullySent] = useState(false);
  // const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  const {
    isCVOpen,
    setIsCVOpen,
    files,
    setFiles,
    setSuccessfullySentUploadCV,
  } = useMobilePageNavButtonContext();

  const handleCVOpen = () => {
    setFormData({
      // selectedOption: "candidate",
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
    });

    setTermsAgreed(false);
    setFiles([]);
    setSuccessfullySentUploadCV(false);
    setIsCVOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // console.log(e.target.name);
    // console.log(e.target.value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTermsChange = () => {
    setTermsAgreed((current) => !current);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let filesData: string[] = [];

    for (const file of files) {
      const { data: fileData, error: fileError } = await supabase.storage
        .from("upload-cv") // Replace with your Supabase storage bucket name
        .upload(`uploads/${formData.email}/${file?.name}`, file || "");

      if (fileData !== null) {
        filesData.push(fileData.path);
      }
      // console.log(fileData);

      if (fileError) {
        console.error("Error uploading file:", fileError.message);
        return;
      }
    }
    // Add form data and file data to your Supabase table
    const { data, error } = await supabase
      .from("upload-cv") // Replace with your Supabase table name
      .insert([
        {
          // contact_type: formData.selectedOption,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          telephone: formData.telephone,
          file_url: filesData, // Use the Key from the uploaded file
          terms_accepted: termsAgreed,
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    setFormData({
      // selectedOption: "candidate",
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
    });

    setTermsAgreed(false);

    setFiles([]); // Reset the file input to empty

    setSuccessfullySentUploadCV(true);

    // console.log("Form data and file uploaded successfully:", data);
  };

  if (!isCVOpen) {
    return null;
  }

  return (
    // div is the modal container
    <div
      className={`${
        isCVOpen ? "fixed" : "hidden"
      } left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-neutral-950 xl:bg-opacity-80`}
      onClick={(e) => e.stopPropagation()}
    >
      <form
        onSubmit={handleSubmit}
        className="scroll max-h-[90%] w-full overflow-auto p-4 md:w-4/6 md:p-16 lg:w-2/6 xl:bg-neutral-950 xl:p-12 landscape:lg:w-3/6 landscape:xl:w-2/6 "
        onClick={(e) => e.stopPropagation()}
      >
        <section className="text-ic8">
          <div className="flex justify-between">
            <p className=" text-2xl text-ic8">UPLOAD CV</p>
            <p className="cursor-pointer">
              <button type="button" className="z-50 " onClick={handleCVOpen}>
                <XMarkIcon className="hover:-black inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full border border-input bg-black p-1 text-ic8 ring-offset-background  transition-colors hover:bg-white hover:text-black" />
              </button>
            </p>
          </div>
          <div className="my-8 w-full border-b-2 border-ic8 py-1">
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              placeholder="Firstname"
              className="border-box h-12 w-full appearance-none bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-8 w-full border-b-2 border-ic8 py-1">
            <input
              type="text"
              name="lastname"
              id=""
              value={formData.lastname}
              placeholder="Lastname"
              className="border-box h-12 w-full bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-8 w-full border-b-2 border-ic8 py-1">
            <input
              type="email"
              name="email"
              id=""
              value={formData.email}
              placeholder="Email"
              className="border-box h-12 w-full bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-8 w-full border-b-2 border-ic8 py-1">
            <input
              type="telephone"
              name="telephone"
              id=""
              value={formData.telephone}
              placeholder="Telephone"
              className="border-box h-12 w-full bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
              onChange={handleFormChange}
            />
          </div>
          <FileUploader onFilesSelected={setFiles} />

          <div className="my-8 w-full py-1">
            <div className="items-top mt-8 flex space-x-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={termsAgreed}
                className="h-[20px] w-[20px]"
                onChange={handleTermsChange}
              />

              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="mt-1 text-sm font-medium leading-none text-ic8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-white">
                  {/* You agree to our Terms of Service and Privacy Policy. */}
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={` ${
              termsAgreed ? "" : "cursor-not-allowed opacity-30 "
            } my-8 w-full rounded-full bg-ic8 py-3 text-xl font-bold text-white`}
            disabled={termsAgreed ? false : true}
          >
            <p>SUBMIT</p>
          </button>
        </section>
      </form>
    </div>
  );
}
