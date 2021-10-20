import Image from "next/image";
import SectionHeader from "../../../sectionHeader/sectionHeader";

const About = () => {
  return (
    <section id="about" className="relative py-14">
      <div className="container mx-auto ">
        <div className="flex justify-around">
          <div className="w-1/2 flex justify-center">
            <div className="block">
              <Image
                src="/static/images/responsive.png"
                alt="intrinsic"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
          <div className="w-1/2 p-4  ">
            <SectionHeader
              topTitle="About"
              botTitle="Butch Klein"
              className="mb-5 "
            />

            <div className="pr-20">
              <p>
                Hello and welcome to my portfolio! I&#39;m a Web developer and I
                have worked with different programming languages, stacks and
                technologies. I first found my passion for programming on
                embedded systems, wherein we worked on microcontrollers and
                electronics. I also worked on Desktop and Mobile app development
                for a final project for my Bachelor&#39;s degree.
              </p>
              <br />
              <p>
                Fast-forward to present, I&#39;m now working as a Frontend Web
                Developer with a sprinkle of Backend and Mobile app development.
                I am also freelancing as a Frontend Web Developer. Feel free to
                view some of my projects below!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
