import Image from "next/image";

export default function People() {
  return (
    <main className="grow flex flex-col justify-center items-center gap-16 w-3/5 max-w-screen-xl min-w-20 m-auto text-ic8 bg-black">
      <section className="flex m-12">
        <div className="flex flex-col justify-center w-2/5 text-right mr-8">
          <h1 className="text-6xl text-white font-bold">Spencer</h1>
          <h2 className="text-4xl text-white font-bold">Shalka</h2>
          <h1 className="text-6xl font-bold">Co-Founder</h1>
        </div>
        <div className="flex justify-center w-1/5">
          <Image
            src="/spencer1SS.svg"
            alt="Picture of Spencer Shalka, Co-founder of IC8"
            width={237}
            height={230}
          />
        </div>
        <div className="flex justify-center w-2/5 ml-8">
          <p className="h-fit m-auto text-white leading-7 tracking-widest text-center">
            An experienced and talented Resource Manager with an exceptional
            ability to work at pace to meet tight deadlines. Proven experience
            in recruiting, onboarding, and managing large teams of contingent
            workers predominately in the IT/Technology sector within a multitude
            of industries. Strong team player working to achieve collaborative
            success while equally motivated to achieve individual goals.
          </p>
        </div>
      </section>
      <section className="flex m-12">
        <div className="flex justify-center  w-2/5 mr-8">
          <p className="h-min m-auto text-white leading-7 tracking-widest text-center">
            A commercially astute IT professional with over 20 years’ experience
            of operations, Programme delivery and business growth. Always
            leading by example, setting high standards of performance and
            delivering on measured financial, customer and employee satisfaction
            by maintaining good relationships and leading collaborative teamwork
            in cross-functional teams.
          </p>
        </div>
        <div className="flex justify-center w-1/5">
          <Image
            src="/tim1TH.svg"
            alt="Picture of Tim Hathaway, Co-founder of IC8"
            width={237}
            height={230}
          />
        </div>
        <div className="flex flex-col justify-center w-2/5 text-left ml-8">
          <h1 className="text-6xl text-white font-bold">Tim</h1>
          <h2 className="text-4xl text-white font-bold">Hathaway</h2>
          <h1 className="text-6xl font-bold">Co-Founder</h1>
        </div>
      </section>
    </main>
  );
}
