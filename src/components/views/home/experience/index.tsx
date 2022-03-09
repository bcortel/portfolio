import SectionHeader from "../../../sectionHeader/sectionHeader";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Zoom, Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <section className="md:pt-16 pb-16 md:pb-10 outer" id="exp">
      <div className="container mx-auto">
        <Fade triggerOnce>
          <SectionHeader
            topTitle="Professional"
            botTitle="Experience"
            className="mb-16 text-center"
          />
        </Fade>

        <div
          className={clsx(
            "bg-gray-300 w-2 ml-2 sm:ml-0  md:mx-auto relative rounded-lg mb-10",
            styles["timeline"]
          )}
        >
          <div
            className={clsx(
              "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
              styles["exp-1"]
            )}
          >
            <div className="absolute transform md:top-1/2 transform -translate-y-1/2  left-6 ">
              <Zoom triggerOnce>
                <div className="rounded-lg shadow-xl  p-6">
                  <div className="font-bold">
                    Electronics Engineering Intern (2016)
                  </div>
                  <div className="font-semibold">
                    Maxim Integrated Philippines
                  </div>
                  <p className="mt-2">
                    I worked as an Engineering Assistant for Test Product
                    Engineering Department. Most of my work focused on data
                    analysis and debugging embedded systems.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div
            className={clsx(
              "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
              styles["exp-2"]
            )}
          >
            <div className="absolute transform md:top-1/2 transform -translate-y-1/2  md:right-6 left-6 md:left-auto">
              <Zoom triggerOnce>
                <div className="rounded-lg shadow-xl p-6">
                  <div className="font-bold">Repair Technician (2017-2018)</div>
                  <div className="font-semibold">
                    Maxim Integrated Philippines
                  </div>
                  <p className="mt-2">
                    I worked as a Repair Technician for Test Systems
                    Engineering. We repair/modify electronic equipments and
                    hardware depending on the specifications or requestor&#39;s
                    request.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div
            className={clsx(
              "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
              styles["exp-3"]
            )}
          >
            <div className="absolute transform md:top-1/2 transform -translate-y-1/2  left-6">
              <Zoom triggerOnce>
                <div className="rounded-lg shadow-xl p-6 ">
                  <div className="font-bold">
                    Correlation Technician (2018-2019)
                  </div>
                  <div className="font-semibold">
                    Maxim Integrated Philippines
                  </div>
                  <p className="mt-2">
                    We test and debug newly-built electronic hardware. We
                    collect data from these hardware and correlate them with
                    existing hardware used in production to make sure that the
                    specifications and readings are almost the same as the
                    existing ones.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div
            className={clsx(
              "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
              styles["exp-4"]
            )}
          >
            <div className="absolute transform md:top-1/2 transform -translate-y-1/2  md:right-6 left-6 md:left-auto">
              <Zoom triggerOnce>
                <div className="rounded-lg shadow-xl p-6 ">
                  <div className="font-bold">Web Developer (2021)</div>
                  <div className="font-semibold">
                    YFT Documents Facilitation Services
                  </div>
                  <p className="mt-2">
                    I worked on both Frontend and Backend side of our products.
                    As a Frontend Web Developer, we implement the mockups from
                    the Design Team and make those features fully functional. As
                    a Backend Web Developer, we create and maintain APIs to be
                    consumed by the Client. I also just started working with our
                    Mobile Application Product.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div
            className={clsx(
              "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
              styles["exp-5"]
            )}
          >
            <div className="absolute transform md:top-1/2 transform -translate-y-1/2  left-6">
              <Zoom triggerOnce>
                <div className="rounded-lg shadow-xl p-6 ">
                  <div className="font-bold">
                    Freelance Frontend Web Developer (2021)
                  </div>
                  <div className="font-semibold">Taocrowd</div>
                  <p className="mt-2">
                    We work on projects where we perform conversion of Photoshop
                    files (.psd) into a working, responsive and
                    already-widgetized Wordpress themes for the clients. These
                    Wordpress themes are ensured to conform to the{" "}
                    <a
                      href="https://www.w3.org/WAI/WCAG2A-Conformance"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold"
                    >
                      WCAG2A
                    </a>{" "}
                    standards and is optimized for better performance.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
