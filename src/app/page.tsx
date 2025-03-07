"use client";
import Image from "next/image";
import HeroSection from "@/components/section/HeroSection";
import Section2 from "@/components/section/Section2";
import Section3 from "@/components/section/Section3";
import Section4 from "@/components/section/Section4";
import Section5 from "@/components/section/Section5";
import Section6 from "@/components/section/Section6";
import Section7 from "@/components/section/Section7";
import Section8 from "@/components/section/Section8";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [onClick, SetOnClick] = useState(false);
  const router = useRouter();
  
  
  return (
    <main className="">
      <HeroSection>
        <a
          href="#contactus"
          className="flex h-[2.5rem] w-2/5 items-center justify-center rounded-2xl border-2 border-white bg-white bg-opacity-15 text-center font-semibold hover:border-none hover:bg-[#ffc132]"
        >
          Contact us
        </a>
      </HeroSection>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6>
        <div id="contactus"></div>
      </Section6>
      <Section7 />
      <Section8 />
    </main>
  );
}
