
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import HomeLogo from '../../public/homeLogo.png'

const Footer = () => {
  return (
    <footer className=" bg-home-blue text-white py-8 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="">
              <img src={HomeLogo} alt="" srcset="" className='h-14' />
            </h2>
            <p className="mt-2">1234 Street Name, City, State, 12345</p>
            <p className="mt-1">Email: contact@worldNews.com</p>
            <p className="mt-1">Phone: (123) 456-7890</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; 2024 My Company. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/privacy-policy" className="hover:text-red-500">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-red-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
