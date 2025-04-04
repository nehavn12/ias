"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    text: "Krishna was very helpful in getting my IDLV done. He is genuinely interested in helping people and this shows in his work. Very methodical and prompt! Highly recommended.",
    name: "Kritika Sharma",
    role: "Student",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
  {
    text: "The service was outstanding. I got my visa process done seamlessly and quickly. Highly recommended for students looking for hassle-free processing.",
    name: "Rahul Mehta",
    role: "Student",
    image: "/kritika_sharma.png", // You might want to change this to Rahul's image
    bgImage: "/testimonials.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3F9FF]" id="testimonial">
      <div className="container mx-auto px-6 max-w-[1290px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#022169] uppercase flex items-center justify-center font-bold mb-2.5 tracking-[1.5px]">
            CLIENT TESTIMONIALS
            <Image
              className="ml-1"
              src="/about_icon.png"
              width={14}
              height={12}
              alt="abouticon"
            />
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-[#022169] leading-tight">
            See What Our Happy
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E4022B]">
            Clients Have to Say!
          </h2>
        </div>

        {/* Testimonial Slider with Overlapping Layout */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex">
                  {/* Right side: Background Image (fixed position) */}
                  <div className="hidden md:block w-1/2 h-96 absolute right-0 rounded-r-lg overflow-hidden">
                    <Image
                      src={testimonial.bgImage}
                      alt="Student Testimonial"
                      fill
                      objectFit="cover"
                      priority
                    />
                  </div>

                  {/* Left side: Testimonial content with overlap */}
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 md:w-7/12 z-10 relative">
                    <p className="text-gray-700 text-lg mb-6">
                      {testimonial.text}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center mt-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="text-[#022169] font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Navigation Buttons - Positioned at bottom */}
                    <div className="flex mt-8 space-x-2">
                      <button className="swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button className="swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-[#E4022B] text-white hover:bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination mt-6"></div>
        </div>
      </div>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }
        
        .testimonial-swiper {
          padding-bottom: 40px;
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #E4022B !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;