"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Wander Often Wonder Alway Flight Comport",
    image: "/blog-1.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "wander-often-wonder",
  },
  {
    id: 2,
    title: "10 Common Questions About Applying for an Indian Visa from Australia",
    image: "/blog-2.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "common-questions-visa",
  },
  {
    id: 3,
    title: "Everything You Need to Know About study Visa for India from Australia",
    image: "/blog-3.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "study-visa-guide"
  },
  {
    id: 4,
    title: "Planning Your First Trip to India: Essential Tips",
    image: "/blog-1.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "first-trip-india"
  },
  {
    id: 5,
    title: "Planning Your First Trip to India: Essential Tips",
    image: "/blog-1.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "first-trip-india"
  },
  {
    id: 6,
    title: "Planning Your First Trip to India: Essential Tips",
    image: "/blog-1.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "first-trip-india"
  }
];

const BlogSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Handle navigation clicks manually
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="py-16 bg-white" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-[#022169] uppercase font-bold flex items-center mb-2">
              BLOG OR RESOURCES
              <svg className="ml-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="#E4022B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#022169] leading-tight">
              Adventure Awaits Around<br />Every Corner
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex space-x-3">
            <button 
              ref={prevRef}
              onClick={handlePrevClick}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-[#E4022B] hover:bg-pink-100 transition"
              aria-label="Previous slide"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="#E4022B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              ref={nextRef}
              onClick={handleNextClick}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E4022B] text-white hover:bg-red-600 transition"
              aria-label="Next slide"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Posts Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".blog-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper as unknown as SwiperType);
              setActiveIndex(swiper.realIndex);
            }}
            className="blog-swiper"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={post.id} className="py-6">
                <div 
                  className="bg-white rounded-lg overflow-hidden h-full transition-all duration-300 shadow-md border border-gray-100 swiper-slide-content"
                >
                  <div className="relative h-52 md:h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        By {post.author}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#022169] mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium transition-colors border border-[#022169] text-[#022169] swiper-slide-button"
                    >
                      Read More
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom pagination */}
          <div className="blog-pagination flex justify-center mt-8"></div>
          
        </div>
      </div>

      {/* Custom CSS for styling */}
      <style jsx global>{`
        .blog-swiper .swiper-slide {
          transition: all 0.3s ease;
          height: auto;
        }
        
        .blog-pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .blog-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 4px;
          background-color: #ccc;
          opacity: 0.5;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .blog-pagination .swiper-pagination-bullet-active {
          background-color: #E4022B;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        
        .swiper-slide-active .swiper-slide-content {
          border-color: #E4022B !important;
          border-width: 2px !important;
        }
        
        .swiper-slide-active .swiper-slide-button {
          background-color: #E4022B !important;
          color: white !important;
          border-color: #E4022B !important;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;