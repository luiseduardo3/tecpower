import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <img src="/tmp/noticia1.jpg" />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <img src="/tmp/noticia2.jpg" />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <img src="/tmp/noticia3.jpg" />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <img src="/tmp/noticia4.jpg" />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <img src="/tmp/noticia5.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
