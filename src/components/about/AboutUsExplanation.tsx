"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface IAboutUsExplanationProps {}

const AboutUsExplanation: React.FunctionComponent<IAboutUsExplanationProps> = (
  props,
) => {
  const router = useRouter();
  return (
    <section
      id="section"
      className="container mt-[5rem] flex w-full flex-col text-center md:h-auto md:flex-row md:text-justify"
    >
      <div className="text-[#0D2A40]">
        <div className="flex w-full flex-col justify-center md:flex-row">
          <img src="factory.webp" className="h-fit md:mb-5 md:w-1/2" />
          <div className="mb-20 md:ml-[5rem]">
            <h1 className="mb-5 mt-10 w-full text-3xl font-semibold md:mt-0 md:text-4xl md:font-bold">
              About <br /> our company
            </h1>
            <p className="text-justify text-base">
            Seiring perkembangan ilmu standardisasi dan akreditasi, DG Lab Indonesia juga menyediakan jasa pelatihan standardisasi khususnya terkait pemenuhan persyaratan SNI ISO /IEC 17025:2017 yang memberikan refreshing dan menambah kemampuan serta kompetensi dari personil laboratorium pengujian/kalibrasi
            </p>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col justify-center text-center md:flex-row md:text-justify">
          <img src="aboutus1.jpg" className="md:w-[35rem]" />
          <div className="mb-20 md:ml-[5rem]">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              1 June 2023
            </h2>
            <p className="text-justify">
              kenapa dah kenapa dah
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col text-center md:flex-row md:text-justify">
          <img src="aboutus2.jpg" className="md:w-[35rem]" />

          <div className="mb-20 text-center md:ml-[5rem] md:text-justify">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              8 November 2023
            </h2>
            <p className="text-justify">
              abnjayy
            
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row  ">
          <img src="aboutus3.avif" className="md:w-[35rem]" />
          <div className="mb-20 text-center md:ml-[5rem] md:text-justify">
            <h2 className=" mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              17 January 2024
            </h2>
            <p>
              eakahhh maniss
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col text-center md:flex-row md:text-justify">
          <img src="aboutus4.jpg" className="md:w-[35rem]" />
          <div className="mb-20 md:ml-[5rem]">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              5 March 2024
            </h2>
            <p className="text-justify">
              ngantuk bangett astagaa
            </p>
          </div>
        </div>
        <div className="mb-[10rem] mt-10 text-center ">
          <h2 className="mb-1 text-2xl">End 2024</h2>
          <p className="text-justify">
            Dynamic Shared Ownership rolled out to every corner of
            #TeamJawaAgrindo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsExplanation;
