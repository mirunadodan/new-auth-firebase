import React, { useRef, useState } from 'react';
import products from '../products.json';
import '../style/homecarousel.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

function HomeCarousel() {
  const productCarousel=products.shoes.items;

  return (
    <div>
      <Swiper className='carousel'
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
         <SwiperSlide className='carousel__card'>
         <img className="carousel__img" src='https://images.pexels.com/photos/3076770/pexels-photo-3076770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
        <SwiperSlide className='carousel__card'>
          <img className="carousel__img" src='https://images.pexels.com/photos/15357759/pexels-photo-15357759/free-photo-of-standing-brunette-woman-wearing-biker-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
        <SwiperSlide className='carousel__card'>
          <img className="carousel__img" src='https://images.pexels.com/photos/1957154/pexels-photo-1957154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
        <SwiperSlide className='carousel__card'>
          <img className="carousel__img" src='https://images.pexels.com/photos/3822943/pexels-photo-3822943.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
        <SwiperSlide className='carousel__card'>
          <img className="carousel__img" src='https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
        <SwiperSlide className='carousel__card'>
          <img className="carousel__img" src='https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          {/* <p className='carousel__title'>{productCarousel[0].name}</p> */}
          <button className='carousel__btn btn'>Shop outfit</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

  export default HomeCarousel;