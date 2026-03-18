import React, { useState, useMemo } from "react";
import { Dumbbell, HeartPulse, Flame, Apple, Users, Clock, Search, Filter } from "lucide-react";
import { useDebounce } from "../hooks/useDebounce";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: <Dumbbell />,
    title: "Strength Training",
    category: "Muscle",
    desc: "Free weights, resistance machines, and power racks to build serious muscle.",
  },
  {
    icon: <HeartPulse />,
    title: "Cardio Zone",
    category: "Endurance",
    desc: "Top-tier treadmills, ellipticals, and rowers to boost your endurance.",
  },
  {
    icon: <Flame />,
    title: "Personal Training",
    category: "Coaching",
    desc: "1-on-1 coaching tailored to your specific goals and body type.",
  },
  {
    icon: <Apple />,
    title: "Nutrition Plans",
    category: "Diet",
    desc: "Custom meal plans designed by certified nutritionists.",
  },
  {
    icon: <Users />,
    title: "Group Classes",
    category: "Social",
    desc: "High-energy HIIT, yoga, and spin classes to stay motivated.",
  },
  {
    icon: <Clock />,
    title: "24/7 Access",
    category: "Facility",
    desc: "Train on your schedule. Our facility is open all day, every day.",
  },
];

const categories = ["All", "Muscle", "Endurance", "Coaching", "Diet", "Social", "Facility"];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                          service.desc.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = activeCategory === "All" || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearch, activeCategory]);

  return (
    <section id="services" className="bg-black text-white py-24 px-6 md:px-16 transition-colors duration-300">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 font-bold tracking-widest text-sm mb-3"
        >
          OUR SERVICES
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          Everything you need to <br /> <span className="text-yellow-500">Succeed</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          We provide a comprehensive suite of fitness services designed to support your journey from every angle.
        </motion.p>
      </div>

      {/* SEARCH AND FILTER UI */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-black rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-white"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((item, index) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl transition-all group"
            >
              {/* ICON */}
              <div className="bg-yellow-500/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>

              {/* TITLE */}
              <h3 className="font-extrabold text-2xl mb-4 group-hover:text-yellow-500 transition-colors text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* CATEGORY TAG */}
              <div className="mt-6">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black rounded-full text-gray-500">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredServices.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 text-xl font-medium">No services found matching your criteria.</p>
        </motion.div>
      )}

    </section>
  );
};

export default Services;