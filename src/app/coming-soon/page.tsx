import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";

import ContactUs from "@/components/UploadCV";

export default function ComingSoon() {
  return (
    <main className="m-auto flex w-full min-w-20 grow flex-col bg-black text-ic8 xl:w-4/5 xl:max-w-screen-xl">
      {/* COMING SOON */}
      <section
        id="/"
        className="landscape:sm:h-100vh flex h-[calc(100vh-134px)] scroll-mt-40 flex-col justify-center md:h-[calc(100vh-94px)] md:justify-center xl:h-[calc(100vh-105px)] xl:scroll-mt-28 landscape:sm:flex-row landscape:md:flex-col"
      >
        {/* ABOVE THE LINE */}
        <section className="mx-auto mb-8 flex w-5/6 flex-col border-b-2 border-ic8 pb-8 tracking-[.25rem] md:w-fit xl:mx-0 xl:w-fit landscape:sm:w-3/5 landscape:sm:justify-center landscape:sm:border-b-0 landscape:sm:border-r-2  landscape:md:w-fit landscape:md:border-b-2 landscape:md:border-r-0">
          <h1 className="text-center  text-3xl font-bold text-white md:text-6xl xl:text-8xl">
            IT Recruitment
          </h1>
          <h1 className="text-center  text-3xl font-bold text-white md:text-6xl xl:text-8xl">
            & Consultancy
          </h1>
        </section>
        {/* BELWO THE LINE */}
        <section className="mx-auto mb-8 flex w-5/6 flex-col pb-8 tracking-[.25rem] md:w-fit xl:mx-0 xl:w-fit landscape:sm:w-3/5 landscape:sm:justify-center landscape:md:w-fit">
          <h1 className="text-center  text-3xl font-bold text-white md:text-6xl xl:text-8xl">
            Coming soon...
          </h1>
        </section>
      </section>
      <GoogleAnalytics gaId="G-B4DSNPYYZN" />
    </main>
  );
}
