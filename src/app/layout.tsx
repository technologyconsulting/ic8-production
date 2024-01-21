import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

import localFont from "@next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContext from "@/lib/MobilePageNavContext";
import UploadCV from "@/components/UploadCV";
import { ContactUs } from "@/components/ContactUs";

// const inter = Inter({ subsets: ["latin"] });

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IC8 | IT Recruitment & Consultancy ",
  description:
    "We value openness, honesty, transparency, communication and collaboration as the pillars of our company culture. We work as a team and we treat our clients and candidates as partners. We are always learning and growing, and we are always looking for new opportunities to innovate and improve.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileContext>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang="en">
          <body
            className={`${poppins.variable}, relative flex w-screen flex-col font-sans`}
          >
            <UploadCV />
            <div className="fixed bottom-12 right-4 z-50 flex flex-col gap-8 md:bottom-40 ">
              {/* ALWAYS ON SOCIAL MEDIA */}
              <aside className="relative z-50">
                <a target="_blank" href="https://www.linkedin.com/company/ic8/">
                  <div className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full border border-input bg-black fill-ic8 text-lg font-medium ring-offset-background transition-colors hover:bg-white hover:fill-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="22"
                      viewBox="0 0 448 512"
                      className=""
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                </a>
              </aside>
              {/* ALWAYS ON CONTACT US */}
              <aside className="">
                <ContactUs />
              </aside>
            </div>

            <Header />

            {children}
            <Footer />
          </body>
          <GoogleAnalytics gaId="G-B4DSNPYYZN" />
          <Analytics />
        </html>
      </ClerkProvider>
    </MobileContext>
  );
}
