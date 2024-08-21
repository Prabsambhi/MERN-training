import React, { useState } from "react";
import MyImage from "../assets/logo.png";
import profileImage from "../assets/profile.png";
import heartImage from "../assets/heart1.png";
import bagImage from "../assets/bag.png";
import { BsSearch, BsJustify} from "react-icons/bs";

const Responsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="flex flex-row items-center justify-between bg-white px-9 space-x-4 py-3">
          <div className="flex custom-940:hidden gap-4">
            <BsJustify
              className="text-xl"
              onClick={() => setIsOpen(!isOpen)}
            />
            <img src={heartImage} alt="My Image" className="h-5" />
          </div>
          <img src={MyImage} alt="logo" className="h-7 sm:h-9 " />
          <div className="hidden custom-940:flex items-baseline text-sm custom-1150:text-base ">
            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              MEN
            </div>

            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              WOMEN
            </div>
            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              KIDS
            </div>
            <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black">
              SPORTS
            </div>
            <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black">
              LIFESTYLE
            </div>
            <div className="text-red-600 font-semibold py-4 px-3 border-b-4 border-transparent hover:border-red-500">
              OUTLET
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 border bg-gray-200 outline-none w-44 custom-1150:w-full hidden custom-940:block"
            />
            <BsSearch className="text-xl block custom-940:hidden " />
            <img src={profileImage} alt="My Image" className="h-5 " />
            <img
              src={heartImage}
              alt="My Image"
              className="h-5 hidden custom-940:block"
            />

            <img src={bagImage} alt="My Image" className="h-5" />
          </div>
        </div>

        {isOpen ? (
          <div className="block custom-940:hidden text-sm custom-1150:text-base px-5 ">
            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              MEN
            </div>
            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              WOMEN
            </div>
            <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black">
              KIDS
            </div>
            <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black">
              SPORTS
            </div>
            <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black">
              LIFESTYLE
            </div>
            <div className="text-red-600 font-semibold py-4 px-3 border-b-4 border-transparent hover:border-red-500">
              OUTLET
            </div>
          </div>
        ) : (
          <></>
        )}
      </header>
      <body>
        <div className="min-h-screen bg-neutral-200 py-20 px-10">
          <div className="grid custom-500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="h-40 bg-white">1</div>
            <div className="h-40 bg-white">2</div>
            <div className="h-40 bg-white">3</div>
            <div className="h-40 bg-white">4</div>
            <div className="h-40 bg-white">5</div>
            <div className="h-40 bg-white">6</div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Responsive;
