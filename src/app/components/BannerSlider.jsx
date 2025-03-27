"use client"; 

import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function BannerSlider() {
    return (
        <div className="w-full bg-gray-100">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 1800, disableOnInteraction: false }}
            >
                <SwiperSlide className='relative h-[400px]'>
                    <img
                        src="https://i.ibb.co.com/vxZyhmc5/three-1.png"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide className='relative h-[400px]'>
                    <img
                        src="https://i.ibb.co.com/WNcXBdsf/two-1.png"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide className='relative h-[400px]'> 
                    <img
                        src="https://i.ibb.co.com/CKFMNVWn/one-1.png"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
