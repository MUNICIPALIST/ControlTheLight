import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SkeletonImage from "./skeletonImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./style.module.scss";

const API_URL = "/api/photos";

const SwiperSlider = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchAllSlides = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
      console.log(response);
      if (Array.isArray(response.data) && response.data.length > 0) {
        setSlides(response.data);
      } else {
        setError("Не удалось загрузить данные");
      }
    } catch (err) {
      console.error("Ошибка загрузки слайдов:", err);
      setError("Ошибка загрузки слайдов");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllSlides();
  }, [fetchAllSlides]);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  if (isLoading) {
    return (
      <div className={`relative ${styles.slider} top-[50%] h-[100%]`}>
        <div className={`${styles.slider__container} relative`}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={`${styles.skeleton_slide}`}>
              <SkeletonImage className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-red-100 text-red-800 p-4 rounded">
        <p>{error}</p>
      </div>
    );
  }

  if (!slides.length) {
    return <p className="text-center py-10">Нет доступных слайдов</p>;
  }

  return (
    <div className={`relative ${styles.slider_wrapper}`}>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={1}
        loop={true}
        speed={800}
        spaceBetween={-100}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        coverflowEffect={{
          depth: 0,
          modifier: 1,
          rotate: 0,
          scale: 0.7,
          stretch: 0,
          slideShadows: false,
        }}
        className={styles.custom_swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className={`${styles.custom_slide} ${
              index === activeIndex ? styles.custom_slide_active : ""
            }`}
          >
            <img
              src={slide.photoUrl || "/placeholder.svg"}
              alt={`Slide ${slide.id}`}
              className={styles.slide_image}
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={handlePrev}
        className={`${styles.slider__button} ${styles["slider__button--prev"]} `}
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={handleNext}
        className={`${styles.slider__button} ${styles["slider__button--next"]} `}
      >
        <FiChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

export default SwiperSlider;
