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
import styles from "./index.module.scss";

function Footer() {
  return (
    <footer className={clsx("py-5 relative", styles["footer"])}>
      <div className="absolute inset-0 bg-white "></div>
      <div className="container mx-auto relative">
        <ul className="flex justify-center items-center mt-2">
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon size={"2x"} icon={faFacebook} color="#4267B2" />
            </a>
          </li>
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon
                size={"2x"}
                icon={faEnvelopeSquare}
                color="#EA4335"
              />
            </a>
          </li>
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon size={"2x"} icon={faPhoneSquare} />
            </a>
          </li>
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon
                size={"2x"}
                icon={faTwitterSquare}
                color="#1DA1F2"
              />
            </a>
          </li>
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon size={"2x"} icon={faLinkedin} color="#2867B2" />
            </a>
          </li>
          <li>
            <a href="" className="px-2">
              <FontAwesomeIcon
                size={"2x"}
                icon={faGithubSquare}
                color="#171515"
              />
            </a>
          </li>
        </ul>
        <div className="text-center mt-2">
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
