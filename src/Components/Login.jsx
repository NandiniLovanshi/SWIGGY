import { X } from "lucide-react";

 function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full max-w-md px-6 py-8">
        {/* Close Icon */}
        <button className="absolute top-4 left-4 text-gray-500 hover:text-black">
          <X size={22} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Login</h1>
            <p className="text-sm">
              or{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                create an account
              </span>
            </p>
            <div className="w-10 h-[2px] bg-black mt-3"></div>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="food"
              className="w-20 h-20 object-cover"
            />
          </div>
        </div>

        {/* Input */}
        <div className="mb-5">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600 transition">
          LOGIN
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4">
          By clicking on Login, I accept the{" "}
          <span className="font-semibold text-black">
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
