import React from "react";
import { Dumbbell, HeartPulse, Flame, Apple, Users, Clock } from "lucide-react";

const services = [
  {
    icon: <Dumbbell />,
    title: "Strength Training",
    desc: "Free weights, resistance machines, and power racks to build serious muscle.",
  },
  {
    icon: <HeartPulse />,
    title: "Cardio Zone",
    desc: "Top-tier treadmills, ellipticals, and rowers to boost your endurance.",
  },
  {
    icon: <Flame />,
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your specific goals and body type.",
  },
  {
    icon: <Apple />,
    title: "Nutrition Plans",
    desc: "Custom meal plans designed by certified nutritionists.",
  },
  {
    icon: <Users />,
    title: "Group Classes",
    desc: "High-energy HIIT, yoga, and spin classes to stay motivated.",
  },
  {
    icon: <Clock />,
    title: "24/7 Access",
    desc: "Train on your schedule. Our facility is open all day, every day.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-20 px-6 md:px-16">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-yellow-500 text-sm mb-2">OUR SERVICES</p>

        <h2 className="text-3xl md:text-5xl font-bold">
          Everything you need to <br /> Succeed
        </h2>

        <p className="text-gray-400 mt-4">
          We provide a comprehensive suite of fitness services designed to support your journey from every angle.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 hover:scale-105 transition duration-300"
          >
            {/* ICON */}
            <div className="bg-black w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-yellow-500">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;