import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that fit your dream</h2>
        <div className=" flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 w-full sm:w-auto">
          <a href="#Projects" className="border border-white px-8 py-3 rounded hover:bg-black text-sm sm:text-base">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded hover:bg-black text-sm sm:text-base ">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
