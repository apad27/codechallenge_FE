import type * as next from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: next.Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div id="navbar" className=" absolute top-0"></div>
        <a
          id="return-icon"
          href="#navbar"
          className="fixed bottom-3 right-3 z-20 text-6xl text-[#ffc132]"
        >
          <BsFillArrowUpSquareFill />
        </a>
        <center>
          <Navbar />
          {children}
          <Footer />
        </center>
      </body>
    </html>
  );
}
