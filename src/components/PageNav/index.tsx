"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PageNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center xl:h-16 ">
      <ul className="flex">
        <Link href="/" scroll={false}>
          <li className="px-6 xl:px-8 ">
            <p
              className={
                pathname === "/"
                  ? "py-4 border-b-2 border-white"
                  : "py-4 text-lg uppercase after:block after:content-[''] after:border-b-2 after:border-b-ic8 after:scale-x-0 after:transform after:duration-200 after:ease-in-out after:py-2 hover:after:scale-x-100 hover:after:py-2"
              }
            >
              HOME
            </p>
          </li>
        </Link>
        <Link href="#people">
          <li className="px-6 xl:px-8 scroll={false}">
            <p
              className={
                pathname === "/#people"
                  ? "py-4 border-b-2 border-white"
                  : "py-4 text-lg uppercase after:block after:content-[''] after:border-b-2 after:border-b-ic8 after:scale-x-0 after:transform after:duration-200 after:ease-in-out after:py-2 hover:after:scale-x-100 hover:after:py-2"
              }
            >
              PEOPLE
            </p>
          </li>
        </Link>
        <Link href="#about">
          <li className="px-6 xl:px-8 scroll={false}">
            <p
              className={
                pathname === "/#about"
                  ? "py-4 border-b-2 border-white"
                  : "py-4 text-lg uppercase after:block after:content-[''] after:border-b-2 after:border-b-ic8 after:scale-x-0 after:transform after:duration-200 after:ease-in-out after:py-2 hover:after:scale-x-100 hover:after:py-2"
              }
            >
              ABOUT
            </p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
