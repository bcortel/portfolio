import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Navigation, Autoplay } from "swiper";
import { ProjectSlide } from "../../../slide";
import { ProjectProps } from "../../../../types/projects";
import { ProjectSliderThumb } from "../../../sliderThumb";

const Projects = ({ projects }: ProjectProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="py-10 pb-16" id="projects">
      <div className="container mx-auto">
        <header className="text-center mb-14">
          <h2 className="font-serif">
            <span className="font-bold block uppercase text-xl text-gray-500 tracking-widest">
              My
            </span>
            <span className="font-bold uppercase text-4xl tracking-wider">
              Projects
            </span>
          </h2>
        </header>
        <div className="relative h-96 ">
          <Swiper
            modules={[EffectFade, Thumbs, Autoplay]}
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            className="project-swiper h-full"
            effect="fade"
            navigation={false}
            allowTouchMove={false}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
          >
            {projects?.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSlide
                  img={project.img}
                  href={project.href}
                  title={project.title}
                  subTitle={project.subTitle}
                  text={project.text}
                  footerText={project.footerText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-1/2 absolute top-3/4 left-0 bg-white px-6">
            <Swiper
              style={{
                //@ts-ignore
                "--swiper-navigation-color": "#000",
              }}
              modules={[Navigation]}
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              grabCursor={true}
              className="project-swiper-thumb"
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {projects?.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectSliderThumb src={project.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
