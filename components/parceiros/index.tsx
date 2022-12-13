import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
import Image from "next/image";

export const Parceiros = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/lojas/loja1.jpg"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/lojas/loja2.jpg"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image src="/tmp/lojas/hv.jpg" alt="" width={200} height={200} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/lojas/carrefour.jpg"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/lojas/atacadao.jpg"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image src="/tmp/lojas/ted.jpg" alt="" width={200} height={200} />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
