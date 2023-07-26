import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/undraw_web_developer(1).svg";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex bg-[#0a192f]">
      {/* Container */}
      <img src={logo} alt="illustration" className="w-[50%] m-10" />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Harjas Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Full Stack developer specializing in building exceptional
          digital experience. Currently, I'm focused on building responsive
          full-stack web applications
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
