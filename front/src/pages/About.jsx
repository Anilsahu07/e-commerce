import React from "react";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-20 flex flex-col gap-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center lg:text-left">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center">
          <h2 className="lg:text-4xl font-bold text-gray-900 text-5xl">
            About <span className="text-purple-600">ShopKart</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ShopKart is a next-gen e-commerce platform designed to deliver premium shopping experiences. 
            We bring you handpicked collections, fast delivery, and 24/7 support to make your shopping hassle-free.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3">
              <FaShippingFast className="text-purple-600 text-2xl" />
              <span className="text-gray-700">Fast & Free Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLock className="text-purple-600 text-2xl" />
              <span className="text-gray-700">Secure Payment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeadset className="text-purple-600 text-2xl" />
              <span className="text-gray-700">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 1.343-3 3 0 .384.072.745.202 1.079a3.004 3.004 0 004.79 1.92 3.001 3.001 0 00.008-5.999z" />
              </svg>
              <span className="text-gray-700">Curated Premium Products</span>
            </div>
          </div>
        </div>
       
      </div>
          <div className="hover:scale-90 transition-all duration-300 ">
              <img className="hover:rounded-2xl" src="https://images.unsplash.com/photo-1704500258352-b7237d60c86a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
    </section>
  );
};

export default About;
