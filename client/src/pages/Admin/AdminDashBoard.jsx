// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Heading, Loader } from '../../components';
// import { toast } from "react-hot-toast";
// import {BASE_URL} from "../../utils/fetchData";
// const AdminDashBoard = () => {

//   const [userCount, setUserCount] = useState(null);
//   const [planCount, setPlanCount] = useState(null);
//   const [subscriberCount, setSubscriberCount] = useState(null);
//   const [contactCount, setContactCount] = useState(null);
//   const [feedbackCount, setFeedbackCount] = useState(null);
//   const [loading, setLoading] = useState(false);



//   const getUsers = async () => {
//     try {
//       // const res = await axios.get("http://localhost:5000/api/v1/auth/total-user");
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/auth/total-user`);
//       if (res.data && res.data.success) {
//         console.log(res.data.total);
//         setUserCount(res.data.total);
//       }
//       setLoading(false);
//     }
//     catch (err) {
//       console.log(err);
//       toast.error("something went wong in getting users");
//       setLoading(false);
//     }
//   }

//   const getPlans = async () => {
//     try {
//       // const res = await axios.get("http://localhost:5000/api/v1/plan/total-plan");
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/plan/total-plan`);
//       if (res.data && res.data.success) {
//         console.log(res.data.total);
//         setPlanCount(res.data.total);
//       }
//       setLoading(false);
//     }
//     catch (err) {
//       console.log(err);
//       toast.error("something went wong in getting plans");
//       setLoading(false);
//     }
//   }


//   const getSubscriptions = async () => {
//     try {
//       setLoading(true);
//       // const res = await axios.get("http://localhost:5000/api/v1/subscription/total-subscription");
//       const res = await axios.get(`${BASE_URL}/api/v1/subscription/total-subscription`);
//       if (res.data && res.data.success) {
//         console.log(res.data.total);
//         setSubscriberCount(res.data.total);
//       }
//       setLoading(false);
//     }
//     catch (err) {
//       console.log(err);
//       toast.error("something went wong in getting subscription");
//       setLoading(false);
//     }
//   }

//   const getContacts = async () => {
//     try {
//       // const res = await axios.get("http://localhost:5000/api/v1/contact/total-contact");
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/contact/total-contact`);
//       if (res.data && res.data.success) {
//         console.log(res.data.total);
//         setContactCount(res.data.total);
//       }
//       setLoading(false);
//     }
//     catch (err) {
//       console.log(err);
//       toast.error("something went wong in getting contact");
//       setLoading(false);
//     }
//   }

//   const getFeedbacks = async () => {
//     try {
//       // const res = await axios.get("http://localhost:5000/api/v1/feedback/total-feedback");
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/feedback/total-feedback`);
//       if (res.data && res.data.success) {
//         console.log("feedback");
//         console.log(res.data.total);
//         setFeedbackCount(res.data.total);
//       }
//       setLoading(false);
//     }
//     catch (err) {
//       console.log(err);
//       toast.error("something went wrong in getting feedback");
//       setLoading(false);
//     }
//   }



//   useEffect(() => {
//     getUsers();
//     getPlans();
//     getSubscriptions();
//     getContacts();
//     getFeedbacks();
//   }, []);



//   if(loading){
//     return <Loader/>
//   }

//   return (
//     <section className='pt-10 bg-gray-900'>
//       <Heading name="Admin Dashboard" />
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/user-list`}>
//             <h2 className='text-white font-bold text-3xl'>Users: {userCount ? userCount : " Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/subscriber-list`}>
//             <h2 className='text-white font-bold text-3xl'>Subscribers: {subscriberCount ? subscriberCount : " Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/plans`}>
//             <h2 className='text-white font-bold text-3xl'>Plans: {planCount ? planCount : " Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/contact-us`}>
//             <h2 className='text-white font-bold text-3xl'>Query: {contactCount ? contactCount : " Loading..."}</h2>
//           </Link>
//           {feedbackCount && <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/feedbacks`}>
//             <h2 className='text-white font-bold text-3xl'>Feedbacks: {feedbackCount ? feedbackCount : " Loading..."}</h2>
//           </Link>}
//           {/* <Link className='p-5 border border-white group-hover:bg-blue-500 transition-all'>
//             <h2 className='text-white font-bold text-3xl'>Create-Plan</h2>
//           </Link> */}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AdminDashBoard;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Heading, Loader } from '../../components';
// import { toast } from "react-hot-toast";
// import { BASE_URL } from "../../utils/fetchData";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const AdminDashBoard = () => {
//   const [userCount, setUserCount] = useState(null);
//   const [planCount, setPlanCount] = useState(null);
//   const [subscriberCount, setSubscriberCount] = useState(null);
//   const [contactCount, setContactCount] = useState(null);
//   const [feedbackCount, setFeedbackCount] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // AOS Initialization
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       easing: 'ease-in-out', // Animation easing
//       offset: 120, // Trigger animation before the element comes into view
//       once: true // Animation should happen only once while scrolling down
//     });

//     // Fetch data
//     getUsers();
//     getPlans();
//     getSubscriptions();
//     getContacts();
//     getFeedbacks();
//   }, []);

//   const getUsers = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/auth/total-user`);
//       if (res.data && res.data.success) {
//         setUserCount(res.data.total);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong in getting users");
//       setLoading(false);
//     }
//   }

//   const getPlans = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/plan/total-plan`);
//       if (res.data && res.data.success) {
//         setPlanCount(res.data.total);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong in getting plans");
//       setLoading(false);
//     }
//   }

//   const getSubscriptions = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/subscription/total-subscription`);
//       if (res.data && res.data.success) {
//         setSubscriberCount(res.data.total);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong in getting subscription");
//       setLoading(false);
//     }
//   }

//   const getContacts = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/contact/total-contact`);
//       if (res.data && res.data.success) {
//         setContactCount(res.data.total);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong in getting contact");
//       setLoading(false);
//     }
//   }

//   const getFeedbacks = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/v1/feedback/total-feedback`);
//       if (res.data && res.data.success) {
//         setFeedbackCount(res.data.total);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong in getting feedback");
//       setLoading(false);
//     }
//   }

//   if (loading) {
//     return <Loader />
//   }

//   return (
//     <section className='pt-10 bg-gray-900'>
//       <Heading name="Admin Dashboard" />
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/user-list`} data-aos="fade-up">
//             <h2 className='text-white font-bold text-3xl'>Users: {userCount !== null ? userCount : "Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/subscriber-list`} data-aos="fade-up" data-aos-delay="100">
//             <h2 className='text-white font-bold text-3xl'>Subscribers: {subscriberCount !== null ? subscriberCount : "Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/plans`} data-aos="fade-up" data-aos-delay="200">
//             <h2 className='text-white font-bold text-3xl'>Plans: {planCount !== null ? planCount : "Loading..."}</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/contact-us`} data-aos="fade-up" data-aos-delay="300">
//             <h2 className='text-white font-bold text-3xl'>Queries: {contactCount !== null ? contactCount : "Loading..."}</h2>
//           </Link>
//           {feedbackCount !== null && (
//             <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/feedbacks`} data-aos="fade-up" data-aos-delay="400">
//               <h2 className='text-white font-bold text-3xl'>Feedbacks: {feedbackCount !== null ? feedbackCount : "Loading..."}</h2>
//             </Link>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AdminDashBoard;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Heading, Loader } from '../../components';
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../utils/fetchData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminDashBoard = () => {
  const [userCount, setUserCount] = useState(null);
  const [planCount, setPlanCount] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [contactCount, setContactCount] = useState(null);
  const [feedbackCount, setFeedbackCount] = useState(null);
  const [loading, setLoading] = useState(false);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 80,
      once: true
    });

    // Fetch data
    getUsers();
    getPlans();
    getSubscriptions();
    getContacts();
    getFeedbacks();
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/auth/total-user`);
      if (res.data && res.data.success) {
        setUserCount(res.data.total);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting users");
      setLoading(false);
    }
  }

  const getPlans = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/plan/total-plan`);
      if (res.data && res.data.success) {
        setPlanCount(res.data.total);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting plans");
      setLoading(false);
    }
  }

  const getSubscriptions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/subscription/total-subscription`);
      if (res.data && res.data.success) {
        setSubscriberCount(res.data.total);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting subscription");
      setLoading(false);
    }
  }

  const getContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/contact/total-contact`);
      if (res.data && res.data.success) {
        setContactCount(res.data.total);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting contact");
      setLoading(false);
    }
  }

  const getFeedbacks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/feedback/total-feedback`);
      if (res.data && res.data.success) {
        setFeedbackCount(res.data.total);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting feedback");
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />
  }

  // Admin dashboard cards with icons and path information
  const adminCards = [
    {
      title: "Users",
      count: userCount,
      path: "/dashboard/admin/user-list",
      icon: "👥",
      description: "Manage registered users and accounts",
      color: "from-blue-600 to-blue-800",
      delay: "0"
    },
    {
      title: "Subscribers",
      count: subscriberCount,
      path: "/dashboard/admin/subscriber-list",
      icon: "📊",
      description: "View and manage all active subscriptions",
      color: "from-purple-600 to-indigo-800",
      delay: "100"
    },
    {
      title: "Plans",
      count: planCount,
      path: "/dashboard/admin/plans",
      icon: "📈",
      description: "Create and update fitness plans",
      color: "from-green-600 to-teal-800",
      delay: "200"
    },
    {
      title: "Queries",
      count: contactCount,
      path: "/dashboard/admin/contact-us",
      icon: "📝",
      description: "Review and respond to customer inquiries",
      color: "from-amber-600 to-orange-800",
      delay: "300"
    },
    {
      title: "Feedbacks",
      count: feedbackCount,
      path: "/dashboard/admin/feedbacks",
      icon: "💬",
      description: "Review customer feedback and ratings",
      color: "from-red-600 to-rose-800",
      delay: "400",
      condition: feedbackCount !== null
    }
  ];

  const filteredCards = adminCards.filter(card => 
    !card.hasOwnProperty('condition') || card.condition
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Admin Dashboard Header */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="text-center mb-10" data-aos="fade-down">
          <Heading name="Admin Dashboard" />
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Manage your fitness platform's users, plans, and business operations
          </p>
        </div>
      </div>

      {/* Admin Stats Summary */}
      <div className="container mx-auto px-6 pb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-12" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Platform Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-blue-900/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">{userCount !== null ? userCount : "..."}</div>
              <div className="text-gray-300 text-sm">Users</div>
            </div>
            <div className="bg-purple-900/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">{subscriberCount !== null ? subscriberCount : "..."}</div>
              <div className="text-gray-300 text-sm">Subscribers</div>
            </div>
            <div className="bg-green-900/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">{planCount !== null ? planCount : "..."}</div>
              <div className="text-gray-300 text-sm">Plans</div>
            </div>
            <div className="bg-amber-900/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">{contactCount !== null ? contactCount : "..."}</div>
              <div className="text-gray-300 text-sm">Queries</div>
            </div>
            <div className="bg-red-900/50 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-400">{feedbackCount !== null ? feedbackCount : "..."}</div>
              <div className="text-gray-300 text-sm">Feedbacks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Management Cards */}
      <div className="container mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center" data-aos="fade-up">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          Management Controls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <Link 
              key={index}
              to={card.path}
              data-aos="zoom-in"
              data-aos-delay={card.delay}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`p-6 h-full bg-gradient-to-r ${card.color} group-hover:brightness-110`}>
                <div className="absolute -right-8 -top-8 bg-white/10 rounded-full p-12 blur-3xl group-hover:blur-2xl transition-all"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-4xl mb-4 inline-block">{card.icon}</span>
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/80 mb-4">{card.description}</p>
                  </div>
                  <div className="bg-white/20 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold">{card.count !== null ? card.count : "..."}</span>
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm font-medium">
                  <span>Manage {card.title}</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Admin Quick Links */}
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard/admin/create-plan" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Create New Plan
            </Link>
            <Link to="/dashboard/admin/user-list" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Manage Users
            </Link>
            <Link to="/dashboard/admin/contact-us" className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-md text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              View Queries
            </Link>
            <Link to="/dashboard/admin/feedbacks" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              Review Feedback
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashBoard;