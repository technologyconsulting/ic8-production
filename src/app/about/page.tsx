import Image from "next/image";

export default function Home() {
  return (
    <main className="grow flex justify-center  items-center w-3/5 max-w-screen-xl min-w-20 m-auto text-ic8 bg-black">
      <section className="w-3/5 h-full mr-16 pt-24">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="text-white leading-7 tracking-widest text-left my-8">
          We are IC8, a new IT Recruitment and Consultancy company born out of a
          shared vision among ex-colleagues and friends. We have a strong bond
          of respect and trust that stems from working together in different IT
          organisations and roles. We have seen each other thrive in our
          careers, and we want to share our passion and expertise with our
          clients and candidates.
        </p>
        <p className="text-ic8 leading-7 tracking-widest text-left font-bold my-8">
          We have the same collective vision of what a great IT recruitment and
          services company should be: one that is driven by passion, excellence,
          innovation and transparency. That is why we decided to start our own
          company, where we can use our expertise and insights to help our
          clients and candidates achieve their goals and overcome their
          challenges.
        </p>
        <p className="text-white leading-7 tracking-widest text-left my-8">
          We offer IT recruitment services to help our clients find the best
          talent for their projects and to help our candidates find their next
          ideal role. We also provide IT consultancy services to help our
          clients optimise their processes, systems, and strategies. We value
          openness, honesty, transparency, communication and collaboration as
          the pillars of our company culture. We work as a team and we treat our
          clients and candidates as partners. We are always learning and
          growing, and we are always looking for new opportunities to
          innovate and improve.
        </p>
      </section>
      <section className="w-2/5 h-full ml-16 pt-24">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <div className="h-full w-90 leading-7 tracking-widest">
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
                className="w-full bg-black"
              />
            </div>
            <div className="w-full my-8 py-1 border-b-2 border-ic8">
              <input
                type="text"
                name=""
                id=""
                placeholder="Lastname"
                className="w-full bg-black"
              />
            </div>
            <div className="w-full my-8 py-1 border-b-2 border-ic8">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="w-full bg-black"
              />
            </div>
            <div className="flex flex-col items-center w-full h-full mt-16 p-4 border-2 border-dashed border-ic8">
              <label htmlFor="cv_uploads" className="cursor-pointer mb-4">
                Drop CV here
              </label>
              <p className="text-white">OR</p>
              <input
                type="file"
                name="cv_uploads"
                id="cv_uploads"
                multiple
                accept=".doc, .docx, .pdf"
                className="mt-3 p-2  file:bg-ic8 file:rounded-full file:text-white file:px-4 file:py-2 file:font-bold file:mr-4"
              />
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
    </main>
  );
}
