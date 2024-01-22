"use client";
import React, { useState, useRef } from "react";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactForm() {
  // const [successfullySent, setSuccessfullySent] = useState(false);
  // const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  const [value, setValue] = useState("");

  const { successfullySentContactForm, setSuccessfullySentContactForm } =
    useMobilePageNavButtonContext();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTextArea = (
    evt: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const val = evt.target?.value;

    setValue(val);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTermsChange = () => {
    setTermsAgreed((current) => !current);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add form data and file data to your Supabase table
    const { data, error } = await supabase
      .from("contact-us") // Replace with your Supabase table name
      .insert([
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          telephone: formData.telephone,
          message: value,
          terms_accepted: termsAgreed,
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
    });

    setTermsAgreed(false);

    setValue("");

    setSuccessfullySentContactForm(true);

    console.log("Form data uploaded successfully:", data);
  };

  return (
    <div className="w-full leading-7 tracking-widest md:mt-20 xl:mt-0 ">
      <form
        onSubmit={handleSubmit}
        className="xl:bg-neutral-950 xl:p-4 xl:drop-shadow-white"
      >
        <div className="my-8 w-full border-b-2 border-ic8 py-1">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            placeholder="First name"
            className="border-box h-12 w-full bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="my-8 w-full border-b-2 border-ic8 py-1">
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            placeholder="Last name"
            className="border-box h-12 w-full bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="my-8 w-full border-b-2 border-ic8 py-1">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
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
            id="telephone"
            value={formData.telephone}
            placeholder="Telephone"
            className="border-box h-12 w-full bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
            onChange={handleFormChange}
          />
        </div>
        <div className="my-8 w-full border-b-2 border-ic8 py-1">
          <textarea
            rows={1}
            name="message"
            id="message"
            value={value}
            placeholder="Message"
            className="border-box h-12 w-full bg-black pl-2 text-ic8 focus:border-l-2 focus:border-ic8 focus:outline-none"
            ref={textAreaRef}
            onChange={handleChangeTextArea}
          />
        </div>
        <div className="my-8 w-full py-1">
          <div className="items-top mt-8 flex space-x-2">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={termsAgreed}
              className="h-[20px] w-[20px] cursor-pointer"
              onChange={handleTermsChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="mt-1 text-sm font-medium leading-none text-ic8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept Terms of use
              </label>
              <p className="text-sm text-white">
                {/* You agree to our Terms of Service and Privacy Policy. */}
              </p>
              {successfullySentContactForm ? (
                <p className="mt-4 text-lg font-extrabold text-ic8teal">
                  Successfully Sent
                </p>
              ) : null}
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
      </form>
    </div>
  );
}
