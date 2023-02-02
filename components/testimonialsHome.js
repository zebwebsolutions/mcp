import React, { useCallback, useRef } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return(
    <>
        <div className='mareacolorbg2 w-full mt-10 pt-10'>
            <div className='content-wrap md:flex md:justify-between items-center px-4'>
                <div>
                    <h2 className='text-lg text-slate-500'>Testimonials</h2>
                    <h3>What Our Clients Say About Us</h3>
                </div>
                <div className='space-y-2'>
                    <button value="previous" ref={prevRef} className="text-3xl w-[42px] h-[42px] border border-slate-400 rounded-full mr-3">&lt;</button>
                    <button value="next" ref={nextRef} className="text-3xl w-[42px] h-[42px] border border-slate-400 rounded-full pl-1">&gt;</button>
                </div>
            </div>
        </div>
        <div className="bg-[#e8f6f6] w-full py-10 mb-10 flex">
            <Swiper 
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }} 
            slidesPerView={2} 
            //spaceBetween={50} 
            //centeredSlides={true} 
            navigation={true} 
            modules={[Navigation]} 
            loop={true} 
            className="mySwiper"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 40,
                }
            }}
            >
                <SwiperSlide>
                    <div className="grid1 px-4">
                        <div className="slide my-10">
                            <div className="lg:flex max-w-[920px] md:-right-32 bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide my-7">
                            <div className="lg:flex max-w-[920px] bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                    </div>`
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid1 mx-auto px-4">
                        <div className="slide my-10">
                            <div className="lg:flex max-w-[920px] md:-right-32 bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide my-7">
                            <div className="lg:flex max-w-[920px] bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid1 mx-auto px-4">
                        <div className="slide my-10">
                            <div className="lg:flex max-w-[920px] md:-right-32 bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide my-7">
                            <div className="lg:flex max-w-[920px] bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid1 mx-auto px-4">
                        <div className="slide my-10">
                            <div className="lg:flex max-w-[920px] md:-right-32 bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide my-7">
                            <div className="lg:flex max-w-[920px] bg-white p-5 rounded-xl relative mx-auto">
                                <div className="basis-1/3 lg:pr-8 mb-4 lg:mb-0">
                                    <img src="placeholder.png" className="h-full w-full" />
                                </div>
                                <div className="basis-2/3">
                                    <h3 className="text-2xl mb-0">William Johnson</h3>
                                    <div className="mb-3">Senior User Researcher</div>
                                    <p className="font-light">Properly makes it easier for me to find a strategic house, the buying process is very easy and properly helps the process until the house can be occupied”</p>
                                    <div className="absolute top-3 right-3 text-sm mareacolorbg2 rounded-2xl pr-4 pl-3"><span className=" text-yellow-400 text-xl align-middle">★</span> 4.5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
    )
}