export default function Footer() {
  return (
    <footer className="flex flex-col px-8 py-8 gap-8 text-ic8 leading-7 tracking-widest justify-between w-full md:flex-row md:w-5/6 max-w-screen-xl min-w-20 md:mx-auto md:px-0 xl:w-4/5 xl:flex-row xl:mt-4 landscape:mt-12">
      <section>
        <p className="hidden xl:inline">
          Copyright &#169; 2024 IC8 Ltd. All rights reserved.
        </p>
        <p className="xl:hidden">
          Copyright &#169; 2024 IC8 Ltd.
          <br /> All rights reserved.
        </p>
      </section>
      <section className="flex flex-col md:flex-row md:justify-between md:gap-8 text-ic8">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </section>
    </footer>
  );
}
