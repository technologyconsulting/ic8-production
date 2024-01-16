"use client";
import React, { useState, useRef } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactUs() {
  const [successfullySent, setSuccessfullySent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    selectedOption: "candidate",
    firstname: "",
    lastname: "",
    email: "",
  });

  const fileInputRef = useRef(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // console.log(e.target.name);
    // console.log(e.target.value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data: fileData, error: fileError } = await supabase.storage
      .from("contact-us") // Replace with your Supabase storage bucket name
      .upload(`uploads/${formData.email}/${file?.name}`, file || "");

    console.log(fileData);

    if (fileError) {
      console.error("Error uploading file:", fileError.message);
      return;
    }

    // Add form data and file data to your Supabase table
    const { data, error } = await supabase
      .from("contact-us") // Replace with your Supabase table name
      .insert([
        {
          contact_type: formData.selectedOption,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          file_url: fileData.path, // Use the Key from the uploaded file
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    setFormData({
      selectedOption: "candidate",
      firstname: "",
      lastname: "",
      email: "",
    });

    setFile(null); // Reset the file input to empty

    setSuccessfullySent(true);

    console.log("Form data and file uploaded successfully:", data);
  };

  return (
    <div className="h-full w-90 leading-7 tracking-widest md:mt-20 xl:mt-0 ">
      <form
        onSubmit={handleSubmit}
        className="xl:bg-neutral-950 xl:drop-shadow-white xl:p-4"
      >
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-4 w-1/2">
            <input
              type="radio"
              name="selectedOption"
              value="candidate"
              id="box-shadow"
              checked={formData.selectedOption === "candidate"}
              onChange={handleFormChange}
              className="relative w-5 h-5 mr-1 appearance-none  outline-none border-2 bg-neutral-900 rounded-full hover:border-ic8 checked:w-4 checked:h-4 checked:mr-2 checked:bg-ic8 checked:border-2 checked:border-neutral-950 checked:outline-offset-2 checked:outline-white"
            />
            <label htmlFor="box-shadow">Candidate</label>
          </div>
          <div className="flex items-center gap-4 w-1/2">
            <input
              type="radio"
              name="selectedOption"
              value="client"
              id="box-shadow"
              checked={formData.selectedOption === "client"}
              onChange={handleFormChange}
              className="relative w-5 h-5 mr-1 appearance-none  outline-none border-2 bg-neutral-900 rounded-full hover:border-ic8 checked:w-4 checked:h-4 checked:mr-2 checked:bg-ic8 checked:border-2 checked:border-neutral-950 checked:outline-offset-2 checked:outline-white"
            />
            <label htmlFor="box-shadow" className="flex items-center gap-4">
              Client
            </label>
          </div>
        </div>
        <div className="w-full my-8 py-1 border-b-2 border-ic8">
          <input
            type="text"
            name="firstname"
            id=""
            value={formData.firstname}
            placeholder="Firstname"
            className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full my-8 py-1 border-b-2 border-ic8">
          <input
            type="text"
            name="lastname"
            id=""
            value={formData.lastname}
            placeholder="Lastname"
            className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full my-8 py-1 border-b-2 border-ic8">
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            placeholder="Email"
            className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="col-span-full">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium leading-6 text-ic8"
          >
            Upload CV
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-ic8 px-6 py-10">
            <div className="text-center">
              {file !== null ? (
                <>
                  <p className="pb-8">Ready for upload!</p>
                  <p>{file.name}</p>
                </>
              ) : successfullySent ? (
                <p className="text-emerald-600 text-lg">Successfully Sent</p>
              ) : (
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
              {file !== null ? (
                <>
                  <button
                    type="reset"
                    className="pt-8 border-b-2"
                    onClick={() => {
                      setFile(null);
                    }}
                  >
                    Remove File
                  </button>
                </>
              ) : (
                <>
                  <div className="mt-4 flex text-sm leading-6 text-white">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-black font-semibold text-ic8 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-white">
                    DOC, DOCX, PDF up to 2MB
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full my-8 py-3 bg-ic8 rounded-full text-white text-xl font-bold "
        >
          <p>SUBMIT</p>
        </button>
      </form>
    </div>
  );
}
