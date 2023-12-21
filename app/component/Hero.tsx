"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['200', '400', '600'] })


const heroContent = {
  text: {
    subheading: "Smart Savings, Brighter Tomorrows",
    heading: "Savings Made Simple One Click Away.",
    desc: "At Wogen Holdings, diversity fuels our success. Across transportation, import-export, and education sectors, we champion innovation and unity.",
  },
};

const Hero = () => {
  return (
    <section className="md:mt-32 lg:pb-16 mt-20 md:py-8 md:px-10 max-sm:py-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="lg:w-5/12 mb:10 lg:mb-0">

              {heroContent.text.heading && (
                <h1 className={`text-6xl font-extrabold mb-7 uppercase ${poppins.className}`} >
                  Savings Made Simple <span className="text-indigo-600 bg-indigo-50"> One Click</span> Away.
                </h1>
              )}

              {heroContent.text.desc && (
                <p className="leading-relaxed text-gray-500 font-sans mb-10">
                  {heroContent.text.desc}
                </p>
              )}

              <div className="flex max-md:flex-col md:space-x-3 text-center ">
                <Link
                  href="/about"
                  className="flex gap-2 items-center justify-center text-[16px] max-md:mb-3 py-3 px-10 max-md:text-lg  bg-indigo-700 text-slate-50 font-bold font-sans rounded-lg duration-300 transition-all ease-in-out hover:bg-indigo-300 border hover:border-sky-200 hover:shadow-lg relative top-0 hover:-top-1"
                >
                  Learn more 
                  <span><HiArrowLongRight size={25}/></span>
                </Link>
                
              </div>
            </div>

            <div className="relative lg:w-6/12 space-y-2 max-lg:mt-3 flex justify-center p-10 bg-indigo-50 rounded-ss-full rounded-r-full">
               <Image src={"/bg.png"} width={500} height={500} alt="Image">
               </Image>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
