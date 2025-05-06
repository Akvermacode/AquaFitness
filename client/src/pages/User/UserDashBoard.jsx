// import React,{useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Heading, Loader } from '../../components';
// import {toast} from "react-hot-toast";
// import {useAuth} from "../../context/auth";
// const UserDashBoard = () => {
// const {auth} = useAuth();


//   // const [userCount, setUserCount] = useState(null);
//   // const [planCount, setPlanCount] = useState(null);
//   // const [subscriberCount, setSubscriberCount] = useState(null);

//   // const getUsers = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/auth/total-user");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setUserCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting users");
//   //   }
//   // }

//   // const getPlans = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/plan/total-plan");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setPlanCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting plans");
//   //   }
//   // }


//   // const getSubscriptions = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/subscription/total-subscription");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setSubscriberCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting subscription");
//   //   }
//   // }


//   // useEffect(() => {
//   //   getUsers();
//   //   getPlans();
//   //   getSubscriptions();
//   // }, []);

//   return (
//     <section className='pt-10 bg-gray-900'>
//       <Heading name="User Dashboard"/>
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/plan-detail`}>
//             <h2 className='text-white font-bold text-3xl'>Plan Detail</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/favourite-exercises`}>
//             <h2 className='text-white font-bold text-3xl'>Favourite Exercises</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/profile`}>
//             <h2 className='text-white font-bold text-3xl'>Profile</h2>
//           </Link>
//           {/* <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/feedbacks/${auth.user._id}`}>
//             <h2 className='text-white font-bold text-3xl'>Feedbacks</h2>
//           </Link> */}

//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to="/dashboard/user/feedbacks">
//             <h2 className='text-white font-bold text-3xl'>Feedbacks</h2>
//           </Link>


         
//         </div>
//       </div>
//     </section>
//   )
// }
// export default UserDashBoard;









































































// // import React,{useEffect,useState} from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from "axios";
// // import { Heading } from '../../components';
// // import {toast} from "react-hot-toast";

// // const UserDashBoard = () => {
// //   const [userName, setUserName] = useState("");
// //   const [planName, setPlanName] = useState("");
// //   const [planAmount, setPlanAmount] = useState("");
// //   const [planType, setPlanType] = useState("");

// //   const getUserSubscription = async () => {
  
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/v1/auth/get-user-plan");
// //       if (res.data && res.data.success) {
// //         console.log(res.data.subscription);
// //         console.log(res.data);
// //         // setUserName(res.data)
// //       }
// //     }
// //     catch (err) {
// //       console.log(err);
// //       toast.error("something went wong in getting subscription");
// //     }
  

 
// //   }

// //   useEffect(() => {
// //     getUserSubscription();
// //   },[])


// //   return (
// //     <section className='pt-10'>
// //     <Heading name="Admin Dashboard"/>
// //     <div className="container mx-auto px-6 py-20">
// //       {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/user-list`}>
// //           <h2 className='text-white font-bold text-3xl'>Users:{userCount}</h2>
// //         </Link>
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/subscriber-list`}>
// //           <h2 className='text-white font-bold text-3xl'>Subscribers:{subscriberCount}</h2>
// //         </Link>
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/plans`}>
// //           <h2 className='text-white font-bold text-3xl'>Plans:{planCount}</h2>
// //         </Link>
// //       </div> */}
// //     </div>
// //   </section>
// //   )
// // }

// // export default UserDashBoard;


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Heading } from '../../components';
// import { useAuth } from "../../context/auth";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const UserDashBoard = () => {
//   const { auth } = useAuth();

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Set animation duration
//   }, []);

//   return (
//     <section className='pt-10 bg-gray-900'>
//       <Heading name="User Dashboard" />
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//           <Link 
//             className='p-5 border border-white hover:bg-blue-600 transition-all' 
//             to={`/dashboard/user/plan-detail`}
//             data-aos="fade-up"
//           >
//             <h2 className='text-white font-bold text-3xl'>Plan Detail</h2>
//           </Link>
          
//           <Link 
//             className='p-5 border border-white hover:bg-blue-600 transition-all' 
//             to={`/dashboard/user/favourite-exercises`}
//             data-aos="fade-up"
//           >
//             <h2 className='text-white font-bold text-3xl'>Favourite Exercises</h2>
//           </Link>
          
//           <Link 
//             className='p-5 border border-white hover:bg-blue-600 transition-all' 
//             to={`/dashboard/user/profile`}
//             data-aos="fade-up"
//           >
//             <h2 className='text-white font-bold text-3xl'>Profile</h2>
//           </Link>

//           <Link 
//             className='p-5 border border-white hover:bg-blue-600 transition-all' 
//             to="/dashboard/user/feedbacks"
//             data-aos="fade-up"
//           >
//             <h2 className='text-white font-bold text-3xl'>Feedbacks</h2>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UserDashBoard;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../../components';
import { useAuth } from "../../context/auth";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const UserDashBoard = () => {
  const { auth } = useAuth();

  // Initialize AOS with enhanced settings
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  // Dashboard card data
  const dashboardCards = [
    {
      title: "Plan Detail",
      path: "/dashboard/user/plan-detail",
      icon: "📋",
      description: "View your current fitness plan and progress",
      color: "from-blue-500 to-indigo-600",
      delay: "0"
    },
    {
      title: "Favourite Exercises",
      path: "/dashboard/user/favourite-exercises",
      icon: "⭐",
      description: "Access your saved workout routines",
      color: "from-purple-500 to-pink-600",
      delay: "100"
    },
    {
      title: "Profile",
      path: "/dashboard/user/profile",
      icon: "👤",
      description: "Manage your account settings",
      color: "from-green-500 to-teal-600",
      delay: "200"
    },
    {
      title: "Feedbacks",
      path: "/dashboard/user/feedbacks",
      icon: "💬",
      description: "Review your trainer comments and suggestions",
      color: "from-orange-500 to-red-600",
      delay: "300"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section with User Welcome */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <Heading name="User Dashboard" />
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome back{auth?.user?.name ? `, ${auth.user.name}` : ""}! Track your fitness journey and manage your workout plans.
          </p>
        </div>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => (
            <Link 
              key={index}
              to={card.path}
              data-aos="zoom-in"
              data-aos-delay={card.delay}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`p-6 h-full bg-gradient-to-r ${card.color} group-hover:brightness-110`}>
                <div className="absolute -right-4 -top-4 bg-white/10 rounded-full p-8 blur-2xl group-hover:blur-3xl transition-all"></div>
                <span className="text-4xl mb-4 inline-block">{card.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/80 mb-4">{card.description}</p>
                <div className="flex items-center mt-2 text-sm font-medium">
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-6">Your Fitness Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">12</div>
              <div className="text-gray-400 text-sm">Workouts Completed</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">85%</div>
              <div className="text-gray-400 text-sm">Goal Progress</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">4</div>
              <div className="text-gray-400 text-sm">Weeks Active</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">8</div>
              <div className="text-gray-400 text-sm">New Exercises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDashBoard;