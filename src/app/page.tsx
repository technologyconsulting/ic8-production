import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="grow flex flex-col w-full min-w-20 m-auto text-ic8 bg-black xl:w-4/5 xl:max-w-screen-xl">
      <section className="h-[calc(100vh-236px)] md:h-[calc(100vh-94px)] xl:h-[calc(100vh-105px)] flex flex-col md:justify-center">
        <section className="w-5/6 mx-auto border-b-2 pb-8 border-ic8 mb-8 tracking-[.25rem] md:w-fit xl:w-fit xl:mx-0">
          <h1 className="text-center text-white text-3xl font-bold md:text-6xl xl:text-8xl">
            IT Recruitment
          </h1>
          <h1 className="text-center text-white text-3xl font-bold md:text-6xl xl:text-8xl">
            & Consultancy
          </h1>
        </section>
        <p className="px-4 text-center text-white xl:px-0 md:text-3xl md:w-[40rem] md:mx-auto xl:w-[45rem] xl:text-left xl:mx-0">
          We value openness, honesty, transparency, communication and
          collaboration as the pillars of our company culture. We work as a team
          and we treat our clients and candidates as partners. We are always
          learning and growing, and we are always looking for new opportunities
          to innovate and improve.
        </p>
      </section>
      <section className="xl:h-[calc(100vh)] flex flex-col gap-16 w-full max-w-screen-xl min-w-20 m-auto text-ic8 bg-black">
        <h2
          id="people"
          className="w-fit mx-auto text-2xl md:text-3xl xl:text-4xl font-bold"
        >
          PEOPLE
        </h2>
        <section className="flex flex-col md:items-center xl:flex-row lg:my-12 xl:h-2/5 xl:my-0 xl:mt-12">
          <div className="flex flex-col justify-center w-full xl:w-2/5 text-center xl:text-right xl:mr-8 ">
            <h1 className="text-4xl xl:text-6xl text-white font-bold">
              Spencer
            </h1>
            <h2 className="text-2xl xl:text-4xl text-white font-bold">
              Shalka
            </h2>
            <h1 className="text-4xl xl:text-6xl font-bold">Co-Founder</h1>
          </div>
          <div className="flex justify-center w-3/5 mx-auto mt-8 xl:mt-0 xl:w-1/5">
            <Image
              src="/spencer1SS.svg"
              alt="Picture of Spencer Shalka, Co-founder of IC8"
              width={237}
              height={230}
            />
          </div>
          <div className="flex justify-center md:w-5/6  xl:w-2/5 xl:ml-8">
            <p className="h-fit mx-4 mt-8 text-white leading-7 tracking-widest text-center xl:text-left xl:m-auto xl:text-lg">
              An experienced and talented Resource Manager with an exceptional
              ability to work at pace to meet tight deadlines. Proven experience
              in recruiting, onboarding, and managing large teams of contingent
              workers predominately in the IT/Technology sector within a
              multitude of industries. Strong team player working to achieve
              collaborative success while equally motivated to achieve
              individual goals.
            </p>
          </div>
        </section>
        <section className="flex flex-col-reverse md:items-center xl:flex-row lg:my-12 xl:h-2/5 xl:my-0 xl:mb-12">
          <div className="flex justify-center md:w-5/6 xl:w-2/5 xl:mr-8">
            <p className="h-fit mx-4 mt-8 text-white leading-7 tracking-widest text-center xl:text-left xl:m-auto xl:text-lg">
              A commercially astute IT professional with over 20 years’
              experience of operations, Programme delivery and business growth.
              Always leading by example, setting high standards of performance
              and delivering on measured financial, customer and employee
              satisfaction by maintaining good relationships and leading
              collaborative teamwork in cross-functional teams.
            </p>
          </div>
          <div className="flex justify-center w-3/5 mx-auto mt-8 xl:mt-0 xl:w-1/5">
            <Image
              src="/tim1TH.svg"
              alt="Picture of Tim Hathaway, Co-founder of IC8"
              width={237}
              height={230}
            />
          </div>
          <div className="flex flex-col justify-center w-full xl:w-2/5 text-center xl:text-left xl:ml-8">
            <h1 className="text-4xl xl:text-6xl text-white font-bold">Tim</h1>
            <h2 className="text-2xl xl:text-4xl text-white font-bold">
              Hathaway
            </h2>
            <h1 className="text-4xl xl:text-6xl font-bold">Co-Founder</h1>
          </div>
        </section>
      </section>
      <section className="xl:h-[calc(100vh-105px)] flex flex-col xl:flex-row justify-center items-center w-full px-8 xl:px-0 text-centermax-w-screen-xl min-w-20 m-auto text-ic8 bg-black">
        <section className="w-full xl:w-3/5 h-full xl:mr-16 pt-24">
          <h2
            id="about"
            className="text-center xl:text-left text-4xl font-bold xl:mb-24"
          >
            About
          </h2>
          <p className="text-white leading-7 tracking-wide text-center xl:text-left my-8 md:mb-8 md:mt-20 xl:my-8 xl:text-md">
            We are IC8, a new IT Recruitment and Consultancy company born out of
            a shared vision among ex-colleagues and friends. We have a strong
            bond of respect and trust that stems from working together in
            different IT organisations and roles. We have seen each other thrive
            in our careers, and we want to share our passion and expertise with
            our clients and candidates.
          </p>
          <p className="text-ic8 leading-7 tracking-wide text-center xl:text-left font-bold my-8 xl:text-md">
            We have the same collective vision of what a great IT recruitment
            and services company should be: one that is driven by passion,
            excellence, innovation and transparency. That is why we decided to
            start our own company, where we can use our expertise and insights
            to help our clients and candidates achieve their goals and overcome
            their challenges.
          </p>
          <p className="text-white leading-7 tracking-wide text-center xl:text-left my-8 xl:text-md">
            We offer IT recruitment services to help our clients find the best
            talent for their projects and to help our candidates find their next
            ideal role. We also provide IT consultancy services to help our
            clients optimise their processes, systems, and strategies. We value
            openness, honesty, transparency, communication and collaboration as
            the pillars of our company culture. We work as a team and we treat
            our clients and candidates as partners. We are always learning and
            growing, and we are always looking for new opportunities to
            innovate and improve.
          </p>
        </section>
        <section className="w-full xl:w-2/5 h-full xl:ml-16 pt-12 xl:pt-24">
          <h2 className="text-center xl:text-left text-4xl font-bold xl:mb-24">
            Contact Us
          </h2>
          <div className="h-full w-90 leading-7 tracking-widest md:mt-20 xl:mt-0">
            <form action="" method="post">
              <div className="flex justify-between mt-8">
                <div className="flex items-center gap-4 w-1/2">
                  <input
                    type="radio"
                    name=""
                    id=""
                    checked
                    className="w-4 h-4 accent-ic8"
                  />
                  <label htmlFor="">Candidate</label>
                </div>
                <div className="flex items-center gap-4 w-1/2">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="w-4 h-4 accent-ic8"
                  />
                  <label htmlFor="">Client</label>
                </div>
              </div>
              <div className="w-full my-8 py-1 border-b-2 border-ic8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Firstname"
                  className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
                />
              </div>
              <div className="w-full my-8 py-1 border-b-2 border-ic8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Lastname"
                  className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
                />
              </div>
              <div className="w-full my-8 py-1 border-b-2 border-ic8">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="border-box w-full h-12 bg-black pl-2 focus:border-l-2 focus:border-ic8 focus:outline-none"
                />
              </div>
              {/* <div className="flex flex-col items-center w-full h-full mt-8 xl:mt-16 p-4 xl:border-2 border-dashed border-ic8">
                <label
                  htmlFor="cv_uploads"
                  className="cursor-pointer mb-4 xl:hidden"
                >
                  Upload CV here
                </label>
                <label
                  htmlFor="cv_uploads"
                  className="cursor-pointer mb-4 hidden xl:block"
                >
                  Drop CV here
                </label>
                <p className="hidden text-white xl:inline">OR</p>
                <input
                  type="file"
                  name="cv_uploads"
                  id="cv_uploads"
                  multiple
                  accept=".doc, .docx, .pdf"
                  className="mt-3 p-2 file:w-full  xl:file:w-36 file:bg-ic8 file:rounded-full file:border-none file:text-white file:px-4 file:py-3 xl:file:py-2 file:font-bold file:mr-4"
                />
              </div> */}
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-ic8"
                >
                  Upload CV
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-ic8 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-white">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-black font-semibold text-ic8 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-white">
                      DOC, DOCX, PDF up to 2MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full my-8 py-3 bg-ic8 rounded-full text-white text-xl font-bold "
              >
                <p>SUBMIT</p>
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
