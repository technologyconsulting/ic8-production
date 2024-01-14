import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Image from "next/image";

import PageNav from "@/components/PageNav";

export default function Header() {
  return (
    <header className="flex flex-col justify-between w-full min-w-20 m-auto text-lg text-ic8 md:w-5/5 md:flex-row md:max-w-screen-xl xl:w-4/5 ">
      <section className="flex md:w-2/6 xl:w-1/5">
        <div className="relative w-20 h-10 mx-auto mt-4 md:w-28 md:h-14 xl:w-40 xl:h-20 xl:mx-0 xl:ml-[-1.5rem]">
          <Image
            src={"/main-logo.png"}
            alt="IC8 Logo is gold in color, features the word ic8 and has an icon that uses a combination of the 8, i and C"
            // width={260}
            // height={104.25}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="flex items-center md:w-3/6 md:mt-4 xl:w-3/5 xl:pt-2">
        <PageNav />
      </section>
      <section className="flex justify-center md:w-2/6 xl:w-1/5">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                rootBox: "flex pr-4",
                avatarBox: "w-12 h-12",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton mode="modal">
            <button className="py-1 xl:w-80 xl:py-2">
              <p className="mb-12 xl:mb-0 text-lg uppercase after:block after:content-[''] after:border-b-2 after:border-b-ic8 after:scale-x-0 after:transform after:duration-200 after:ease-in-out after:py-2 hover:after:scale-x-100 hover:after:py-2 md:mb-0 md:mt-4 xl:pt-6 xl:align-middle">
                Client Portal
              </p>
            </button>
          </SignInButton>
        </SignedOut>
      </section>
    </header>
  );
}
