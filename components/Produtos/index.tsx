import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
import Image from "next/image";

export const Produtos = () => {
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
                src="/tmp/produtos/produto1.jpg"
                alt=""
                width={100}
                height={100}
              />
              R$1200
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/produtos/produto2.jpg"
                alt=""
                width={120}
                height={120}
              />
              R$1200
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/produtos/produto3.jpg"
                alt=""
                width={120}
                height={80}
              />
              R$1200
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/produtos/produto4.jpg"
                alt=""
                width={120}
                height={100}
              />
              R$1200
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            <a href="#">
              <Image
                src="/tmp/produtos/produto5.jpg"
                alt=""
                width={100}
                height={100}
              />
              R$1200
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
