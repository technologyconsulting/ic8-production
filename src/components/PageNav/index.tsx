"use client";

import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PageNav() {
  const pathname = usePathname();
  const { setIsOpen, isCVOpen, setIsCVOpen } = useMobilePageNavButtonContext();

  return (
    <nav className="flex w-full flex-wrap justify-end md:justify-center lg:justify-center xl:h-16">
      <ul className="flex flex-col pr-8 md:flex-row md:pr-0">
        <Link
          href="/#/"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li className="mt-8 flex h-16 items-center justify-end text-lg uppercase md:mx-4 md:mt-2 xl:mx-0 xl:px-8  ">
            <p className="after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2">
              HOME
            </p>
          </li>
        </Link>
        <Link
          href="/#people"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li className="scroll={false} mt-2 flex h-16 items-center justify-end text-lg uppercase md:mx-4 xl:mx-0  xl:px-8">
            <p className="after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2">
              PEOPLE
            </p>
          </li>
        </Link>
        <Link
          href="/#services"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li className="scroll={false} mt-2 flex h-16 items-center justify-end text-lg uppercase md:mx-4 xl:mx-0  xl:px-8">
            <p className="after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2">
              SERVICES
            </p>
          </li>
        </Link>
        <Link
          href="/#about"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li className="scroll={false} mt-2 flex h-16 items-center justify-end text-lg uppercase md:mx-4 xl:mx-0  xl:px-8">
            <p className="after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2">
              ABOUT
            </p>
          </li>
        </Link>
        <Link
          href=""
          onClick={() => {
            setIsOpen(false), setIsCVOpen(true);
          }}
        >
          <li className="scroll={false} mt-2 flex h-16 items-center justify-end text-lg uppercase md:mx-4 xl:mx-0  xl:px-8">
            <p className="after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2">
              UPLOAD CV
            </p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
