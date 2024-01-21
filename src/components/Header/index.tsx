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
            <Link href="/">
              <div className="relative ml-[-2rem] h-10 w-24 md:h-14 md:w-32 lg:mx-auto xl:mx-0 xl:ml-[-4.25rem] xl:h-20 xl:w-48">
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
    </>
  );
}
