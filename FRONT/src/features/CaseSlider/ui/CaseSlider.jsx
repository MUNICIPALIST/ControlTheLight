"use client";

import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import SCSS module
import styles from "./style.module.scss";

const API_URL = "/api/cases";

export default function CaseSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setSlides(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error loading slides:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Initialize navigation when swiper is created
  useEffect(() => {
    if (
      swiperInstance &&
      navigationPrevRef.current &&
      navigationNextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Update navigation when slides are loaded
  useEffect(() => {
    if (swiperInstance && slides.length > 0 && !isLoading) {
      // Wait for the next render cycle to ensure slides are rendered
      setTimeout(() => {
        swiperInstance.update(); // Update swiper dimensions
        swiperInstance.navigation.update(); // Update navigation

        // Force active slide detection by moving to the first slide and back
        swiperInstance.slideTo(1, 0, false);
      }, 100);
    }
  }, [slides, isLoading, swiperInstance]);

  // Handle slide change to track active index
  const handleSlideChange = (swiper) => {
    // For loop mode, we need to use realIndex
    setActiveIndex(swiper.realIndex);
  };

  // Function to determine if a slide should have the active style
  const shouldBeActive = (index) => {
    if (!swiperInstance) return false;

    // In loop mode, we need to handle the case where the active slide is the last one
    const totalSlides = slides.length;
    const nextIndex = (activeIndex + 1) % totalSlides;

    return index === nextIndex;
  };

  if (isLoading) {
    return (
      <div className={styles.sliderContainer}>
        <div className="w-full flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sliderContainer}>
      <div className="w-full relative">
        {slides.length > 0 && (
          <Swiper
            modules={[Navigation, EffectCreative]}
            spaceBetween={20}
            slidesPerView={1}
            initialSlide={1}
            loop={true}
            speed={800}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="py-8"
          >
            {slides.map((project, index) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <div
                    className={`${styles.slide} ${
                      shouldBeActive(index, isActive) ? styles.activeSlide : ""
                    }`}
                  >
                    <div className={styles.imageContainer}>
                      <img
                        src={project.photoUrlCase || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className={styles.contentContainer}>
                      <h3 className={styles.title}>{project.title}</h3>
                      <div className="space-y-2">
                        <p className={styles.details}>
                          <span className={styles.label}>Проект:</span>{" "}
                          {project.project}
                        </p>
                        <p className={styles.details}>
                          <span className={styles.label}>Мотор:</span>{" "}
                          {project.motor}
                        </p>
                        <p className={styles.details}>
                          <span className={styles.label}>
                            Срок изготовления:
                          </span>{" "}
                          {project.time}
                        </p>
                      </div>
                      <a href="#" className={styles.moreLink}>
                        Подробнее <span className={styles.arrow}>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button
          ref={navigationPrevRef}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Previous slide"
        >
          <FiChevronLeft className="h-6 w-6" />
        </button>
        <button
          ref={navigationNextRef}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Next slide"
        >
          <FiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
