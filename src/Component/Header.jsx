import React from "react";

const Header = ({ title, leftIcon, rightIcons }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-purpleDark text-white shadow-md">
      {/* Left Section (Title or Icon) */}
      <div className="flex items-center space-x-2">
        {leftIcon && <div>{leftIcon}</div>}
        <h1 className="text-lg font-bold">{title}</h1>
      </div>

      {/* Right Section (Icons) */}
      <div className="flex items-center space-x-4">
        {rightIcons?.map((icon, index) => (
          <button key={index}>{icon}</button>
        ))}
      </div>
    </header>
  );
};

export default Header;
