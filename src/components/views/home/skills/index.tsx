import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { LogoProps } from "../../../../types/logos";

const Skills = ({ logos }: LogoProps) => {
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
        <p className="w-2/3 mx-auto mb-12 text-center">
          I have tried different technologies and I am confident in my ability
          to adapt fast depending on the requirements of a project. Programming
          languages and frameworks are just tools designed to solve different
          problems.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={6}
          speed={4000}
          allowTouchMove={false}
          preloadImages={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {logos?.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="block relative h-28">
                <Image
                  alt="logo"
                  src={logo.src}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
