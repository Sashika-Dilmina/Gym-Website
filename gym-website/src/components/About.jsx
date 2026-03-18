import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate(); 

  return (
    <section id="about" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - IMAGE */}
        <div className="relative">
          <img
            src="\assets\images\about.jpg" 
            alt="about"
            className="rounded-xl w-full h-[500px] object-cover"
          />

          {/* Badge */}
          <div className="absolute -bottom-8 -right-5 ht-0 bg-gray-800 backdrop-blur px-7 py-7 rounded-lg text-center">
            <h3 className="text-yellow-500 font-bold text-lg">10+</h3>
            <p className="text-xs">Years of Excellence</p>
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <p className="text-yellow-500 text-sm mb-2">ABOUT US</p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We don’t just build <br /> bodies.
            <br />
            We build character.
          </h2>

          <p className="text-gray-400 mt-4">
            Founded in 2023, Fitness Sports Center provides a premium <br />
            environment designed to help you crush your goals. Whether you're a <br />
            seasoned athlete or just starting your journey, our expert team is <br />
            here to guide you every step of the way.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              State-of-the-art equipment
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              Certified expert trainers
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              24/7 facility access
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              Nutrition & diet planning
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              Group fitness classes
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500 w-4 h-4" />
              Recovery & sauna zones
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/trainers")}
            className="mt-6 text-yellow-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Meet our trainers →
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;