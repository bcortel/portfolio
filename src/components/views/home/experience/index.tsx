import SectionHeader from "../../../sectionHeader/sectionHeader";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Zoom, Fade } from "react-awesome-reveal";
import { ComponentProps, ReactNode } from "react";

const experiences: ComponentProps<typeof ExperienceCard>[] = [
  {
    id: 1,
    title: "Electronics Engineering Intern (2016)",
    subTitle: "Maxim Integrated Philippines",
    description: `I worked as an Engineering Assistant for Test Product
    Engineering Department. Most of my work focused on data
    analysis and debugging embedded systems.`,
  },
  {
    id: 2,
    title: "Repair Technician (2017-2018)",
    subTitle: "Maxim Integrated Philippines",
    description: `I worked as a Repair Technician for Test Systems
    Engineering. We repair/modify electronic equipments and
    hardware depending on the specifications or requestor&#39;s
    request.`,
  },
  {
    id: 3,
    title: "Correlation Technician (2018-2019)",
    subTitle: "Maxim Integrated Philippines",
    description: `We test and debug newly-built electronic hardware. We
    collect data from these hardware and correlate them with
    existing hardware used in production to make sure that the
    specifications and readings are almost the same as the
    existing ones.`,
  },
  {
    id: 4,
    title: "Web and Mobile Application Developer (2021)",
    subTitle: "YFT Documents Facilitation Services",
    description: `I worked on both Frontend and Backend side of our products.
    As a Frontend Web Developer, we implement the mockups from
    the Design Team and make those features fully functional. As
    a Backend Web Developer, we create and maintain APIs to be
    consumed by the Client. I also worked on our
    Mobile Application Product.`,
  },
  {
    id: 5,
    title: "Freelance Frontend Web Developer (2021)",
    subTitle: "Taocrowd",
    description: (
      <>
        We work on projects where we perform conversion of Photoshop files
        (.psd) into a working, responsive and already-widgetized Wordpress
        themes for the clients. These Wordpress themes are ensured to conform to
        the{" "}
        <a
          href="https://www.w3.org/WAI/WCAG2A-Conformance"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          WCAG2A
        </a>{" "}
        standards and is optimized for better performance.
      </>
    ),
  },
  {
    id: 6,
    title: "Full Stack Engineer (2022)",
    subTitle: "Invedent",
    description: (
      <>
        I worked both on frontend and backend parts of our application (
        <a
          href="https://www.invedent.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          Invedent
        </a>
        ), implementing features for stocktaking, ordering and inventory
      </>
    ),
  },
];

const ExperienceCard = ({
  id,
  title,
  subTitle,
  description,
}: {
  id: number;
  title: string;
  subTitle: string;
  description: ReactNode;
}) => {
  const isEven = id % 2 === 0;

  return (
    <div
      className={clsx(
        "rounded-full bg-white h-5 w-5 border-4 border-solid border-yellow-500 absolute left-1/2 transform -translate-x-2/4",
        styles[`exp-${id}`]
      )}
    >
      <div
        className={clsx(
          `absolute transform md:top-1/2 transform -translate-y-1/2  left-6`,
          { "md:right-6 md:left-auto": isEven }
        )}
      >
        <Zoom triggerOnce>
          <div className="rounded-lg shadow-xl  p-6">
            <div className="font-bold">{title}</div>
            <div className="font-semibold">{subTitle}</div>
            <p className="mt-2">{description}</p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

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
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              title={exp.title}
              subTitle={exp.subTitle}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
