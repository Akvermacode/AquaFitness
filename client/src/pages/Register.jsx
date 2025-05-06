import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { Input } from "../components";
import { BASE_URL } from '../utils/fetchData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!/^[A-Za-z]+$/.test(name)) {
      toast.error("Name must contain only alphabets");
      return;
    }

    if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!password) {
      toast.error("please enter a password");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(city)) {
      toast.error("City must contain only alphabets and spaces");
      return;
    }

    const phoneNumberPattern = /^(9|8|7|6)\d{9}$/;
    if (!phoneNumberPattern.test(contact)) {
      toast.error("Phone number must start with 9, 8, 7, or 6 and contain exactly 10 digits");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/register`, {
        name,
        password,
        email,
        city,
        contact,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
      duration: 1000,
      easing: 'ease-in-out',
      offset: 120,
      once: true
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-blue-800 to-black p-6">
      <div
        className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-300 border-opacity-20"
        data-aos="zoom-in"
      >
        <h2
          className="text-center text-5xl font-extrabold text-white mb-10 tracking-wide drop-shadow"
          data-aos="fade-down"
        >
          🚀 Register
        </h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div data-aos="fade-up">
            <Input
              type="text"
              placeholder="👤 Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength="4"
              maxLength="30"
              className="bg-white bg-opacity-20 text-white placeholder-white rounded-md p-3"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Input
              type="email"
              placeholder="📧 Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white bg-opacity-20 text-white placeholder-white rounded-md p-3"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Input
              type="password"
              placeholder="🔒 Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white bg-opacity-20 text-white placeholder-white rounded-md p-3"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <Input
              type="text"
              placeholder="🏙️ City"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              minLength="4"
              maxLength="35"
              className="bg-white bg-opacity-20 text-white placeholder-white rounded-md p-3"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <Input
              type="text"
              placeholder="📞 Phone"
              name="phone"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-white bg-opacity-20 text-white placeholder-white rounded-md p-3"
            />
          </div>

          <Link
            to="/login"
            className="text-center text-sm text-white opacity-80 hover:underline mt-2"
            data-aos="fade-in"
          >
            Already a registered user?{" "}
            <span className="text-cyan-300 underline">Login</span>
          </Link>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
            data-aos="flip-up"
          >
            ✨ Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;