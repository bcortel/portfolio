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
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Introduction = () => {
  return (
    <section className="pb-14 container mx-auto" id="hp-intro">
      <Fade triggerOnce cascade>
        <div className="flex justify-center">
          <div
            className={
              "border-8 border-white rounded-full mx-auto relative h-auto w-80 overflow-hidden -mt-36"
            }
          >
            <Image
              src="/static/images/picture.jpg"
              alt="profile picture"
              layout="responsive"
              height={300}
              width={300}
              priority={true}
            />
          </div>
        </div>
        <h1 className="w-full text-center text-3xl font-bold mt-4">
          Butch Klein Cortel
        </h1>
        <div className="text-center text-lg ">
          <p className="font-bold text-gray-600">Web Developer</p>
          <p className="font-bold text-gray-600">Cavite, Ph</p>
          <div className="my-3">
            <ul className="flex justify-center items-center mt-2">
              <li>
                <a
                  href="https://www.facebook.com/butch.klein.cortel"
                  className="px-2 transform block hover:scale-110 transition"
                  id="fb"
                >
                  <FontAwesomeIcon
                    size={"2x"}
                    icon={faFacebook}
                    color="#4267B2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto: cortel.butch.kleina@gmail.com"
                  className="px-2 transform block hover:scale-110 transition"
                  id="gm"
                >
                  <FontAwesomeIcon
                    size={"2x"}
                    icon={faEnvelopeSquare}
                    color="#EA4335"
                  />
                </a>
              </li>
              <li>
                <a
                  href="tel: +63 (975) 008 8319"
                  className="px-2 transform block hover:scale-110 transition"
                  id="cp"
                >
                  <FontAwesomeIcon size={"2x"} icon={faPhoneSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/CortelButch"
                  className="px-2 transform block hover:scale-110 transition"
                  id="tw"
                >
                  <FontAwesomeIcon
                    size={"2x"}
                    icon={faTwitterSquare}
                    color="#1DA1F2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/butch-cortel-894925203/"
                  className="px-2 transform block hover:scale-110 transition"
                  id="li"
                >
                  <FontAwesomeIcon
                    size={"2x"}
                    icon={faLinkedin}
                    color="#2867B2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ButsCortel"
                  className="px-2 transform block hover:scale-110 transition"
                  id="gh"
                >
                  <FontAwesomeIcon
                    size={"2x"}
                    icon={faGithubSquare}
                    color="#171515"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-base">
            <h2 className="text-lg font-semibold mb-1">
              Hi! I&apos;m Butch...
            </h2>
            <p>
              I&apos;m a Software Developer based on Cavite, Philippines. <br />
              I worked on different technologies, focusing more on Frontend Web
              Development. <br />
              You may navigate through for more infomation!
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Introduction;
