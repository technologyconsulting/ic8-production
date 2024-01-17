import Image from "next/image";

import ContactUs from "@/components/ContactUs";

export default function ComingSoon() {
  return (
    <main className="grow flex flex-col w-full min-w-20 m-auto text-ic8 bg-black xl:w-4/5 xl:max-w-screen-xl">
      {/* COMING SOON */}
      <section
        id="/"
        className="scroll-mt-40 h-[calc(100vh-134px)] md:h-[calc(100vh-94px)] xl:h-[calc(100vh-105px)] flex flex-col justify-center md:justify-center xl:scroll-mt-28 landscape:sm:flex-row landscape:sm:h-100vh landscape:md:flex-col"
      >
        {/* ABOVE THE LINE */}
        <section className="flex flex-col w-5/6 mx-auto border-b-2 pb-8 border-ic8 mb-8 tracking-[.25rem] md:w-fit xl:w-fit xl:mx-0 landscape:sm:w-3/5 landscape:sm:justify-center landscape:sm:border-r-2 landscape:sm:border-b-0  landscape:md:w-fit landscape:md:border-r-0 landscape:md:border-b-2">
          <h1 className="text-center  text-white text-3xl font-bold md:text-6xl xl:text-8xl">
            IT Recruitment
          </h1>
          <h1 className="text-center  text-white text-3xl font-bold md:text-6xl xl:text-8xl">
            & Consultancy
          </h1>
        </section>
        {/* BELWO THE LINE */}
        <section className="flex flex-col w-5/6 mx-auto pb-8 mb-8 tracking-[.25rem] md:w-fit xl:w-fit xl:mx-0 landscape:sm:w-3/5 landscape:sm:justify-center landscape:md:w-fit">
          <h1 className="text-center  text-white text-3xl font-bold md:text-6xl xl:text-8xl">
            Coming soon...
          </h1>
        </section>
      </section>
    </main>
  );
}
