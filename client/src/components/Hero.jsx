

// import React, { useEffect } from 'react';
// import { heroImg } from '../images';
// import { ButtonOutline, Button } from "./";
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/auth';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const Hero = () => {
//   const { auth } = useAuth();

//   // Initialize AOS animations
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,  // Animation duration in milliseconds
//       offset: 200,     // Offset from the top
//       easing: 'ease-in-out', // Easing function
//       once: true       // Whether animation should happen only once or every time
//     });
//   }, []);

//   return (
//     <main className="relative">
//       <div className="container mx-auto px-6 py-10 md:py-16 lg:py-24 overflow-x-hidden overflow-y-hidden">
//         <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
//           {/* Heading Section */}
//           <div 
//             className="md:w-1/2 text-center md:text-left"
//             data-aos="fade-right" // AOS fade-right animation
//           >
//             <h1 className="text-white text-5xl lg:text-7xl xl:text-7xl font-bold leading-tight uppercase heading">
//               make <span className="text-blue-400 animate-heading">your</span> <br />
//               day special <br />
//               anytime
//             </h1>
//             <p className="text-gray-300 text-lg md:text-xl mt-4 lg:mt-6 max-w-md mx-auto md:mx-0">
//               Achieve your fitness goals with personalized plans, expert trainers, and a community that supports you!
//             </p>

//             {/* Buttons */}
//             {!auth?.user && (
//               <div className="mt-10 flex justify-center md:justify-start gap-6">
//                 <Link to="/register">
//                   <ButtonOutline text="Sign Up" />
//                 </Link>
//                 <Link to="/login">
//                   <Button text="Login" />
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Image Section */}
//           <div 
//             className="w-full md:w-1/2"
//             data-aos="fade-up" // AOS fade-up animation for image
//           >
//             <img
//               src={heroImg}
//               alt="hero-img"
//               className="w-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-img"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-gray-500 opacity-100 pointer-events-none z-[-1]"></div>
//     </main>
//   );
// }

// export default Hero;
import { useState, useEffect } from 'react';
import {  trainerImg1 } from '../images';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showBmiModal, setShowBmiModal] = useState(false);
  const [auth, setAuth] = useState({ user: null }); // Mock auth context
  
  // BMI calculation state
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  // Calculate BMI function
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const weightInKg = Number(weight);
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(1));
    }
  };

  // Mock ButtonOutline component
  const ButtonOutline = ({ text, onClick, to }) => (
    <Link 
      to={to}
      onClick={onClick}
      className="border-2 border-blue-400 text-blue-400 font-medium py-3 px-6 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 inline-block"
    >
      {text}
    </Link>
  );

  // Mock Button component
  const Button = ({ text, onClick, to }) => (
    <Link 
      to={to}
      onClick={onClick}
      className="bg-blue-600 text-white font-medium py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 inline-block"
    >
      {text}
    </Link>
  );

  return (
    <main className="relative">
      {/* BMI Calculator Modal */}
      {showBmiModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-blue-500 rounded-xl p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowBmiModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-4">BMI Calculator</h2>
            <p className="text-gray-300 mb-6">Calculate your Body Mass Index to track your fitness journey</p>
            
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Height (cm)</label>
              <input 
                type="number" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white" 
                placeholder="Enter your height" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Weight (kg)</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white" 
                placeholder="Enter your weight" 
              />
            </div>
            
            {bmiResult && (
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Your BMI: {bmiResult}</h3>
                <p className="text-gray-300">
                  {bmiResult < 18.5 && "Underweight - Consider consulting a nutritionist for a healthy weight gain plan."}
                  {bmiResult >= 18.5 && bmiResult < 25 && "Normal weight - Keep up your healthy habits!"}
                  {bmiResult >= 25 && bmiResult < 30 && "Overweight - Consider adding more physical activity to your routine."}
                  {bmiResult >= 30 && "Obese - Please consult with healthcare professionals for personalized advice."}
                </p>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <button 
                onClick={calculateBMI}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
              >
                Calculate BMI
              </button>
              
              <div className="flex items-center">
                {/* Replaced Google Gemini image with an SVG icon */}
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M10 8.5a3.5 3.5 0 0 1 5 0V12a3.5 3.5 0 0 1-7 0"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-10 md:py-16 lg:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          {/* Heading Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-white text-5xl lg:text-7xl xl:text-7xl font-bold leading-tight uppercase">
              make <span className="text-blue-400 inline-block transform hover:scale-110 transition-transform duration-300">your</span> <br />
              day <span className="text-purple-400">special</span> <br />
              anytime
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mt-4 lg:mt-6 max-w-md mx-auto md:mx-0">
              Achieve your fitness goals with personalized plans, expert trainers, and a community that supports you!
            </p>

            {/* Fixed Buttons */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              {!auth?.user && (
                <>
                  <ButtonOutline text="Sign Up" to="/signup" />
                  <Button text="Login" to="/login" />
                </>
              )}
              
              <button
                onClick={() => setShowBmiModal(true)}
                className="group relative flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <span className="mr-2">BMI Calculator</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20M12 2v20"></path>
                </svg>
              </button>
            </div>
            
            {/* AI integration badge */}
            <div className="mt-6 inline-flex items-center bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full">
              {/* Replaced Google Gemini image with an SVG icon */}
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                  <path d="M10 8.5a3.5 3.5 0 0 1 5 0V12a3.5 3.5 0 0 1-7 0"></path>
                </svg>
              </div>
             <span className="text-gray-300 text-sm">AI-Powered Fitness Analysis</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={trainerImg1}
                alt="hero-img"
                className="w-full rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 z-10 relative"
              />
              
              {/* Image decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur"></div>
              
              {/* Fitness stats mockup */}
              <div className="absolute -bottom-6 right-10 bg-gray-900 bg-opacity-90 border border-blue-500 p-4 rounded-lg shadow-lg transform hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 20V10"></path>
                      <path d="M12 20V4"></path>
                      <path d="M6 20v-6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Weekly Progress</p>
                    <p className="text-white font-bold">+24% Improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-gray-900 opacity-100 pointer-events-none z-[-1]"></div>
    </main>
  );
};

export default Hero;