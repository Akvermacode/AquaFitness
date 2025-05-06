
// // aos
// import React, { useEffect } from 'react';
// import { Heading, FaqComponent } from ".";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const FAQ = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,       // Duration of the animation
//       offset: 100,          // Delay the animation until the element is in the viewport
//       easing: 'ease-in-out', // Controls the smoothness of the animation
//       once: true,           // Whether animation should happen only once
//       mirror: false         // Whether elements should animate out while scrolling past them
//     });
//   }, []);

//   return (
//     <section className='pt-10 relative'>
//       <Heading name="Frequently Asked Questions" />

//       <div className="container mx-auto py-10 px-6">
//         <div className="flex flex-col">
//           <div data-aos="fade-up">
//             <FaqComponent
//               question="How To SignUp And Login?"
//               answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae ratione, porro consectetur doloremque rerum."
//             />
//           </div>

//           <div data-aos="fade-up" data-aos-delay="100">
//             <FaqComponent
//               question="What Is The Fees Of The Plans?"
//               answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae ratione, porro consectetur doloremque rerum."
//             />
//           </div>

//           <div data-aos="fade-up" data-aos-delay="200">
//             <FaqComponent
//               question="Is The Fees Refundable?"
//               answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae ratione, porro consectetur doloremque rerum."
//             />
//           </div>

//           <div data-aos="fade-up" data-aos-delay="300">
//             <FaqComponent
//               question="Is It Reliable To Buy Our Packs?"
//               answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae ratione, porro consectetur doloremque rerum."
//             />
//           </div>

//           <div data-aos="fade-up" data-aos-delay="400">
//             <FaqComponent
//               question="How Much Time Does It Take to Complete A Pack?"
//               answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae ratione, porro consectetur doloremque rerum."
//             />
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-amber-300 opacity-80 pointer-events-none z-[-1]"></div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useEffect } from 'react';
import { Heading, FaqComponent } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,       // Duration of the animation
      offset: 100,          // Delay the animation until the element is in the viewport
      easing: 'ease-in-out', // Controls the smoothness of the animation
      once: true,           // Whether animation should happen only once
      mirror: false         // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className='pt-10 relative bg-gradient-to-b from-indigo-900 via-blue-900 to-teal-800 text-white min-h-[600px]'>
      <Heading name="Frequently Asked Questions" />

      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col space-y-6">
          <div data-aos="fade-up" className="bg-white bg-opacity-20 rounded-lg p-5 text-gray-900">
            <FaqComponent
              question="How To Sign Up And Login?"
              answer="To sign up, click on the 'Sign Up' button on the homepage, fill in your details, and verify your email. To log in, use your registered email and password."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="bg-white bg-opacity-20 rounded-lg p-5 text-gray-900">
            <FaqComponent
              question="What Are The Fees For The Plans?"
              answer="Our plans start at $10 per month for basic access, with premium plans available at ₹500 and ₹5000 per month, offering additional features."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-white bg-opacity-20 rounded-lg p-5 text-gray-900">
            <FaqComponent
              question="Is The Fees Refundable?"
              answer="Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a refund within the first 30 days."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="bg-white bg-opacity-20 rounded-lg p-5 text-gray-900">
            <FaqComponent
              question="Is It Reliable To Buy Our Packs?"
              answer="Absolutely! We have a secure payment system and thousands of satisfied customers who trust us for their needs."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="bg-white bg-opacity-20 rounded-lg p-5 text-gray-900">
            <FaqComponent
              question="How Much Time Does It Take to Complete A Pack?"
              answer="The time to complete a pack varies based on the complexity of the tasks. On average, it takes about 1-2 weeks to finish a pack."
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-800 to-teal-700 opacity-90 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default FAQ;
