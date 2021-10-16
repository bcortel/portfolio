import Image from "next/image";

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
              />
            </div>
          </div>
          <div className="w-1/2 p-4">
            <header>
              <h2 className="font-serif mb-5">
                <span className="font-bold block uppercase text-xl text-gray-500 tracking-widest">
                  About
                </span>
                <span className="font-bold uppercase text-4xl tracking-wider">
                  Butch Klein
                </span>
              </h2>
            </header>

            <div className="pr-20">
              <p>
                Hello and welcome to my portfolio! I&#39;m a Software developer
                and I have worked with different programming languages, stacks
                and technologies. I first found my passion for programming on
                embedded systems, wherein we worked on microcontrollers and
                electronics. I also worked on Desktop and Mobile app development
                for a final project for my Bachelor&#39;s degree.
              </p>
              <br />
              <p>
                Fast-forward to present, I&#39;m now working as a Frontend Web
                Developer with a sprinkle of Backend. I am also freelancing as a
                Frontend Web Developer. Feel free to view some of my projects
                below!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
