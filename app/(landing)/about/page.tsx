import React from "react";
import {
  RiFlag2Fill,
  RiEye2Fill,
  RiCheckboxCircleFill,
  RiTeamFill,
  RiBankCardFill,
  RiNewspaperFill,
} from "react-icons/ri";

const About3 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-32 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">
        About
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            We are here to make saving easy and delightfull for everyone
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corrupti ut? Laboriosam asperiores sapiente quasi assumenda! Ratione eligendi itaque error quae facilis, quas deleniti velit necessitatibus laboriosam id voluptatum eveniet officiis dignissimos beatae facere, suscipit culpa nemo expedita voluptatem doloremque harum? Quod culpa optio voluptates velit dignissimos, autem similique nihil, amet totam omnis nemo facere. Obcaecati, fugiat omnis quo adipisci, beatae veniam quis voluptates dolor sunt assumenda quibusdam, totam minima asperiores veritatis? Ducimus ad expedita eum animi facere labore a cum ut error asperiores amet reprehenderit voluptate, alias consectetur quibusdam? Dignissimos sapiente odit minima doloremque assumenda quidem nesciunt, eveniet quisquam!
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-indigo-700 rounded-full flex justify-center items-center">
            <RiFlag2Fill size={26} className="text-white z-20" />
          </div>

          <div className="z-20 w-12 h-12 bg-indigo-700 rounded-full flex justify-center items-center">
            <RiEye2Fill size={26} className="text-white z-20" />
          </div>

          <div className="sm:flex hidden z-20 w-12 h-12 bg-indigo-700 rounded-full justify-center items-center">
            <RiCheckboxCircleFill size={26} className="text-white z-20" />
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Mission
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Empower individuals worldwide to achieve financial security through
            innovative and accessible savings solutions.
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Vision
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To be the catalyst in shaping a world where everyone confidently
            builds a prosperous future through prudent and effortless saving
            practices.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Goal
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Enhance user experience by developing intuitive saving tools and
            personalized financial guidance.
          </p>
        </div>
      </div>
      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-indigo-700 rounded-full flex justify-center items-center">
            <RiCheckboxCircleFill size={26} className="text-white z-20" />
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Goal
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Enhance user experience by developing intuitive saving tools and
            personalized financial guidance.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Mission
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima
            facilis laboriosam voluptate est distinctio, repellat neque
            dignissimos aperiam debitis ullam quo odio quis fugiat aspernatur
            similique. Eligendi est tempore possimus? Fuga sapiente magni
            consectetur iste, repudiandae molestias, veniam in harum perferendis
            dolorem iusto, deleniti sunt quod! Sequi, accusamus delectus.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima
            facilis laboriosam voluptate est distinctio, repellat neque
            dignissimos aperiam debitis ullam quo odio quis fugiat aspernatur
            similique. Eligendi est tempore possimus? Fuga sapiente magni
            consectetur iste, repudiandae molestias, veniam in harum perferendis
            dolorem iusto, deleniti sunt quod! Sequi, accusamus delectus
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Team Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiTeamFill size={32} className="text-indigo-700 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Team
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur mollitia magnam ex, explicabo reprehenderit dicta
                  totam ipsa veniam commodi doloremque ea maxime quia quidem
                  sequi.
                </p>
              </div>
            </div>

            {/* <!-- Board Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiBankCardFill size={32} className="text-indigo-700 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Board
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur mollitia magnam ex, explicabo reprehenderit dicta
                  totam ipsa veniam commodi doloremque ea maxime quia quidem
                  sequi.
                </p>
              </div>
            </div>

            {/* <!-- Press Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiNewspaperFill size={32} className="text-indigo-700 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Press
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur mollitia magnam ex, explicabo reprehenderit dicta
                  totam ipsa veniam commodi doloremque ea maxime quia quidem
                  sequi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
