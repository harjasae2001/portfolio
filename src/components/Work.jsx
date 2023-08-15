import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";
import cryptoApp from "../assets/projects/cryptoApp.webp";
import ecommerce from "../assets/projects/e-commerce.jpg";
import weatherApp from "../assets/projects/weatherApp.jpg";
import mapty from "../assets/projects/mapty.jpg";
import netflixClone from "../assets/projects/netflix-clone.jpg";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ background: `url(${cryptoApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CryptoApp
              </span>
              <div className="flex justify-center align-center">
                <a href="https://stockcrypto.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/CryptoApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${realEstate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Realtor
              </span>
              <div className="flex justify-center align-center">
                <a href="https://real-estate-finder-harjasae2001.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/Real_Estate_Finder">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Commerce
              </span>
              <div className="flex justify-center align-center">
                <a href="https://e-commerce-8e1p5hzf5-harjasae2001.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/E-Commerce">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${weatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WeatherApp
              </span>
              <div className="flex justify-center align-center">
                <a href="https://weatherappupdate.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/Weather_App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${mapty})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mapty
              </span>
              <div className="flex justify-center align-center">
                <a href="https://mapty-health-tracker.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/Mapty">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${netflixClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="flex justify-center align-center">
                <a href="https://netflix-clone1609.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harjasae2001/Netflix-Clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gra700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
