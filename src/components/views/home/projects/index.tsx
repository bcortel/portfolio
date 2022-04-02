import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Navigation, Autoplay } from "swiper";
import { ProjectSlide } from "../../../slide";
import { ProjectProps } from "../../../../types/projects";
import { ProjectSliderThumb } from "../../../sliderThumb";
import SectionHeader from "../../../sectionHeader/sectionHeader";
import { Fade } from "react-awesome-reveal";

const Projects = ({ projects }: ProjectProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="xl:py-10 lg:py-20 py-6 pb-16 outer" id="projects">
      <div className="container mx-auto">
        <Fade direction="up" triggerOnce>
          <SectionHeader
            topTitle="My"
            botTitle="Projects"
            className="mb-14 text-center"
          />
          <div className="relative lg:h-96 h-auto">
            <Swiper
              modules={[EffectFade, Thumbs, Autoplay]}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              className="project-swiper lg:h-full h-auto"
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
            <div className="lg:w-1/2 lg:absolute top-full xl:top-3/4 left-0 bg-white px-6">
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
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
