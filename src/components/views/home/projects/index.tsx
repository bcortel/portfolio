import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs } from "swiper";

SwiperCore.use([EffectFade, Navigation, Thumbs]);

const Projects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="py-10">
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
        <div className="relative h-96">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            className="project-swiper h-full"
            grabCursor={true}
            effect="fade"
          >
            <SwiperSlide>
              <div className="flex h-full">
                <div className="w-1/2"></div>
                <div className="w-1/2 relative flex justify-center items-center bg-white">
                  <div className="block ">
                    <Image
                      src="/static/images/fixedit.png"
                      alt="fixedit"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full">
                <div className="w-1/2"></div>
                <div className="w-1/2 relative flex justify-center items-center bg-white h-full">
                  <div className="block h-full">
                    <Image
                      src="/static/images/quickcheck.png"
                      alt="qc"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full">
                <div className="w-1/2"></div>
                <div className="w-1/2 relative flex justify-center items-center bg-white">
                  <div className="block">
                    <Image
                      src="/static/images/sarinv.png"
                      alt="intrinsic"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full">
                <div className="w-1/2"></div>
                <div className="w-1/2 relative flex justify-center items-center bg-white h-full">
                  <div className="block h-full">
                    <Image
                      src="/static/images/quickcheck.png"
                      alt="qc"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-1/2 absolute bottom-0 left-0 bg-white">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              className="project-swiper-thumb"
            >
              <SwiperSlide>
                <div className="border-solid border-2">
                  <Image
                    src="/static/images/fixedit.png"
                    alt="intrinsic"
                    width={300}
                    height={150}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-solid border-2">
                  <Image
                    src="/static/images/quickcheck.png"
                    alt="intrinsic"
                    width={300}
                    height={150}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-solid border-2">
                  <Image
                    src="/static/images/sarinv.png"
                    alt="intrinsic"
                    width={300}
                    height={150}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-solid border-2">
                  <Image
                    src="/static/images/quickcheck.png"
                    alt="intrinsic"
                    width={300}
                    height={150}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
