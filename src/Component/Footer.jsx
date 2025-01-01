import React from "react";
import { FaComments, FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-purpleDark text-white py-2 shadow-md">
      <div className="flex justify-around items-center">
        {/* Chat Icon */}
        <button className="flex flex-col items-center">
          <FaComments className="w-6 h-6" />
          {/* <span className="text-xs">Chat</span> */}
        </button>

        {/* Call Icon */}
        <button className="flex flex-col items-center">
          <FaPhoneAlt className="w-6 h-6" />
          {/* <span className="text-xs">Call</span> */}
        </button>

        {/* Profile Icon */}
        <button className="flex flex-col items-center">
          <FaUserCircle className="w-6 h-6" />
          {/* <span className="text-xs">Profile</span> */}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
