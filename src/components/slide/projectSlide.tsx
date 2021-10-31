import Image from "next/image";
import { useState } from "react";

const ProjectSlide = ({
  img,
  title,
  subTitle,
  text,
  href,
  footerText,
}: {
  img: string;
  title: string;
  subTitle: string;
  text: string;
  href: string;
  footerText: string;
}) => {
  const [isHovered, toggleHovered] = useState(false);
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  const handleHover = () => {
    toggleHovered((hovered) => !hovered);
  };

  return (
    <div className="flex min-h-full lg:flex-row flex-col-reverse">
      <div className="lg:w-1/2 w-full p-5 xl:px-6 text-center">
        <div className="mb-4">
          <div className="text-3xl font-bold ">{title}</div>
          <div className="text-xl text-gray-500">{subTitle}</div>
        </div>
        <p className="xl:h-1/3 h-2/4">{text}</p>
        <div className="mt-5 font-bold">{footerText}</div>
      </div>
      <div className="w-full lg:w-2/5 h-80 relative mx-auto flex justify-center items-center bg-white p-4 xl:p-10 self-center">
        <div
          className={`block relative h-full w-full cursor-pointer transition-all transform ${
            isHovered && "scale-105 shadow-lg rounded-lg"
          }`}
        >
          <Image
            onClick={() => handleClick(href)}
            onMouseOver={handleHover}
            onMouseOut={handleHover}
            src={img}
            alt="slide"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
