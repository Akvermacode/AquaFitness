import React, { useEffect } from 'react';
import Heading from './Heading';
import { Trainer } from ".";
import { trainerImg1, trainerImg2, trainerImg3, trainerImg4 } from "../images";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Trainers = () => {
  // Initialize AOS - keeping functionality the same
  useEffect(() => {
    AOS.init({ duration: 2000, offset: -200, easing: "ease-in-out" });
  }, []);

  // Indian trainer names and updated ages within 30-39 range
  const trainers = [
    { img: trainerImg1, alt: "trainer-1", id: "1", name: "Rahul", age: "35", specialty: "Strength & Conditioning", animation: "fade-up", delay: "100" },
    { img: trainerImg2, alt: "trainer-2", id: "2", name: "Tejas", age: "32", specialty: "Yoga & Flexibility", animation: "fade-in", delay: "300" },
    { img: trainerImg3, alt: "trainer-3", id: "3", name: "Vikram", age: "38", specialty: "Functional Training", animation: "fade-down", delay: "500" },
    { img: trainerImg4, alt: "trainer-4", id: "4", name: "Akon", age: "30", specialty: "Nutrition & Weight Loss", animation: "zoom-in", delay: "700" }
  ];

  return (
    <section className='pt-12 pb-20 relative'>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900 to-transparent opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Content with improved container styling */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div data-aos="fade-up" className="mb-12">
            <Heading name="Meet Our Expert Trainers" />
            <p className="text-gray-300 text-center max-w-2xl mx-auto mt-4">
              Our certified trainers bring years of experience and specialized knowledge to help you achieve your fitness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div 
                key={trainer.id} 
                data-aos={trainer.animation} 
                data-aos-delay={trainer.delay}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl transform rotate-6 scale-[0.97] opacity-50 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 -z-10"></div>
                <div className="bg-gray-900 rounded-xl p-4 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-900/20 h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                    <img 
                      src={trainer.img} 
                      alt={trainer.alt}
                      className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{trainer.name}</h3>
                          <p className="text-gray-300 text-sm">Age: {trainer.age}</p>
                        </div>
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Top Rated</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">{trainer.specialty}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <a 
                        href={`/trainer-detail/${trainer.id}`} 
                        className="text-blue-500 hover:text-blue-400 font-medium text-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/trainers" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              View All Trainers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Keep the original background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-green-300 opacity-80 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default Trainers;
