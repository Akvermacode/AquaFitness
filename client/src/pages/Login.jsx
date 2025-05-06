import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
import { Input } from "../components";
import { BASE_URL } from '../utils/fetchData';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const { auth, setAuth } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4">
      <div 
        className="bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-10 sm:p-12"
        data-aos="fade-up"
      >
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-8 tracking-wide drop-shadow-md">
          Login
        </h2>

        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
            data-aos="zoom-in"
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^.*$"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
            data-aos="zoom-in"
          />

          <Link
            to="/forgot-password"
            className="text-indigo-700 text-sm font-semibold hover:text-indigo-900 underline text-right"
            data-aos="fade-in"
          >
            Forgot password? <span>Reset Password</span>
          </Link>

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 text-white py-3 rounded-lg font-semibold text-lg shadow-lg transition duration-300 ease-in-out"
            data-aos="slide-up"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
