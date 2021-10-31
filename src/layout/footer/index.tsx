import {
  faFacebook,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.scss";

function Footer() {
  const { width } = useWindowSize();

  return (
    <footer className={clsx("py-6 relative", styles["footer"])}>
      <div className="absolute inset-0 bg-white "></div>
      <div className="container mx-auto relative">
        <div className="flex justify-center items-center mt-2 ">
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="https://www.facebook.com/butch.klein.cortel"
              rel="noreferrer"
              target="_blank"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faFacebook}
                color="#4267B2"
              />
              <span className="hidden sm:block">/butch.klein.cortel</span>
            </a>
          </div>
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="mailto: cortel.butch.kleina@gmail.com"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faEnvelopeSquare}
                color="#EA4335"
              />
              <span className="hidden sm:block">cortel.butch.kleina</span>
            </a>
          </div>
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="tel: +63 (975) 008 8319"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faPhoneSquare}
              />
              <span className="hidden sm:block">+63 (975) 008 8319</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="https://twitter.com/CortelButch"
              rel="noreferrer"
              target="_blank"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faTwitterSquare}
                color="#1DA1F2"
              />
              <span className="hidden sm:block">/CortelButch</span>
            </a>
          </div>
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="https://www.linkedin.com/in/butch-cortel-894925203/"
              rel="noreferrer"
              target="_blank"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faLinkedin}
                color="#2867B2"
              />
              <span className="hidden sm:block">/butch-cortel</span>
            </a>
          </div>
          <div className="w-1/3 sm:w-2/6 lg:w-1/6 flex items-center justify-around">
            <a
              href="https://github.com/ButsCortel"
              rel="noreferrer"
              target="_blank"
              className="px-2 text-center flex items-center justify-center flex-col w-44 hover:shadow-xl hover:scale-105  hover:opacity-100 transform transition-all rounded-md h-32"
            >
              <FontAwesomeIcon
                size={width < 640 ? "4x" : "2x"}
                icon={faGithubSquare}
                color="#171515"
              />
              <span className="hidden sm:block">/ButsCortel</span>
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm font-semibold text-gray-500">
          <p>
            &copy; 2021 <span>Butch Klein Cortel</span>. Software Development
            services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
