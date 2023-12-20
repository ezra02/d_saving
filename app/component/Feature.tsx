"use client";

import { RiShieldLine, RiMoneyDollarCircleLine, RiMoneyDollarBoxLine, RiBankLine, RiBarChartGroupedLine, RiExchangeDollarLine } from 'react-icons/ri';

import { features } from "@/constants";
import { FaUser } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 ">
            <h1>Specially crafted features</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiShieldLine  size={27}/>
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Multi-Level Security Measures
              </h2>
              <p className="text-gray-600 text-[13px]">
                Robust security protocols ensuring the safety of user data and
                funds. Implementing multi-factor authentication, encryption, and
                regular security updates to safeguard against cyber threats and
                unauthorized access
              </p>
            </div>

            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiMoneyDollarCircleLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Customizable Savings Goals
              </h2>
              <p className="text-gray-600 text-[13px]">
                Empowering users to set personalized savings goals tailored to
                their financial aspirations. This feature allows users to define
                specific targets, track progress, and adjust goals according to
                their evolving needs
              </p>
            </div>

            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiMoneyDollarBoxLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Automated Round-up & Micro-Savings
              </h2>
              <p className="text-gray-600 text-[13px]">
                Enabling automatic savings by rounding up transactions to the
                nearest dollar or through micro-savings with each purchase. This
                hands-free approach facilitates effortless savings accumulation
                without disrupting spending habits.
              </p>
            </div>

            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiBankLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Interest-Bearing Accounts
              </h2>
              <p className="text-gray-600 text-[13px]">
                Offering interest-bearing accounts or investment options to help
                grow users savings over time. By providing competitive interest
                rates or investment opportunities, the system encourages wealth
                accumulation and passive income generation.
              </p>
            </div>

            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiBarChartGroupedLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Financial Insights & Analysis
              </h2>
              <p className="text-gray-600 text-[13px]">
                Providing users with comprehensive insights into their spending
                habits, budgeting patterns, and saving trends. This feature
                offers detailed analysis and reports to empower users in making
                informed financial decisions.
              </p>
            </div>

            <div className="rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-indigo-700 p-5 text-white rounded-full">
                <RiExchangeDollarLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
                Flexible Withdrawal & Transfer Options
              </h2>
              <p className="text-gray-600 text-[13px]">
                Facilitating convenient access to saved funds through flexible
                withdrawal options without imposing stringent withdrawal
                restrictions. Additionally, enabling seamless fund transfers
                between accounts or to external sources when needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
