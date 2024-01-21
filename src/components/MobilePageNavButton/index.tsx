"use client";
import { useMobilePageNavButtonContext } from "@/lib/MobilePageNavContext";
import useWindowDimensions from "@/lib/useWindowDimensions";

import PageNav from "../(Header)/PageNav";

export default function MobilePageNavButton() {
  const { isOpen, setIsOpen } = useMobilePageNavButtonContext();
  const { width, height } = useWindowDimensions();
  const handleMenuToggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className="block md:hidden">
        <button
          className="flex items-center rounded border border-white px-3 py-2 text-white hover:border-white hover:text-white"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={` ${
          isOpen || (width !== undefined && width >= 768) ? "h-fit" : "h-0"
        } lg:w-auto"> <div className=" block w-full flex-grow md:mt-4 md:w-fit lg:flex
        lg:flex-grow lg:items-center xl:mt-2`}
      >
        {isOpen || (width !== undefined && width >= 768) ? <PageNav /> : null}
      </div>
      <div className=" lg:flex-grow">
        <section className="hidden md:hidden lg:flex xl:w-1/5">
          <a href="mailto:info@ic8.co.uk">
            <p className=" mt-4 text-lg after:block after:scale-x-0 after:transform after:border-b-2 after:border-b-ic8 after:py-2 after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 hover:after:py-2 lg:mt-2 xl:mt-6 landscape:lg:mt-6 ">
              <span className="uppercase">INFO@IC8.CO.UK</span>
            </p>
          </a>
        </section>
      </div>
    </>
  );
}
