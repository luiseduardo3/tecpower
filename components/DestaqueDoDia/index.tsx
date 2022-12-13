import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";

export const DestaqueDoDia = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
