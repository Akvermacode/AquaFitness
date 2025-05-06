


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Trainer = ({ img, alt, id, name, age }) => {
//   return (
//   <div className="text-black rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 text-center">
//       <img src={img} alt={alt} className="w-full  mx-auto rounded-t-lg" />
//       <div className="p-5 text-center">
//         <h3 className="text-xl font-semibold mb-1">{name}</h3>
//         <p className="text-gray-700 text-md">Age: {age}</p>
//         <div className="mt-1">
//           <Link to={`trainer/${id}`} className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300">
//             View Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trainer;
import React from 'react';
import { Link } from 'react-router-dom';

const Trainer = ({ img, alt, id, name, age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-102 duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img 
          src={img} 
          alt={alt} 
          className="w-full object-cover h-64 mx-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4 flex items-center justify-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            Age: {age}
          </span>
        </p>
        <div className="mt-3">
          <Link 
            to={`trainer/${id}`} 
            className="w-full inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trainer;