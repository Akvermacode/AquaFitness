import React, { useEffect } from 'react';
import { Review, Heading } from "./";
import { review1, review2, review3, review4 } from "../images";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: -50,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  // Indian names instead of original names
  const reviewers = [
    { img: review1, name: "Ayush" },
    { img: review2, name: "Aditya" },
    { img: review3, name: "Himashu" },
    { img: review4, name: "Abhishek" }
  ];

  return (
    <section className='py-16 relative overflow-hidden'>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div 
          className="mb-12 text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Heading name="What Our Clients Say" />
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Real stories from real people who have experienced our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reviewers.map((review, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="transform transition-all duration-300 hover:translate-y-[-8px]"
            >
              <Review 
                img={review.img} 
                alt={`review-${index + 1}`} 
                name={review.name} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 opacity-90 pointer-events-none z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-teal-300 blur-3xl opacity-20"></div>
    </section>
  );
};

export default Reviews;

