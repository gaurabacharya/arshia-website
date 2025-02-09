// PhotoCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './photoCarousel.css'; 

const PhotoCarousel = () => {
  const images = [
    '/images/IMG_2140.jpg',
    '/images/IMG_2956.jpg',
    '/images/IMG_3211.jpg',
    '/images/IMG_3233.jpg',
    '/images/IMG_3386.jpg',
    '/images/IMG_3404.jpg',
    '/images/IMG_7549.jpg',
    '/images/DSC01060.jpg',
    'images/IMG_3428.jpg'
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-text">
        <h1>We have so many beautiful memories</h1>
      </div>

      {/* Image Carousel on the right */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="photo-carousel"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
