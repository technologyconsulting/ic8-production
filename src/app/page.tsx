import Image from "next/image";

import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="grow flex flex-col w-full min-w-20 m-auto text-ic8 bg-black xl:w-4/5 xl:max-w-screen-xl">
      {/* HERO */}
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
        <p className="px-4 text-center text-white opacity-60 xl:px-0 md:text-3xl md:w-[40rem] md:mx-auto xl:w-[45rem] xl:text-left xl:mx-0 landscape:sm:w-3/5 landscape:sm:my-auto landscape:md:w-[40rem] landscape:md:my-0">
          We value openness, honesty, transparency, communication and
          collaboration as the pillars of our company culture. We work as a team
          and we treat our clients and candidates as partners. We are always
          learning and growing, looking for opportunities to innovate and
          improve.
        </p>
      </section>
      {/* PEOPLE */}
      <section className="xl:h-[calc(100vh-102px)] flex flex-col gap-16 w-full max-w-screen-xl min-w-20 m-auto text-ic8 bg-black md:gap-4 landscape:mt-12 landscape:md:m-auto landscape:gap-0">
        {/* TITLE */}
        <h2
          id="people"
          className="scroll-mt-40 w-fit mx-auto text-2xl md:text-3xl xl:text-4xl font-bold xl:scroll-mt-28"
        >
          PEOPLE
        </h2>
        {/* SPENCER SHALKA */}
        <section className="flex flex-col gap-12 md:items-center md:gap-0 xl:flex-row lg:my-12 xl:h-2/5 xl:my-0 xl:mt-12 xl:bg-neutral-950 xl:drop-shadow-ic8 xl:gap-8 xl:border-none xl:rounded-s-full landscape:gap-0 landscape:md:gap-12">
          {/* NAME & IMAGE */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 xl:flex-row xl:w-3/6 h-56 xl:bg-black xl:border-none xl:rounded-e-full xl:justify-between xl:rounded-l-xl landscape:flex-row">
            <div className="flex flex-col justify-center w-full md:text-right md:mt-4 xl:w-3/5 text-center xl:text-right landscape:sm:w-2/4 landscape:sm:text-right ">
              <h1 className="text-4xl text-white font-bold xl:text-6xl landscape:text-4xl">
                Spencer
              </h1>
              <h2 className="text-2xl xl:text-4xl text-white font-bold landscape:text-2xl">
                Shalka
              </h2>
              <h1 className="text-4xl xl:text-6xl font-bold landscape:text-4xl">
                Co-Founder
              </h1>
            </div>
            <div className="flex justify-center w-2/5 mx-auto mt-8 md:w-3/5 xl:mt-0 xl:w-48 xl:mx-0 xl:mr-4 landscape:sm:w-1/6 landscape:sm:mx-8 landscape:sm:mt-0 landscape:md:w-2/5">
              <Image
                src="/spencer1SS.svg"
                alt="Picture of Spencer Shalka, Co-founder of IC8"
                width={237}
                height={230}
              />
            </div>
          </div>
          {/* BIO */}
          <div className="flex justify-center md:w-4/6 md:bg-neutral-950 md:p-10 md:rounded-3xl xl:w-3/6 xl:mr-8 xl:rounded-3xl">
            <p className="h-fit mx-4 mt-8 text-white opacity-60 leading-7 tracking-widest text-center xl:text-left xl:m-auto xl:text-lg landscape:text-base landscape:sm:mt-0 landscape:md:mt-4">
              {/* An experienced and talented Resource Manager with an exceptional
              ability to work at pace to meet tight deadlines. Proven experience
              in recruiting, onboarding, and managing large teams of contingent
              workers predominately in the IT/Technology sector within a
              multitude of industries. Strong team player working to achieve
              collaborative success while equally motivated to achieve
              individual goals. */}
              {/* Spencer has over 25 years of recruiting expertise in the
              IT/Technology sector. He specialises in finding and hiring
              contingent labour for complex projects. He has assembled project
              teams for consulting organisations on several high-profile
              Business Change and Transformation programmes. As a result, he has
              developed a reputation for delivering quality results within tight
              timescales and has built a trusted network of associates. In his
              downtime Spencer enjoys playing pool, attending car meets,
              spending time with family, including his dogs and supporting
              Arsenal for which we forgive him. */}
              Spencer has over 25 years of experience in IT/Technology
              recruitment, specialising in hiring contingent labour for complex
              projects. He has assembled project teams for consulting
              organisations on high-profile business change and transformation
              programs, delivering quality results within tight timescales. In
              his downtime, he enjoys playing pool, attending car meets,
              spending time with family, including his dogs, and supporting
              Arsenal for which we forgive him.
            </p>
          </div>
        </section>
        {/* TIM HATHAWAY */}
        <section className="flex flex-col-reverse mt-8 md:items-center xl:flex-row lg:my-12 xl:h-2/5 xl:my-0 xl:mb-12 xl:bg-neutral-950 xl:drop-shadow-ic8 xl:gap-8 xl:border-none xl:rounded-e-full landscape:mt-8 landscape:gap-0 landscape:md:gap-12">
          {/* BIO */}
          <div className="flex justify-center md:w-4/6 md:bg-neutral-950 md:p-10 md:rounded-3xl xl:w-3/6 xl:ml-8 xl:rounded-3xl">
            <p className="h-fit mx-4 mt-8 text-white opacity-60 leading-7 tracking-widest text-center xl:text-left xl:m-auto xl:text-lg landscape:text-base landscape:sm:mt-0 landscape:md:mt-8">
              {/* A commercially astute IT professional with over 20 years’
              experience of operations, Programme delivery and business growth.
              Always leading by example, setting high standards of performance
              and delivering on measured financial, customer and employee
              satisfaction by maintaining good relationships and leading
              collaborative teamwork in cross-functional teams.  */}
              A commercially astute IT professional with over 20 years’
              experience of operations, programme delivery and business growth.
              Always leading by example, setting high standards of performance
              and delivering on measured financial, customer and employee
              satisfaction collaborative cross-functional teams.
            </p>
          </div>
          {/* NAME & IMAGE */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12 xl:flex-row xl:w-3/6 h-56 xl:bg-black xl:border-none xl:rounded-s-full xl:rounded-e-2xl xl:justify-between landscape:flex-row landscape:justify-end">
            <div className="flex justify-center w-2/5 mx-auto mt-8 md:w-3/5 xl:mt-0 xl:w-48 xl:mx-0 xl:ml-4 landscape:sm:w-1/6 landscape:sm:mx-8 landscape:sm:mt-0 landscape:md:w-2/5">
              <Image
                src="/tim1TH.svg"
                alt="Picture of Tim Hathaway, Co-founder of IC8"
                width={237}
                height={230}
              />
            </div>
            <div className="flex flex-col justify-center w-full md:text-left md:mt-4 xl:w-3/5 text-center xl:text-left xl:ml-8 landscape:sm:w-2/4 landscape:sm:text-left">
              <h1 className="text-4xl xl:text-6xl text-white font-bold landscape:text-4xl">
                Tim
              </h1>
              <h2 className="text-2xl xl:text-4xl text-white font-bold landscape:text-2xl">
                Hathaway
              </h2>
              <h1 className="text-4xl xl:text-6xl font-bold landscape:text-4xl">
                Co-Founder
              </h1>
            </div>
          </div>
        </section>
      </section>
      {/* ABOUT & CONTACT US */}
      <section className="xl:h-[calc(100vh)] flex flex-col xl:flex-row justify-center items-center w-full px-8 text-centermax-w-screen-xl min-w-20 m-auto text-ic8 bg-black md:w-4/5 xl:w-full xl:px-0">
        {/* ABOUT */}
        <section className="w-full xl:w-3/5 h-full xl:mr-16 pt-24 ">
          {/* TITLE */}
          <h2
            id="about"
            className="scroll-mt-40 text-center xl:text-left text-4xl font-bold xl:mb-24 xl:scroll-mt-28"
          >
            About
          </h2>
          <p className="text-white opacity-60 leading-7 tracking-wide text-center md:w-5/5 md:m-auto md:bg-neutral-950 md:p-10 md:rounded-3xl md:drop-shadow-ic8 xl:w-full xl:text-left my-8 md:mb-8 md:mt-20 xl:my-8 xl:text-md xl:bg-neutral-950 xl:drop-shadow-ic8 xl:p-4">
            We are IC8, a new IT Recruitment and Consultancy company born out of
            a shared vision among ex-colleagues and friends. We have a strong
            bond of respect and trust that stems from working together in
            different IT organisations and roles. We have seen each other thrive
            in our careers, and we want to share our passion and expertise with
            our clients and candidates.
          </p>
          <p className="text-ic8 leading-7 tracking-wide text-center md:w-4/5 md:m-auto xl:text-left font-bold my-8 xl:w-full xl:text-md xl:p-4">
            We have the same collective vision of what a great IT recruitment
            and services company should be: one that is driven by passion,
            excellence, innovation and transparency. That is why we decided to
            start our own company, where we can use our expertise and insights
            to help our clients and candidates achieve their goals and overcome
            their challenges.
          </p>
          <p className="text-white opacity-60 leading-7 tracking-wide text-center md:w-5/5 md:m-auto md:bg-neutral-950 md:p-10 md:rounded-3xl md:drop-shadow-ic8 xl:w-full xl:text-left my-8 xl:text-md xl:bg-neutral-950 xl:drop-shadow-ic8 xl:p-4">
            We offer IT recruitment services to help our clients find the best
            talent for their projects and to help our candidates find their next
            ideal role. We also provide IT consultancy services to help our
            clients optimise their processes, systems, and strategies. We value
            openness, honesty, transparency, communication and collaboration as
            the pillars of our company culture. We work as a team and we treat
            our clients and candidates as partners. We are always learning and
            growing, looking for opportunities to innovate and improve.
          </p>
        </section>
        {/* CONTACT US */}
        <section className="w-full xl:w-2/5 h-full xl:ml-16 pt-12 xl:pt-24 ">
          {/* TITLE */}
          <h2 className="text-center xl:text-left text-4xl font-bold xl:mb-24">
            Contact Us
          </h2>
          <ContactUs />
        </section>
      </section>
    </main>
  );
}
