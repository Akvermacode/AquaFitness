// import React from 'react';
import { Link } from 'react-router-dom';
import { planImg } from "../images";

const Plan = ({ name, img, alt, id, monthlyPrice, yearlyPrice }) => {
  // Sample features - you can replace these with actual plan features
  const features = [
    "Personalized workout plan",
    "Nutrition guidance",
    "24/7 trainer support",
    "Progress tracking"
  ];

  // Determine which plan to highlight (you can set this based on your logic)
  const isPopular = name === "Premium" || name === "Pro";

  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 text-center relative overflow-hidden border border-gray-100">
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        </div>
      )}

      {/* Plan header */}
      <div className={`w-full p-4 ${isPopular ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
        <h3 className="text-2xl font-extrabold">{name}</h3>
      </div>

      {/* Plan image */}
      <div className="p-3">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={img || planImg} 
            alt={alt || name} 
            className="w-full h-48 object-cover rounded-md" 
          />
        </div>
      </div>

      {/* Pricing section */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex justify-center items-baseline space-x-2">
          <span className="text-3xl font-bold">₹{monthlyPrice}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <div className="mt-1 text-sm text-gray-500">
          or ₹{yearlyPrice} billed yearly (save 20%)
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-4">
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {/* Custom checkmark without using lucide-react */}
              <span className={`mr-2 inline-flex items-center justify-center w-5 h-5 rounded-full ${
                isPopular ? 'bg-blue-600' : 'bg-green-500'
              } text-white text-xs`}>
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6 pt-2">
        <Link 
          to={`/plan-detail/${id}`}
          className={`w-full inline-block px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            isPopular 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-200' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200'
          }`}
        >
          {isPopular ? 'Get Started Now' : 'Select Plan'}
        </Link>
      </div>
    </div>
  );
};

export default Plan;