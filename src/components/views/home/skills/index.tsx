import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import Marquee from "react-fast-marquee";
import { Logo } from "../../../../types/logos";
import { PT } from "../../../../types/pt";

type Props = {
  logos: Logo[];
  pt: PT[];
};

const Skills = ({ logos, pt }: Props) => {
  return (
    <section className="py-16" id="skills">
      <div className="container mx-auto">
        <header className="text-center mb-10">
          <h2 className="font-serif">
            <span className="font-bold block uppercase text-xl text-gray-500 tracking-widest">
              Technical
            </span>
            <span className="font-bold uppercase text-4xl tracking-wider">
              Skills
            </span>
          </h2>
        </header>
        <p className="w-2/3 mx-auto mb-14 text-center">
          I have tried different technologies on the projects that I have worked
          on. Even though I have my own preferences, I am always pushing myself
          to learn more or at least have a bit of understanding about how other
          technologies work. I always strive to be as objective and as practical
          as possible when planning, especially on my own projects where I can
          do the calling.
        </p>

        <Marquee className="mb-20">
          {logos?.map((logo) => (
            <div className="block relative h-28 w-36 mx-10" key={logo.id}>
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
        <div className="flex">
          <div className="w-1/2">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              className="h-full pt-swiper"
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
          <div className="w-1/2 pt-4 pb-20 pr-10">
            <div className="font-serif mb-10">
              <span className="font-bold block uppercase text-md text-gray-500 tracking-widest">
                Teaching
              </span>
              <span className="font-bold uppercase text-2xl tracking-wider">
                Web Development
              </span>
            </div>
            <p>
              I also handled 2 sections of “Basics of Web Development” Subject
              in college as a Practice Teacher during my stay at the
              Technological University of the Philippines as part of my Bachelor
              of Technical Teacher Education (BTTE) program. I taught HTML5,
              CSS3 and Basic Javascript on Bachelor of Science in Industrial
              Education (BSIE) students as kind of like my On-the-job training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
