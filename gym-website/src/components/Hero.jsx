import React from "react";

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24">
      {/* Background Image */}
      <img
        src="/assets/images/background.jpg" 
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-6xl">
        
        {/* Top Badge */}
        <span className="text-yellow-400 bg-yellow-400/10 px-4 py-1 rounded-full w-fit text-sm mb-4">
          WELCOME TO FITNESS SPORTS CENTER
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-white">
          Transform Your Body.
          <br />
          <span className="text-yellow-500">
            Transform Your Life.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-6 max-w-xl">
          Push beyond your limits with world-class trainers, cutting-edge equipment, 
          and a community that fuels your fire.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() =>
                document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
            Join Now
            </button>

          <button className="bg-white/10 text-white px-6 py-3 rounded-full font-semibold backdrop-blur hover:bg-white/20 transition">
            Explore Plans
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;