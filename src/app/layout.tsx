import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./component/header";
import Footer from "./component/footer";
import ThemeContextProvider from "@/app/context/theme-context";
// import ThemeSwitch from "@/app/context/theme-switch";
import "react-phone-input-2/lib/style.css";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angaz ",
  description:
    "Enjaz is a platform that acts as an intermediary for buying and selling services, and what distinguishes it most is the ease of using the platform, and that is our most prominent features.",
  authors: [{ name: "Angaz team", url: "https://Angaz.com" }],
  keywords:
    "platform that acts as an intermediary for buying and selling services,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth relative  ">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950  relative  dark:bg-gray-900 dark:text-gray-50`}
      >
        <ThemeContextProvider>
          <div className="md:container md:mx-auto  ">
            <Header />
            {children}
            <Footer />
          </div>
          {/* <ThemeSwitch /> */}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
