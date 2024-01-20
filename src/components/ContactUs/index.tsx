"use client";
import ContactForm from "../ContactForm";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";

export function ContactUs() {
  const { isContactOpen, setIsContactOpen, setSuccessfullySentContactForm } =
    useMobilePageNavButtonContext();
  return (
    <>
      <aside
        className={` ${isContactOpen ? "animate-slide-out" : "right-[-100vw]"} fixed top-0 z-30 h-full w-full bg-black lg:w-4/6 `}
      >
        <section className="z-30 flex h-full w-full items-center justify-center md:flex-nowrap">
          <section className="flex max-h-[90%] w-5/6 flex-col overflow-auto md:max-h-full md:flex-row md:gap-8">
            <section className="w-full">
              <h2
                id="contact-us"
                className="scroll-mt-40 text-center text-2xl font-bold text-ic8 xl:mb-12 xl:scroll-mt-28 xl:text-left"
              >
                CONTACT FORM
              </h2>
              <ContactForm />
            </section>
            <section className="w-full ">
              <h2
                id="contact-us"
                className="scroll-mt-40 text-center text-2xl font-bold text-ic8 xl:mb-12 xl:scroll-mt-28 xl:text-left"
              >
                CONTACT DETAILS
              </h2>
              <section className="mt-8 text-white">
                <a href="mailto:info@ic8.co.uk">
                  <p className="mb-4 border-l-2 border-ic8 bg-neutral-950 p-8">
                    <span className="text-ic8">Email Address:</span> <br />
                    info@ic8.co.uk
                  </p>
                </a>
                <a href="tel:00441234123456">
                  <p className="mb-4 border-l-2 border-ic8 bg-neutral-950 p-8">
                    <span className="text-ic8">Telephone:</span> <br />
                    +44 (0)1234 123456{" "}
                  </p>
                </a>
                <p className="mb-4 border-l-2 border-ic8 bg-neutral-950 p-8">
                  <span className="text-ic8">Address:</span> <br />
                  29 Highfield Road, Billericay, <br />
                  Essex, CM11 2PE
                </p>
                <p className="border-l-2 border-ic8 bg-neutral-950 p-8">
                  <span className="text-ic8">Company No:</span> <br />
                  15370951
                </p>
              </section>
            </section>
          </section>
        </section>
      </aside>
      <button
        type="button"
        className="relative z-50"
        onClick={() => {
          setIsContactOpen((current) => !current);
          setSuccessfullySentContactForm(false);
        }}
      >
        {isContactOpen ? (
          <XMarkIcon className="hover:-black inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full border border-input bg-black p-1 text-ic8 ring-offset-background  transition-colors hover:bg-white hover:text-black" />
        ) : (
          <EnvelopeIcon className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full border border-input bg-black  p-1  text-ic8 ring-offset-background transition-colors hover:bg-white hover:fill-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        )}
      </button>
    </>
  );
}
