import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import MobilePageNavButton from "../MobilePageNavButton";

export default function Header() {
  return (
    <>
      <header className="md:w-5/5 sticky top-0 z-10 m-auto flex w-full min-w-20 flex-col justify-between bg-black text-lg text-ic8 md:max-w-screen-xl md:flex-row xl:w-4/5 landscape:sm:flex-row landscape:sm:justify-center">
        <nav className="flex w-full flex-wrap items-center justify-between bg-black p-6 md:bg-black">
          <div className="flex flex-shrink-0 items-center text-white">
            <Link href="#/">
              <div className="relative mx-auto h-10 w-24 md:h-14 md:w-32 xl:mx-0 xl:ml-[-4.25rem] xl:h-20 xl:w-48">
                <Image
                  src={"/main-logo.png"}
                  alt="IC8 Logo is gold in color, features the word ic8 and has an icon that uses a combination of the 8, i and C"
                  fill={true}
                  sizes="w-48"
                />
              </div>
            </Link>
          </div>
          <MobilePageNavButton />
        </nav>
      </header>
      {/* ALWAYS ON CONTACT US */}

      {/* ALWAYS ON SOCIAL MEDIA */}
      <aside className="sticky left-[85%] top-[80%] z-50 w-fit md:top-[82.5%]">
        <a target="_blank" href="https://www.linkedin.com/company/ic8/">
          <div className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full border border-input bg-black fill-ic8 text-lg font-medium ring-offset-background transition-colors hover:bg-white hover:fill-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="22"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </div>
        </a>
      </aside>
    </>
  );
}
