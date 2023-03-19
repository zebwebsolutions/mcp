import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';

import { Navigation, Pagination } from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ListingHeader(props) {
    return(
        <>
            <div className='mareagradient w-full px-4'>
                <div className="flex justify-between content-wrap items-end py-10 max-sm:items-center">
                    <div className='max-sm:pr-10'>
                        <h3 className="mb-3 max-sm:text-2xl">{props.name}</h3>
                        <address>{props.area && props.area.areaName}</address>
                    </div>
                    <div>
                        <h3 className="mareacolor m-0 max-sm:text-xl">AED {props.price}</h3>
                    </div>
                </div>
            </div>
            <div className='w-full py-10'>
                <Swiper 
                    centeredSlides={true} 
                    navigation 
                    slidesPerView={2} 
                    loop={true} 
                    pagination={{clickable: true}} 
                    modules={[Navigation, Pagination]} 
                    spaceBetween={50} 
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 2
                        }
                    }}
                >
                    <SwiperSlide>
                    <div className='w-full'>
                        <Image src={placeholderPic} alt="slider image" className='w-full' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-full'>
                        <Image src={placeholderPic} alt="slider image" className='w-full' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-full'>
                        <Image src={placeholderPic} alt="slider image" className='w-full' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-full'>
                        <Image src={placeholderPic} alt="slider image" className='w-full' />
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}