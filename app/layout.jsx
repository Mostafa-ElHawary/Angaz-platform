import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/mainpage/header";
import Footer from "@/components/mainpage/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angaz ",
  description:
    "Enjaz is a platform that acts as an intermediary for buying and selling services, and what distinguishes it most is the ease of using the platform, and that is our most prominent features.",
  authors: [{ name: "Angaz team", url: "https://Angaz.com" }],
  keywords:
    "platform that acts as an intermediary for buying and selling services,",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth relative  ">
      <body
        className={`${inter.className} pl-5 pr-5   bg-gray-50 text-gray-950  relative   `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
