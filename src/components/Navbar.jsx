import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/my_logo-removebg-preview.png";
import { Link } from "react-scroll";
// import { Document, pdfjs, Page } from "react-pdf";
// import resumePdf from "../assets/resume.pdf";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const navClick = () => {
    setShow(!show);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50px" }}
          className="rounded-full"
        />
      </Link>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className=" hover:text-pink-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:text-pink-600">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:text-pink-600">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:text-pink-600">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=" hover:text-pink-600">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={navClick} className="md:hidden z-10">
        {!show ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !show
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl  hover:text-pink-600">
          {" "}
          <Link onClick={navClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-pink-600">
          {" "}
          <Link onClick={navClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-pink-600">
          <Link onClick={navClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-pink-600">
          <Link onClick={navClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-pink-600">
          <Link onClick={navClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/harjasae2001/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/harjasae2001"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:harjasae2001@gmail.com"
            >
              EMail <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Document
              file={resumePdf}
              onLoadError={console.error}
              className="flex justify-between items-center w-full text-gray-300"
            >
              <Page pageIndex={0} />
              Resume <BsFillPersonLinesFill size={30} />
            </Document>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
