"use client";
import { createContext, useContext, useState } from "react";

interface MobilePageNavButtonContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCVOpen: boolean;
  setIsCVOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactOpen: boolean;
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  successfullySentContactForm: boolean;
  setSuccessfullySentContactForm: React.Dispatch<React.SetStateAction<boolean>>;
  successfullySentUploadCV: boolean;
  setSuccessfullySentUploadCV: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobilePageNavButtonContext = createContext<
  MobilePageNavButtonContextProps | undefined
>(undefined);

export default function MobileContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [successfullySentContactForm, setSuccessfullySentContactForm] =
    useState(false);
  const [successfullySentUploadCV, setSuccessfullySentUploadCV] =
    useState(false);

  return (
    <MobilePageNavButtonContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isCVOpen,
        setIsCVOpen,
        isContactOpen,
        setIsContactOpen,
        files,
        setFiles,
        successfullySentContactForm,
        setSuccessfullySentContactForm,
        successfullySentUploadCV,
        setSuccessfullySentUploadCV,
      }}
    >
      {children}
    </MobilePageNavButtonContext.Provider>
  );
}

export const useMobilePageNavButtonContext =
  (): MobilePageNavButtonContextProps => {
    const context = useContext(MobilePageNavButtonContext);

    if (!context) {
      throw new Error(
        "useMobilePageNavButtonContext must be used within a MobilePageNavButtonProvider",
      );
    }

    return context;
  };
