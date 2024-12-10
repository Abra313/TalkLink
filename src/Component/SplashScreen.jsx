import React, { useEffect, useState } from "react";
import logo from "../assets/logo-removebg-preview.png"

const SplashScreen = ({ onSplashEnd }) => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading effect (you can adjust the timeout or add real logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onSplashEnd) onSplashEnd(); // Callback to indicate splash is done
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-purpleDark text-white">
      <div className="text-center">
        {/* Image (e.g., Logo) */}
        <img
          src="logo"
          alt="App Logo"
          className="w-24 h-24 mx-auto mb-4"
        />

        {/* App Name */}
        <h1 className="text-3xl font-bold mb-4">TalkLink</h1>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
