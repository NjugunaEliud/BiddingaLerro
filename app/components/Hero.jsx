"use client";

import Image from "next/image";
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="bg-blue-50 bg-opacity-20">
        <div className="container mx-auto  px-4 pb-16 mb-20 md:mb-0">
          <div className="flex flex-wrap -mx-4 md:mt-10">
            <div className="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
              <div className="relative h-full bg-white overflow-hidden">
                <img
                  class="absolute -right-16 top-0 w-full h-full object-cover"
                  src="/hero-bg.jpg"
                  alt=""
                />
                {/* <Image
                  className="absolute right-0 top-0 w-1/2 "
                  src="/hero-bg.jpg"
                  alt="logo"
                  fill
                  objectFit="cover"
                /> */}
                <div className="hidden lg:flex absolute right-0 top-1/2 pr-10 transform -translate-y-1/2 flex-col items-center">
                  <span className="mb-5 font-bold font-heading">~</span>
                  <div className="mb-5 h-16 w-px bg-gray-100"></div>
                  <button className="mb-5">
                    <Image src="/circle.svg" alt="" width={100} height={100} />
                  </button>
                  <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <div className="h-16 w-px bg-gray-100"></div>
                </div>
                <div className="relative max-w-xl md:pl-6 lg:pl-20 pt-32 ">
                  <div className="pl-6 md:pl-0">
                    <span className="px-3  py-1 border border-blue-500 rounded-full text-xs text-gray-900 font-bold font-heading uppercase">
                      Bestseller
                    </span>
                  </div>
                  <div className="bg-black/20 md:bg-transparent pl-6 pb-2 md:pl-0">
                    <h2 className="mt-6 mb-8 text-4xl lg:text-5xl font-bold font-heading">
                      {/* <span className="md:text-gray-900 text-white">Current </span> */}
                      <span className="text-yellow-500">Auctions</span>
                    </h2>
                    <p className="md:mb-20 mb-10 text-lg  md:text-gray-900 text-white">
                      Bid Now at a cheaper price!
                    </p>
                    <Link
                      className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                      href="/shop"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="lg:h-60 lg:w-96 w-full h-full relative mb-6">
                <Image
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl border-4 border-blue-400"
                  src="/sales/sale.jpg"
                  alt="banner"
                />
              </div>
              <div className="lg:h-60 lg:w-96 w-full h-40 relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl border-4 border-blue-400"
                  src="/bike.jpg"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-12  bg-gray-50 ">
          <div className="container mx-auto px-4 pt-6 md:pt-0">
            <div className="flex flex-wrap items-center relative">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 6,
                  },
                }}
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
              >
                <div className="  md:w-1/12 px-4 ">
                  <div className="  swiper-button-prev md:flex mx-auto flex-shrink-0 items-center justify-center w-12 h-12 bg-orange-300 hover:bg-orange-400 rounded-md"></div>
                </div>
                <div className="w-full md:w-10/12 px-4 mb-6">
                  <div className="flex flex-wrap mx-4">
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/category/headphone-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/category/slider-img-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/cpu-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/blutooth-4.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/ipad-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/mobile-5.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/category/headphone-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/category/slider-img-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/cpu-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/blutooth-4.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/ipad-1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 px-4 mb-6">
                        <div className="flex relative mx-auto h-40 w-40 px-2 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
                          <Image
                            className="mx-auto"
                            src="/mobile-5.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>

                <div className="  md:w-1/12 px-4 ">
                  <div className="swiper-button-next flex-shrink-0 flex mx-auto items-center justify-center w-12 h-12 bg-blue-300 hover:bg-blue-400 rounded-md"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
