import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

 function Footer() {
  return (
    <footer className="bg-gray-100 pt-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="">
                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="" />
              </div>
              
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Swiggy Limited
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>

            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Available In */}
          <div>
            <h4 className="font-semibold mb-4">Available in:</h4>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>

            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>685 cities</option>
            </select>
          </div>

          {/* Life at Swiggy */}
          <div>
            <h4 className="font-semibold mb-4">Life at Swiggy</h4>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <h4 className="font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4 text-xl text-gray-700">
              <FaLinkedinIn />
              <FaInstagram />
              <FaFacebookF />
              <FaPinterestP />
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Bottom App Section */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 py-8">
          <p className="text-2xl font-semibold text-gray-700 text-center md:text-left">
            For better experience, download the Swiggy app now
          </p>

          <div className="flex gap-4">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt="App Store"
              className="h-15"
            />
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt="Google Play"
              className="h-15"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
