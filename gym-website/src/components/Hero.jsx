import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Reveal */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="/assets/images/background.jpg" 
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dynamic Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-7xl">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
         
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black leading-[1.1] text-white"
        >
          Transform Your <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Body.</span>
          <br />
          Transform Your Life.
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-300 mt-8 max-w-xl text-lg md:text-xl font-medium leading-relaxed"
        >
          Push beyond your limits with world-class trainers, cutting-edge equipment, 
          and a community that fuels your fire.
        </motion.p>

        {/* Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.2 }}
           className="flex flex-wrap gap-6 mt-12 items-center"
        >
          <button
            onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20 active:scale-95"
          >
            Join Now
          </button>

          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-4 text-white font-black uppercase tracking-widest group"
          >
            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Play fill="currentColor" size={20} />
            </div>
            <span>Discover more</span>
          </button>
        </motion.div>
      </div>

      {/* STATS FLOATING */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 right-16 hidden lg:flex gap-12 text-white bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]"
      >
        {[
          { label: "Members", val: "5k+" },
          { label: "Trainers", val: "20+" },
          { label: "Programs", val: "15+" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h4 className="text-3xl font-black text-yellow-500">{stat.val}</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;