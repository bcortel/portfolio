import Image from "next/image";

const ProjectSliderThumb = ({ src }: { src: string }) => {
  return (
    <div className="flex justify-center items-center relative">
      <Image
        priority={true}
        src={src}
        alt="intrinsic"
        width={300}
        height={150}
      />
    </div>
  );
};

export default ProjectSliderThumb;
