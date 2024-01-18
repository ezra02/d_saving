"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiUserAddLine, RiLockPasswordLine, RiMailLine } from "react-icons/ri";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";
import api from '../../lib/api'

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default function Signin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
    api.get('/sanctum/csrf-cookie')
    .then(res=>{
      console.log(getCookie('XSRF-TOKEN'))
    })
  },[])

  const signIn = (e) => {
    e.preventDefault()
    const data ={email,password}
    console.log(data);
    api.post('/login',data)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      
    })
  }
  return (
    <div className="flex gap-20 h-screen w-full">
      <div className="w-3/5 hidden sm:flex justify-center items-center bg-gradient-to-b from-violet-950 to-indigo-700">
        <Image src={"/login.png"} width={500} height={500} alt="Image"></Image>
      </div>
      <div className="bg-white flex flex-col justify-center h-screen w-full">
        <form onSubmit={()=>signIn(event)} className="max-w-[450px] w-full mx-auto bg-gray-50 shadow-lg px-10 py-10 ">
          <h2 className="text-4xl font-bold text-center py-6">
            Digital Saving
          </h2>

          <div className="flex flex-col py-2">
            <label>
              <RiMailLine className="inline-block mr-2" /> Email
            </label>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="border p-2" type="email" />
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiLockPasswordLine className="inline-block mr-2" /> Password
            </label>
            <input onChange={(e)=>{setPassword(e.target.value)}} className="border p-2" type="password" />
          </div>

          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>

          <div className="flex justify-between items-center">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>

            <Link href={"/sign-up"} className="flex items-center gap-2 text-indigo-700">
             Create Account  <LiaLongArrowAltRightSolid />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
