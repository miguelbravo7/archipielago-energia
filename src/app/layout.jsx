import clsx from "clsx";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Archipielago - The best digital agency on the internet",
  description:
    "Archipielago is a digital agency with a focus on creative, interactive and innovative design and development. Our team of designers, developers and strategists work together to create customized solutions that are unique to each client's needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx("font-sans", inter.variable)}>
        <Navbar />
        <main className="relative">
          <div className="">
            <div
              className="absolute inset-x-0 -z-10 min-h-screen transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-rose-500 to-red-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);",
                }}
              ></div>
              {/* <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-500 to-pink-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    "clip-path":
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);",
                  }}
                ></div>
              </div> */}
            </div>
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
