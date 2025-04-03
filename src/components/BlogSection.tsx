"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Wander Often Wonder Alway Flight Comfort",
    image: "/blog-1.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "wander-often-wonder"
  },
  {
    id: 2,
    title: "10 Common Questions About Applying for an Indian Visa from Australia",
    image: "/blog-2.png",
    date: "October 19, 2022",
    author: "admin",
    slug: "common-questions-visa",
    featured: true
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
  }
];

const BlogSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-sm text-[#022169] uppercase font-bold flex items-center mb-2.5">
              BLOG OR RESOURCES
              <Image
                className="ml-1"
                src="/about_icon.png"
                width={14}
                height={12}
                alt="icon"
              />
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-[#022169] leading-tight">
              Adventure Awaits Around<br />Every Corner
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex space-x-3">
            <button 
              ref={prevRef}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-[#E4022B]"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 1L1 5L5.5 9" stroke="#E4022B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E4022B] text-white"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 5L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Posts Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onInit={(swiper) => {
            // Use a proper type cast without 'any'
            const swiperInstance = swiper as unknown as SwiperType;
            
            if (prevRef.current && nextRef.current) {
              // Set the navigation elements safely
              Object.assign(swiperInstance.params.navigation || {}, {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              });
              
              // Initialize and update navigation
              swiperInstance.navigation.init();
              swiperInstance.navigation.update();
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} className="py-10">
              <div className={`bg-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden h-full ${post.featured ? 'border border-[#E4022B]' : ''}`}>
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {post.date}
                    </div>
                    <div className="flex items-center ml-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      By {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#022169] mb-4">
                    {post.title}
                  </h3>
                  
                  <Link href={`/blog/${post.slug}`} legacyBehavior>
                    <a className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${post.featured ? 'bg-[#E4022B] text-white' : 'border border-[#022169] text-[#022169]'}`}>
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;