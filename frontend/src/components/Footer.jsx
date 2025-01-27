import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div id="Footer" className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="logo" />
          <p className="text-white text-justify mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eius incidunt perferendis veritatis deserunt itaque sit.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a className="hover:text-white" href="#Header">
              Home
            </a>
            <a className="hover:text-white" href="#About">
              About Us
            </a>
            <a className="hover:text-white" href="#Contact">
              Contact Us
            </a>
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80 text-justify">The lastest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="johsmith@gmail.com" className="p-2 rounded text-gray-400 border-3 border-blue-700 focus:outline-none w-full md:w-auto" />
            <button className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-black hover:scale-110 hover:transition-all transform ease-in-out">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 &copy; IrfizzDev. <br /> All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
