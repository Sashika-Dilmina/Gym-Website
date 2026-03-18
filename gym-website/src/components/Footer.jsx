import { Instagram, Twitter, Facebook, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-20 transition-colors duration-300 border-t border-gray-800">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* LEFT - BRAND */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/icons/logo.jpg"
              alt="logo"
              className="w-14 h-14 object-contain bg-white p-2 rounded-2xl shadow-lg shadow-black/5"
            />
            <div className="leading-tight">
              <h1 className="text-white font-black text-xl tracking-tight">
                FITNESS <span className="text-yellow-500">SPORTS</span>
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                EST. 2023
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-base leading-relaxed font-medium">
            Premium fitness facility dedicated to helping you transform your body
            and your life through expert coaching and state-of-the-art equipment.
          </p>

          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all cursor-pointer shadow-sm"
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-white">Quick Links</h3>
          <ul className="space-y-4 font-bold">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Services", to: "/service" },
              { label: "Meet Trainers", to: "/trainers" },
              { label: "Pricing Plans", to: "/pricing" }
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 group transition-all">
                  <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-white">Our Services</h3>
          <ul className="space-y-4 font-bold text-gray-400">
            {[
              "Personal Training",
              "Group HIIT Classes",
              "Strength & Cardio",
              "Nutrition Planning",
              "Recovery & Sauna"
            ].map((s) => (
              <li key={s} className="hover:text-yellow-500 cursor-pointer flex items-center gap-2 transition-all">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* WORKING HOURS */}
        <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-xl self-start">
          <h3 className="text-lg font-black mb-6 uppercase tracking-widest text-white">Working Hours</h3>
          <ul className="space-y-4 font-bold">
             <li className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Mon - Fri</span>
              <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs">24 Hours</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Saturday</span>
              <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs">24 Hours</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Sunday</span>
              <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs">24 Hours</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-bold uppercase tracking-widest gap-6">
        <p>© 2026 Fitness Sports Center. All rights reserved.</p>

        <div className="flex gap-10">
          <span className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-yellow-500 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;