import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate(); 

  const features = [
    "State-of-the-art equipment",
    "Certified expert trainers",
    "24/7 facility access",
    "Nutrition & diet planning",
    "Group fitness classes",
    "Recovery & sauna zones",
  ];

  return (
    <section id="about" className="bg-black text-white min-h-screen py-24 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - IMAGE with Motion */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <img
            src="/assets/images/about.jpg" 
            alt="about"
            className="rounded-2xl w-full h-[500px] object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute -bottom-8 -right-4 bg-gray-800 text-white px-8 py-8 rounded-2xl shadow-xl text-center border-4 border-black"
          >
            <h3 className="text-3xl font-extrabold text-yellow-500">10+</h3>
            <p className="text-xs font-medium uppercase tracking-wider">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* RIGHT - CONTENT with Motion */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-500 font-bold tracking-widest text-sm mb-4">ABOUT US</p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            We don’t just build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">bodies.</span>
            <br />
            We build character.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Founded in 2023, Fitness Sports Center provides a premium environment 
            designed to help you crush your goals. Whether you're a seasoned athlete 
            or just starting your journey, our expert team is here to guide you 
            every step of the way.
          </p>

          {/* FEATURES Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 group"
              >
                <div className="bg-yellow-500/10 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle className="text-yellow-500 w-5 h-5" />
                </div>
                <span className="font-medium text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ x: 10 }}
            onClick={() => navigate("/trainers")}
            className="flex items-center gap-3 text-yellow-500 font-bold text-lg group"
          >
            Meet our trainers 
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;