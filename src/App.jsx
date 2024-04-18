import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import "@fontsource/onest"; // Defaults to weight 400

import "./App.css";

function App() {
  return (
    <>
      <div className="mt-10 gap-x-10 md:grid md:grid-cols-2" md="">
        <div className="flex justify-center md:justify-end items-center mb-14 md:mb-0">
          <img
            className="drop-shadow-[0_15px_10px_rgba(33,135,200,0.5)] h-52 w-52 md:h-60 md:w-60"
            src="/avatar.png"
            alt="avatar"
          />
        </div>

        <div className="flex justify-center md:justify-start items-center">
          <div className="flex justify-center">
            <div>
              <div className=" font-sans text-gray-300 texto text-3xl font-bold mb-5">
                <p>I' am Manuel Olguin ✌</p>
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="px-3 py-1 rounded-md font-sans text-gray-300 texto text-xl  font-semibold bg-[#091c30]/[0.8] mb-5 border-2 border-[#ffffff]/[0.4]">
                  <p>Artificial Intelligence Student</p>
                </div>
              </div>
              <div className=" flex space-x-3 justify-center md:justify-start">
                <a href="#">
                  <AiFillLinkedin className="text-gray-300 w-12 h-12  hover:animate-pulse-fade-in" />
                </a>
                <a href="#">
                  <AiFillGithub className="text-gray-300 w-12 h-12  hover:animate-pulse-fade-in" />
                </a>
                <a href="#">
                  <IoIosMail className="text-gray-300 w-12 h-12 hover:animate-pulse-fade-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
