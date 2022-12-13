import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";

export const Destaque = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="">Bitcoin</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="">Dolar</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="">Ibovespa</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="">S&p500</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="">Global</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
