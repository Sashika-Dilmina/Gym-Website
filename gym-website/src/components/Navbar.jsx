import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center transition-all duration-300 
      ${scrolled 
        ? "bg-black/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"}`}
    >
      <div className="flex items-center gap-3">
        <img
          src="/assets/icons/logo.jpg"
          alt="logo"
          className="w-12 h-12 object-contain bg-white p-1 rounded-md"
        />
        <div className="leading-tight">
          <h1 className="text-white font-bold text-sm md:text-lg">
            FITNESS <span className="text-yellow-500">SPORTS</span>
          </h1>
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            CENTER . EST. 2023
          </p>
        </div>
      </div>

      <ul className="hidden md:flex gap-8 text-white font-medium cursor-pointer">
        {["home", "about", "services", "trainers", "plans", "contact"].map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            className="hover:text-yellow-500 transition-colors capitalize"
          >
            {section}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 active:scale-95 transition-all shadow-md"
        >
          Join Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;