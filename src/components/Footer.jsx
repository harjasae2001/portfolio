import React from "react";

const Footer = () => {
  const date = new Date().getFullYear;
  console.log(date);
  return (
    <footer className="w-[full] bg-[#111] text-gray-300 p-10 flex flex-col items-center justify-center">
      <div className=" flex ">
        <p>&copy; Copyright Harjas Singh {new Date().getFullYear()}</p>
      </div>

      <div className="flex flex-col ">
        <div className="p-2">
          <p>Connect With Me</p>
        </div>
        <div className="">
          <ul className="flex">
            <li className="pr-3 pl-3">
              <a
                href="https://www.instagram.com/harjasae2001/"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://www.facebook.com/profile.php?id=100063952266000"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                  id="facebook-logo-2019"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://twitter.com/HarjasS33433485"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="126.444 2.281 589 589"
                  id="twitter"
                >
                  <circle
                    cx="420.944"
                    cy="296.781"
                    r="294.5"
                    fill="#2daae1"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
