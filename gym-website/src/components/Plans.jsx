import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Free fitness assessment",
      "1 Group class per month",
    ],
  },
  {
    name: "Standard",
    price: "$59",
    popular: true,
    features: [
      "24/7 Facility access",
      "Unlimited group classes",
      "Guest pass (2/month)",
      "Sauna & recovery zone",
      "Custom workout plan",
    ],
  },
  {
    name: "Premium",
    price: "$99",
    features: [
      "Everything in Standard",
      "2 Personal training sessions/mo",
      "Custom nutrition plan",
      "Unlimited guest passes",
      "Priority class booking",
      "Free merch kit",
    ],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="bg-black text-white py-24 px-6 md:px-16">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-yellow-500 text-sm mb-3 tracking-wide">
          MEMBERSHIP PLANS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Choose your commitment
        </h2>

        <p className="text-gray-400 mt-4">
          No hidden fees. No complicated contracts. Just straightforward pricing for your fitness journey.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-2xl p-8 border transition duration-300
            ${
              plan.popular
                ? "border-yellow-500 bg-gray-900 scale-105 shadow-xl shadow-yellow-500/10"
                : "border-gray-800 bg-gray-950 hover:border-gray-600"
            }`}
          >

            {/* MOST POPULAR */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs px-4 py-1 rounded-full font-semibold">
                Most Popular
              </div>
            )}

            {/* CONTENT */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {plan.name}
              </h3>

              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400 font-normal">
                  {" "} /month
                </span>
              </p>

              <ul className="space-y-3 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-yellow-500 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTON */}
            <button
              className={`mt-8 py-3 rounded-full font-semibold transition
              ${
                plan.popular
                  ? "bg-yellow-500 text-black hover:opacity-90"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Plans;