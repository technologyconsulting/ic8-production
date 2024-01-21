import Image from "next/image";

import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative m-auto flex h-fit w-full min-w-20 flex-col bg-black text-ic8 xl:w-4/5 xl:max-w-screen-xl">
      {/* HERO */}
      <section
        id="/"
        className="landscape:sm:h-100vh flex h-[calc(100vh-88px)] scroll-mt-40 flex-col justify-center pb-40 md:justify-center xl:scroll-mt-40 landscape:sm:flex-row landscape:md:flex-col"
      >
        {/* ABOVE THE LINE */}
        <section className="mx-auto mb-8 flex w-5/6 flex-col border-b-2 border-ic8 pb-8 tracking-[.25rem] md:w-fit xl:mx-0 xl:w-fit landscape:sm:w-3/5 landscape:sm:justify-center landscape:sm:border-b-0 landscape:sm:border-r-2  landscape:md:w-fit landscape:md:border-b-2 landscape:md:border-r-0">
          <h1 className="text-center  text-3xl font-bold text-white  md:text-6xl xl:text-8xl">
            IT Recruitment
          </h1>
          <h1 className="text-center  text-3xl font-bold text-white md:text-6xl xl:text-8xl">
            & Consultancy
          </h1>
        </section>
        {/* BELWO THE LINE */}
        <p className="px-4 text-center leading-7 tracking-widest text-white text-opacity-60 md:mx-auto md:w-[40rem] md:text-2xl xl:mx-0 xl:w-[45rem] xl:px-0 xl:text-left landscape:sm:my-auto landscape:sm:w-3/5 landscape:md:my-0 landscape:md:w-[40rem] landscape:xl:w-[45rem]">
          {/* We value openness, honesty, transparency, communication and
          collaboration as the pillars of our company culture. We work as a team
          and we treat our clients and candidates as partners. We are always
          learning and growing, looking for opportunities to innovate and
          improve. */}
          <span className="text-ic8 text-opacity-100">IC8</span> is a new IT
          recruitment and consultancy company founded by ex-colleagues and
          friends who share the values of excellence, innovation and
          transparency. We offer IT recruitment and consultancy services to help
          our clients and candidates with their projects, roles, processes,
          systems and strategies. We value openness , honesty, communication and
          collaboration as our company culture.
        </p>
      </section>

      {/* PEOPLE */}
      <section className="m-auto flex min-h-fit w-full min-w-20 max-w-screen-xl flex-col gap-16 bg-black text-ic8 md:gap-4 landscape:mt-12 landscape:gap-0 landscape:md:m-auto landscape:lg:min-h-fit">
        {/* TITLE */}
        <h2
          id="people"
          className="mx-auto w-fit scroll-mt-24 text-2xl font-bold md:scroll-mt-40 md:text-3xl xl:scroll-mt-40 xl:text-4xl"
        >
          PEOPLE
        </h2>
        {/* SPENCER SHALKA */}
        <section className="flex min-h-fit flex-col gap-12 md:items-center md:gap-12 lg:my-12 xl:my-0 xl:mt-12 xl:h-fit xl:flex-row xl:gap-8 xl:rounded-s-full xl:border-none landscape:gap-0 landscape:md:gap-12">
          {/* NAME & IMAGE */}
          <div className="flex h-full flex-col md:flex-row md:items-center md:gap-12 xl:w-3/6 xl:flex-row xl:justify-between xl:gap-4 xl:rounded-e-full xl:rounded-l-xl xl:border-none xl:bg-neutral-950 xl:drop-shadow-white landscape:flex-row">
            <div className="flex w-full flex-col justify-center text-center md:mt-4 md:text-right xl:w-3/5 xl:text-right landscape:sm:w-2/4 landscape:sm:text-right ">
              <h1 className="text-4xl font-bold text-white xl:text-6xl landscape:text-4xl">
                Spencer
              </h1>
              <h2 className="text-2xl font-bold text-white xl:text-4xl landscape:text-2xl">
                Shalka
              </h2>
              <h1 className="text-4xl font-bold xl:text-3xl landscape:text-3xl">
                CO-FOUNDER
              </h1>
            </div>
            <div className="mx-auto mt-8 flex w-2/5 justify-center md:w-3/5 xl:mx-0 xl:ml-4 xl:mt-0 xl:w-48 landscape:sm:mx-8 landscape:sm:mt-0 landscape:sm:w-1/6 landscape:md:w-2/5 landscape:xl:w-48 landscape:xl:p-2">
              <Image
                src="/spencer1SS.svg"
                alt="Picture of Spencer Shalka, Co-founder of IC8"
                width={237}
                height={230}
                className="xl:ml-12"
              />
            </div>
          </div>
          {/* BIO */}
          <div className="flex justify-center md:w-4/6 md:rounded-3xl md:bg-neutral-950 md:p-10 md:drop-shadow-white xl:mr-8 xl:w-3/6 xl:rounded-3xl">
            <p className="mx-4 mt-8 h-fit text-center leading-7 tracking-widest text-white text-opacity-60 xl:m-auto xl:text-left xl:text-lg landscape:text-base landscape:sm:mt-0 landscape:md:mt-4">
              Spencer has over 25 years of experience in IT/Technology
              recruitment, specialising in hiring contingent labour for complex
              projects. He has assembled project teams for consulting
              organisations on high-profile business change and transformation
              programs, delivering quality results within tight timescales.
              <br />
              <br />
              In his downtime, he enjoys playing pool, attending car rallies,
              spending time with family, including his dogs and supporting
              Arsenal (for which we forgive him).
            </p>
          </div>
        </section>
        {/* TIM HATHAWAY */}
        <section className="mt-8 flex min-h-fit flex-col-reverse gap-12 md:items-center lg:my-12 xl:my-0 xl:mb-12 xl:h-fit xl:flex-row xl:gap-8 xl:rounded-e-full xl:border-none landscape:mt-8 landscape:gap-0 landscape:md:gap-12">
          {/* BIO */}
          <div className="flex justify-center md:w-4/6 md:rounded-3xl md:bg-neutral-950 md:p-10 md:drop-shadow-white xl:ml-8 xl:w-3/6 xl:rounded-3xl">
            <p className="mx-4 mt-8 h-fit text-center leading-7 tracking-widest text-white text-opacity-60 xl:m-auto xl:text-left xl:text-lg landscape:text-base landscape:sm:mt-0 landscape:md:mt-8">
              Tim is a commercially astute IT professional with over 20 years
              experience of operations, programme delivery and business growth.
              He leads by example, creating high performing cross-functional
              teams, setting high standards of performance and delivering on
              measured financial, customer and employee satisfaction. <br />
              <br />A father to four daughters, with babysitting duties to one
              granddaughter, alongside chairing the local Air Cadets means
              Tim&apos;s time outside the office is kept busy and colourful.
            </p>
          </div>
          {/* NAME & IMAGE */}
          <div className="flex h-full flex-col-reverse md:flex-row md:items-center md:gap-12 xl:w-3/6 xl:flex-row xl:justify-between xl:gap-4 xl:rounded-e-2xl xl:rounded-s-full xl:border-none xl:bg-neutral-950 xl:drop-shadow-white landscape:flex-row landscape:justify-end">
            <div className="mx-auto mt-8 flex w-2/5 justify-center md:w-3/5 xl:mx-0 xl:ml-4 xl:mt-0 xl:w-48 landscape:sm:mx-8 landscape:sm:mt-0 landscape:sm:w-1/6 landscape:md:w-2/5 landscape:xl:w-48 landscape:xl:p-2">
              <Image
                src="/tim1TH.svg"
                alt="Picture of Tim Hathaway, Co-founder of IC8"
                width={237}
                height={230}
                className="xl:mr-12"
              />
            </div>
            <div className="flex w-full flex-col justify-center text-center md:mt-4 md:text-left xl:ml-4 xl:w-3/5 xl:text-left landscape:sm:w-2/4 landscape:sm:text-left">
              <h1 className="text-4xl font-bold text-white xl:text-6xl landscape:text-4xl">
                Tim
              </h1>
              <h2 className="text-2xl font-bold text-white xl:text-4xl landscape:text-2xl">
                Hathaway
              </h2>
              <h1 className="text-4xl font-bold xl:text-3xl landscape:text-3xl">
                CO-FOUNDER
              </h1>
            </div>
          </div>
        </section>
      </section>
      {/* SERVICES */}
      <section className="landscape:sm:h-100vh flex flex-col justify-center md:justify-center landscape:sm:flex-row landscape:md:flex-col">
        <Services />
      </section>
      {/* ABOUT & CONTACT US */}
      <section className=" m-auto flex w-full min-w-20 max-w-screen-xl flex-col items-center justify-center bg-black bg-cover px-8 text-center text-ic8 md:w-4/5 xl:w-full xl:flex-row xl:px-0">
        {/* ABOUT */}
        <section className=" h-full w-full pt-12 xl:mr-16 xl:w-3/5">
          {/* TITLE */}
          <h2
            id="about"
            className="scroll-mt-24 text-center text-2xl font-bold md:scroll-mt-40 md:text-3xl xl:mb-24 xl:text-center"
          >
            ABOUT
          </h2>
          <p className="md:w-5/5 xl:text-md my-8 text-center leading-7 tracking-wide text-white text-opacity-60 md:m-auto md:mb-8 md:mt-20 md:rounded-3xl md:bg-neutral-950 md:p-10  md:drop-shadow-white xl:my-8 xl:w-full xl:bg-neutral-950 xl:p-16 xl:text-left xl:drop-shadow-white">
            We are <span className="text-ic8 text-opacity-100">IC8</span>, an IT
            Recruitment and Consultancy company born out of a shared vision
            among ex-colleagues and friends. With over 45 years of IT
            recruitment and programme delivery experience between the two
            founders, we understand the challenges and we know how to provide
            service excellence.
            <br />
            <br />
            We have a strong bond of respect and trust born over long careers
            that have crossed paths in different IT organisations and roles. We
            have seen each other thrive in our careers and encouraged and
            supported each other through our respective highs and lows. We want
            to share the passion we have had for our own journeys and the
            expertise that we have built up in that time, with our clients and
            candidates.
            <br />
            <br />
            Our recruitment process is designed to be efficient, effective and
            tailored to your specific needs. We understand that every client and
            every candidate is unique and we take the time to understand both
            sets of requirements and expectations to ensure the perfect fit for
            the role.
            <br />
            <br />
            Our consultancy services are focused on delivering value. We work
            with our clients to identify areas of improvement, where we provide
            them with the necessary tools and resources to achieve their goals.
            Our consultants have a wealth of experience in a variety of complex
            sectors and are dedicated to delivering results. We are committed to
            building long-term relationships with our clients and candidates. We
            believe that trust and respect are the foundation of any successful
            relationship: we strive to earn the trust and respect of everyone we
            work with.
          </p>
        </section>
      </section>
    </main>
  );
}
