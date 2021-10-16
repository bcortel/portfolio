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
    <div className="flex min-h-full">
      <div className="w-1/2 p-5 text-center">
        <div className="mb-4">
          <div className="text-3xl font-bold ">{title}</div>
          <div className="text-xl text-gray-500">{subTitle}</div>
        </div>
        <p className="h-1/3">{text}</p>
        <div className="mt-5 font-bold">{footerText}</div>
      </div>
      <div className="w-1/2 relative flex justify-center items-center bg-white">
        <div
          className={`block relative h-full w-full cursor-pointer transition-all transform ${
            isHovered && "scale-105"
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
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
