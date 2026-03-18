import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard",
    price: "30",
    features: ["Access to gym floor", "Locker room access", "1 complimentary session"],
    popular: false,
  },
  {
    name: "Premium",
    price: "50",
    features: ["All Standard features", "Group classes", "Personal trainer access", "Sauna & recovery"],
    popular: true,
  },
  {
    name: "Elite",
    price: "80",
    features: ["All Premium features", "Nutrition planning", "Guest passes", "24/7 priority support"],
    popular: false,
  },
];

const Plans = () => {
  return (
    <section id="plans" className="bg-black text-white py-24 px-6 md:px-16 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 font-bold tracking-widest text-sm mb-4"
        >
          PRICING PLANS
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-black mb-6"
        >
          Join the <span className="text-yellow-500">Elite</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Choose a membership that fits your goals. No hidden fees, just results.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -15 }}
            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full bg-gray-900 ${
              plan.popular 
                ? "border-yellow-500 shadow-2xl shadow-yellow-500/10 scale-105 z-10" 
                : "border-gray-800 shadow-xl"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                {plan.name}
                {plan.popular && <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>}
              </h3>
              <div className="flex items-baseline gap-1 mt-6">
                <span className="text-5xl font-black text-yellow-500">${plan.price}</span>
                <span className="text-gray-500 font-bold">/Month</span>
              </div>
            </div>

            <ul className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                plan.popular
                  ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-xl shadow-yellow-500/20"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Plans;