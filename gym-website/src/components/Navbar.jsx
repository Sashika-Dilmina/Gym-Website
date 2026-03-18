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

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center transition-all duration-300 
      ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-3">
        <img
          src="\assets\icons\logo.jpg"
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

      <ul className="hidden md:flex gap-6 text-white cursor-pointer">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("trainers")}>Trainers</li>
        <li onClick={() => scrollToSection("plans")}>Plans</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <button
            onClick={() =>
                document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
            Join Now
            </button>
    </nav>
  );
};

export default Navbar;