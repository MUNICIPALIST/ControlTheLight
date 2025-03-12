import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import SCSS module
import styles from "./style.module.scss";

const projects = [
  {
    id: 1,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/1.jpg",
    title: "Москва-Сити, Башня Нева",
    project: "Рулонные шторы с тканью димаут (полупрозрачные), 15 штук",
    motor: "Somfy Sonesse 40 RTS (радио)",
    time: "10 дней",
  },
  {
    id: 2,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/2.jpg",
    title: "Центральный офис Теле-2",
    project: "Рулонные шторы в белой, скрытной кассете",
    motor: "Louvolite (Англия), Somfy (Франция)",
    time: "13 дней",
  },
  {
    id: 3,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/3.jpg",
    title: "Ленинградская область, г. Пушкин",
    project: "Рулонные шторы + профильные карнизы на треугольные окна",
    motor: "Dooya (Китай), Профиль Forest (Голландия)",
    time: "9 дней",
  },
  {
    id: 4,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/4.jpg",
    title: "МО, КП Малаховка",
    project: "Рулонные шторы, высотой 6 м, на окна сложной формы",
    motor: "Somfy Sonesse 50 RTS",
    time: "7 дней",
  },
  {
    id: 5,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/5.jpg",
    title: "Санкт-Петербург, ЖК Петровский квартал",
    project: "Кассетные рулонные шторы на 20 окон",
    motor: "Elero RolTop 868 (Германия)",
    time: "12 дней",
  },
  {
    id: 6,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/6.jpg",
    title: "Новосибирск, офис IT-компании",
    project: "Моторизированные римские шторы в переговорные",
    motor: "Somfy Sonesse 30 RTS",
    time: "8 дней",
  },
  {
    id: 7,
    image:
      "https://alfientbucket.fra1.cdn.digitaloceanspaces.com/control-the-light/7.jpg",
    title: "Краснодар, загородный дом",
    project: "Шторы блэкаут с электроприводом, 10 окон",
    motor: "Dooya DM35 (Китай)",
    time: "6 дней",
  },
];

export default function CaseSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={`${styles.sliderContainer} container mx-auto px-[10%]`}>
      <Swiper
        modules={[Navigation, EffectCreative]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={800}
        onSwiper={setSwiperInstance}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="py-8"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={`${styles.slide} bg-white`}>
              <div className={styles.imageContainer}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover"
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
                    <span className={styles.label}>Мотор:</span> {project.motor}
                  </p>
                  <p className={styles.details}>
                    <span className={styles.label}>Срок изготовления:</span>{" "}
                    {project.time}
                  </p>
                </div>
                <a href="#" className={styles.moreLink}>
                  Подробнее <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
  );
}
