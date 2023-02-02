import React, { useRef } from "react";

import Image from "next/image";
import placeholderPic from '../public/placeholder.png';

import { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


export default function TopLocations() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <div className="flex justify-between flex-wrap py-10 my-10 content-wrap">
                <div className="basis-1/4">
                    <h3 className="font-semibold mb-3">Top Locations</h3>
                    <h3 className="font-light">in Dubai</h3>
                    <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="flex">
                        <a href="#" ref={prevRef} className="mr-4 btn-primary rounded-none"> &lt; </a>
                        <a href="#" ref={nextRef} className="btn-primary rounded-none"> &gt; </a>
                    </div>
                </div>
                <div className="basis-3/4">
                    <Swiper
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }} 
                        spaceBetween={50}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="bg-[#333] max-w-[250px] h-96">
                                <Image src={placeholderPic} alt="slider pic" />
                                slide1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#333] max-w-[250px] h-96">
                                <Image src={placeholderPic} alt="slider pic" />
                                slide1
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}