import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { Logo } from "../../../../types/logos";
import { PT } from "../../../../types/pt";
import SectionHeader from "../../../sectionHeader/sectionHeader";
import { Fade } from "react-awesome-reveal";

type Props = {
  logos: Logo[];
  pt: PT[];
};

const Skills = ({ logos, pt }: Props) => {
  return (
    <section className="lg:py-16 py-4 outer" id="skills">
      <div className="container mx-auto">
        <Fade direction="down" triggerOnce>
          <div>
            <SectionHeader
              topTitle="Technical"
              botTitle="Skills"
              className="mb-10 text-center"
            />
            <p className="px-2 lg:px-0 lg:w-2/3 mx-auto mb-14 text-center">
              I have tried different technologies on the projects that I have
              worked on. Even though I have my own preferences, I am always
              pushing myself to learn more or at least have a bit of
              understanding about how other technologies work. I always try to
              be as objective and as practical as possible when planning,
              especially on my own projects where I can do the calling.
            </p>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce cascade>
          <Marquee className="mb-20">
            {logos?.map((logo) => (
              <div
                className="block relative md:h-28 md:w-36 h-20 w-32 md:mx-10 mx-5"
                key={logo.id}
              >
                <Image
                  alt="logo"
                  src={logo.src}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </div>
            ))}
          </Marquee>
          <div className="flex lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2 py-4">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                className="lg:h-full h-96 pt-swiper px-2 xs:px-0"
                loop={true}
                spaceBetween={10}
                speed={1000}
                navigation={false}
                allowTouchMove={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {pt?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="block relative h-full w-ful">
                      <Image
                        alt="logo"
                        src={item.src}
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:w-1/2  xl:pt-4 xl:pb-28 lg:pr-10 text-center lg:text-left px-2 xs:px-0">
              <div className="font-serif mb-8">
                <span className="font-bold block uppercase text-md text-gray-500 tracking-widest">
                  Teaching
                </span>
                <span className="font-bold uppercase text-2xl tracking-wider">
                  Web Development
                </span>
              </div>
              <p>
                I also handled “Basics of Web Development” subject for 2
                sections in college as a Practice Teacher during my stay at the
                Technological University of the Philippines as part of my
                Bachelor of Technical Teacher Education (BTTE) program. I taught
                HTML5, CSS3 and Basic Javascript on Bachelor of Science in
                Industrial Education (BSIE) students.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
