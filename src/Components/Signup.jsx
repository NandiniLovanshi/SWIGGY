import React from "react";
import { X } from "lucide-react";


function Signup() {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md relative">

        {/* Close Button */}
        <button className="absolute top-0 left-0 text-gray-500 hover:text-black">
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-black">Sign up</h2>
            <p className="text-sm mt-1">
              or{" "}
              <span className="text-orange-500 cursor-pointer">
                login to your account
              </span>
            </p>
            <div className="w-8 h-[2px] bg-black mt-4"></div>
          </div>

          {/* Illustration */}
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/icecream.png"
              alt="illustration"
              className="w-14"
            />
          </div>
        </div>

        {/* Form */}
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Phone number"
            className="w-full px-4 py-4 border-b outline-none"
          />
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-4 border-b outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 outline-none"
          />
        </div>

        {/* Referral */}
        <p className="text-blue-600 text-sm mt-4 cursor-pointer">
          Have a referral code?
        </p>

        {/* Continue Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 mt-6">
          CONTINUE
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4">
          By creating an account, I accept the{" "}
          <span className="font-semibold text-black">
            Terms & Conditions
          </span>{" "}
          &{" "}
          <span className="font-semibold text-black">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
