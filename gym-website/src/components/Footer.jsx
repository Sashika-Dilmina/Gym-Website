import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 md:px-16 py-14">

      <div className="grid md:grid-cols-4 gap-10">

        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/icons/logo.jpg"   // ✅ FIXED PATH
              alt="logo"
              className="w-12 h-12 object-contain bg-white p-1 rounded-md"
            />
            <div className="leading-tight">
              <h1 className="text-white font-bold text-sm md:text-lg">
                FITNESS <span className="text-yellow-500">SPORTS</span>
              </h1>
              <p className="text-gray-400 text-xs">
                CENTER . EST. 2023
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Premium fitness facility dedicated to helping you transform your body
            and your life through expert coaching and state-of-the-art equipment
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-[#111] hover:bg-yellow-500/20 cursor-pointer transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li> {/* ✅ FIXED */}
            <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/service" className="hover:text-yellow-500">Service</Link></li>
            <li><Link to="/trainers" className="hover:text-yellow-500">Trainers</Link></li>
            <li><Link to="/pricing" className="hover:text-yellow-500">Pricing Plans</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Strength & Conditioning</li>
            <li>Nutrition Planning</li>
            <li>Recovery Zone</li>
          </ul>
        </div>

        {/* WORKING HOURS */}
        <div>
          <h3 className="font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span>24 Hours</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>24 Hours</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>24 Hours</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-yellow-500/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>©2026 Fitness Sports Center. All rights reserved</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-yellow-500 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-yellow-500 cursor-pointer">Terms of Service</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;