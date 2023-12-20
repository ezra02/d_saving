import Image from "next/image";
import React from "react";
import { RiUserAddLine, RiLockPasswordLine, RiMailLine } from "react-icons/ri"; // Import the icons from react-icons

export default function Signup() {
  return (
    <div className="flex gap-20 h-screen w-full">
      <div className="w-3/5 hidden sm:flex justify-center items-center bg-gradient-to-b from-violet-950 to-indigo-700">
        <Image src={"/login.png"} width={500} height={500} alt="Image"></Image>
      </div>
      <div className="bg-white flex flex-col justify-center h-screen w-full">
        <form className="max-w-[450px] w-full mx-auto bg-gray-50 shadow-lg px-10 py-10 ">
          <h2 className="text-4xl font-bold text-center py-6">
            Digital Saving
          </h2>

          <div className="flex flex-col py-2">
            <label>
              <RiUserAddLine className="inline-block mr-2" /> Username
            </label>
            <input className="border p-2" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiMailLine className="inline-block mr-2" /> Email
            </label>
            <input className="border p-2" type="email" />
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiLockPasswordLine className="inline-block mr-2" /> Password
            </label>
            <input className="border p-2" type="password" />
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiLockPasswordLine className="inline-block mr-2" /> Confirm
              Password
            </label>
            <input className="border p-2" type="password" />
          </div>

          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign Up
          </button>

          <div className="flex justify-between items-center">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
