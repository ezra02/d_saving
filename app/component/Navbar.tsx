"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { nav_links } from "@/constants";
import { HiBars3 } from "react-icons/hi2";
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="top-0 left-0 w-full fixed z-[9999] py-5 md:px-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-10">
              <Link href={"/"} className="text-xl font-semibold text-indigo-700">
                Digital Saving
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-14 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-indigo-700  font-bold uppercase"
                          : "text-indigo-700 hover:text-indigo-500 hover:font-semibold ease-in-out duration-300 font-sans uppercase"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-sans text-sm">
              <div className="hidden lg:flex gap-4">
              <button className="bg-indigo-600  hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Sign up
            </button>
              </div>
              <button className="block lg:hidden" onClick={navHandle}>
                {!nav ? (
                  <HiBars3 size={35} className="text-black" />
                ) : (
                  <LiaTimesSolid size={35} className="text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center py-3">
          <Link href={"/"}>
            <Image
              src={"/origin_logo.png"}
              width={200}
              height={200}
              alt="Image"
            />
          </Link>
        </div>

        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.key} className="p-4 border-b border-gray-900">
              <a href={link.href} className="uppercase text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
