import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Instagram, Twitter, Linkedin } from "lucide-react";

const trainers = [
  {
    name: "Marcus Vance",
    role: "Head Coach & Strength",
    category: "Strength",
    image: "/assets/images/marcus.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "HIIT & Mobility",
    category: "HIIT",
    image: "/assets/images/sarah.jpg",
  },
  {
    name: "David Chen",
    role: "Nutrition & Conditioning",
    category: "Nutrition",
    image: "/assets/images/david.jpg",
  },
];

const categories = ["All", "Strength", "HIIT", "Nutrition"];

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTrainers = trainers.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="trainers" className="bg-black text-white min-h-screen py-24 px-6 md:px-16 transition-colors duration-300">
      
      {/* TOP HEADER */}
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-yellow-500 font-bold tracking-widest text-sm mb-3">EXPERT TEAM</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Train with the <br /> <span className="text-yellow-500">best</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-md pb-2"
        >
          Our certified trainers are dedicated to pushing you past your limits 
          and ensuring you reach your goals safely.
        </motion.p>
      </div>

      {/* FILTER CONTROLS */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search trainers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-900 rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-white"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* TRAINER CARDS */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTrainers.map((trainer) => (
            <motion.div
              layout
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl overflow-hidden group aspect-[3/4] shadow-2xl bg-gray-900 border border-gray-800"
            >
              {/* IMAGE */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* SOCIAL HOVER */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Icon size={18} />
                  </button>
                ))}
              </div>

              {/* TEXT CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-yellow-500 text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                  {trainer.category}
                </span>
                <h3 className="text-white text-3xl font-black mb-1">
                  {trainer.name}
                </h3>
                <p className="text-gray-300 font-medium">
                  {trainer.role}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredTrainers.length === 0 && (
        <div className="text-center py-32">
          <p className="text-gray-500 text-2xl font-bold">No trainers found.</p>
        </div>
      )}

    </section>
  );
};

export default Trainers;