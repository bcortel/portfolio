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

const Introduction = () => {
  return (
    <section className="pb-14 container mx-auto" id="hp-intro">
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
              <a href="" className="px-2">
                <FontAwesomeIcon
                  size={"2x"}
                  icon={faFacebook}
                  color="#4267B2"
                />
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
                <FontAwesomeIcon
                  size={"2x"}
                  icon={faLinkedin}
                  color="#2867B2"
                />
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
        </div>
        <div className="text-base">
          <h2 className="text-lg font-semibold mb-1">Hi! I&apos;m Butch...</h2>
          <p>
            I&apos;m a Software Developer based on Cavite, Philippines. <br />
            I worked on different technologies, focusing more on Frontend Web
            Development. <br />
            You may navigate through for more infomation!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
