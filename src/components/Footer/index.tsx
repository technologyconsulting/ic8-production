import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-12 flex w-full min-w-20 max-w-screen-xl flex-col justify-between gap-8 px-8 py-8 leading-7 tracking-widest text-ic8 md:mx-auto md:w-5/6 md:flex-row md:px-0 xl:mt-4 xl:w-4/5 xl:flex-row landscape:mt-12">
      <section>
        <p className="hidden xl:inline">
          Copyright &#169; 2024 IC8 Ltd. All rights reserved.
        </p>
        <p className="xl:hidden">
          Copyright &#169; 2024 IC8 Ltd.
          <br /> All rights reserved.
        </p>
      </section>
      <section className="flex flex-col text-ic8 md:flex-row md:justify-between md:gap-8">
        <p>Privacy Policy</p>
        <Link href="/terms-of-use">
          <p>Terms of use</p>
        </Link>
      </section>
    </footer>
  );
}
