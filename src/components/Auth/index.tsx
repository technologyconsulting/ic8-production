import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Auth() {
  return (
    <section className="hidden md:flex md:justify-center md:w-2/6 xl:w-1/5">
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
          <button className="py-1 xl:w-fit xl:py-2">
            <p className="mb-12 xl:mb-0 text-lg uppercase after:block after:content-[''] after:border-b-2 after:border-b-ic8 after:scale-x-0 after:transform after:duration-200 after:ease-in-out after:py-2 hover:after:scale-x-100 hover:after:py-2 md:mb-0 md:mt-4 xl:pt-6 xl:align-middle">
              Client Portal
            </p>
          </button>
        </SignInButton>
      </SignedOut>
    </section>
  );
}
