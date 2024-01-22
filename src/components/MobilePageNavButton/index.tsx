"use client";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";
import useWindowDimensions from "@/lib/useWindowDimensions";

import PageNav from "../PageNav";

export default function MobilePageNavButton() {
  const { isOpen, setIsOpen } = useMobilePageNavButtonContext();
  const { width, height } = useWindowDimensions();
  const handleMenuToggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className="z-20 block md:hidden">
        <button
          className="flex items-center rounded px-3 py-2 text-white hover:border-white hover:text-white"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="5 10 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 12h20v2H0V3zm0 8h30v2H0V9zm0 8h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={` ${
          isOpen || (width !== undefined && width >= 768)
            ? "animate-slide-lr h-[100svh] w-full bg-black pt-20 md:h-fit md:w-5/6 md:animate-none md:pt-0"
            : "right-[-100vw]"
        } absolute right-0 top-0 flex`}
      >
        <div className="flex w-full md:mt-6 lg:flex lg:w-4/6 lg:flex-grow lg:items-center xl:mt-8 xl:w-5/6">
          {isOpen || (width !== undefined && width >= 768) ? <PageNav /> : null}
        </div>

        <div className="hidden md:hidden lg:mt-6 lg:flex lg:w-1/6 lg:flex-grow lg:items-center xl:mt-10">
          <section className="hidden md:hidden lg:flex xl:w-1/5">
            <a href="mailto:info@ic8.co.uk">
              <p className="mt-2 text-lg after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2 lg:mt-2 landscape:lg:mt-2 ">
                <span className="uppercase">INFO@IC8.CO.UK</span>
              </p>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
