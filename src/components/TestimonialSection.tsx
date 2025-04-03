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
    text: "The service was outstanding. I got my visa process done seamlessly and quickly. Highly recommended for students looking for hassle-free processing.",
    name: "Rahul Mehta",
    role: "Student",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
  {
    text: "Krishna was very helpful in getting my IDLV done. He is genuinely interested in helping people and this shows in his work. Very methodical and prompt! Highly recommended.",
    name: "Kritika Sharma",
    role: "Student",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50" id="testimonial">
      <div className="container mx-auto px-6">
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

        {/* Swiper Slider */}
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
              <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white">
                {/* Left side: Testimonial content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-gray-700 text-lg mb-6">
                    {testimonial.text}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center mt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-blue-900 font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Custom Navigation Buttons */}
                  <div className="flex mt-8 space-x-2">
                    <button className="swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#E4022B] hover:bg-gray-200">
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

                {/* Right side: Background Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src={testimonial.bgImage}
                    alt="Student Testimonial"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination mt-6"></div>
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