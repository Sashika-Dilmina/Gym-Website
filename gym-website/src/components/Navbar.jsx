import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center transition-all duration-300 
      ${scrolled ? "bg-black shadow-md" : "bg-transparent"}`}
    >
      <h1 className="text-white font-bold">
        FITNESS <span className="text-yellow-500">SPORTS</span>
      </h1>
      

      <ul className="hidden md:flex gap-6 text-white">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Trainers</li>
        <li>Plans</li>
        <li>Contact</li>
      </ul>

      <button
        onClick={() => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
        Join Now
    </button>
        </nav>
  );
};

export default Navbar;