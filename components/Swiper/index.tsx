/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper';
import styles from '../../styles/modules/Swiper.module.scss';
import Image from 'next/image';

export interface DataSwiper {
  MainImageUrl: string;
  Url: string;
  AssetName?: string;
  AltText?: string;
}

const SwiperComponent = ({ items = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className={styles['gallery']}>
      <div className={styles['gallery__main']}>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation, Thumbs]}
          className={styles['gallery__main__wrapper']}
          // lazy={{
          //   enabled: true,
          //   loadOnTransitionStart: true,
          // }}
          navigation={{
            nextEl: '.slider__nextButton',
            prevEl: '.slider__prevButton',
          }}
          autoplay
        >
          {items.map((i: DataSwiper, index) => {
            return (
              <SwiperSlide key={`item-slide${index}`}>
                <div className={styles['gallery__main__wrapper__item']}>
                  <Image
                    src={i.Url}
                    alt={i.AltText || ''}
                    width={700}
                    height={700}
                    priority
                  />
                  {/* <img src={i.Url} alt={i.AltText} /> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className={`slider__prevButton ${styles['button']} ${styles['gallery__main__prevButton']}`}
        >
          <svg viewBox="0 0 54.4 54.4" className={styles['gallery-chevron']}>
            <circle cx="27.2" cy="27.2" r="27.2"></circle>
            <path
              d="M32.06 15.05L20 26.55a.94.94 0 00-.09 1.29l.09.09 12.1 11.5 1.59-1.38-11.41-10.81 11.37-10.81z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button
          className={`slider__nextButton ${styles['button']} ${styles['gallery__main__nextButton']}`}
        >
          <svg viewBox="0 0 54.09 54.09" className={styles['gallery-chevron']}>
            <circle cx="27.05" cy="27.05" r="27.05"></circle>
            <path
              d="M23.12 14.71l11 11.5a1 1 0 01.08 1.29l-.08.09-11 11.5-1.44-1.38L32 26.9 21.68 16.09z"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
      <div className={styles['gallery__thumbs']}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={6}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          // lazy={{
          //   enabled: true,
          //   loadOnTransitionStart: true,
          // }}
          navigation={{
            nextEl: '.thumbs__nextButton',
            prevEl: '.thumbs__prevButton',
          }}
        >
          {items.map((i: DataSwiper, index) => {
            return (
              <SwiperSlide
                className={styles['gallery__thumbs__item']}
                key={`item-thumbs${index}`}
              >
                <Image
                  src={i.Url}
                  alt={i.AltText || ''}
                  width={100}
                  height={100}
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`thumbs__prevButton ${styles['button']} ${styles['gallery__thumbs__prevButton']}`}
        >
          <svg viewBox="0 0 54.4 54.4" className={styles['gallery-chevron']}>
            <circle cx="27.2" cy="27.2" r="27.2"></circle>
            <path
              d="M32.06 15.05L20 26.55a.94.94 0 00-.09 1.29l.09.09 12.1 11.5 1.59-1.38-11.41-10.81 11.37-10.81z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button
          className={`thumbs__nextButton ${styles['button']} ${styles['gallery__thumbs__nextButton']}`}
        >
          <svg viewBox="0 0 54.09 54.09" className={styles['gallery-chevron']}>
            <circle cx="27.05" cy="27.05" r="27.05"></circle>
            <path
              d="M23.12 14.71l11 11.5a1 1 0 01.08 1.29l-.08.09-11 11.5-1.44-1.38L32 26.9 21.68 16.09z"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
