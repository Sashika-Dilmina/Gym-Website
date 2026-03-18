import React from "react";

const trainers = [
  {
    name: "Marcus Vance",
    role: "Head Coach & Strength",
    image: "/assets/images/marcus.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "HIIT & Mobility",
    image: "/assets/images/sarah.jpg",
  },
  {
    name: "David Chen",
    role: "Nutrition & Conditioning",
    image: "/assets/images/david.jpg",
  },
];

const Trainers = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      
      {/* TOP HEADER */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        
        <div>
          <p className="text-yellow-500 text-sm mb-2">EXPERT TEAM</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Train with the best
          </h2>
        </div>

        <p className="text-gray-400 max-w-md">
          Our certified trainers are dedicated to pushing you past your limits 
          and ensuring you reach your goals safely.
        </p>
      </div>

      {/* TRAINER CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TEXT CONTENT */}
            <div className="absolute top-4 left-4">
                <h3 className="text-xl font-bold">
                  {trainer.name}
              </h3>
            </div>
                

            <div className="absolute bottom-4 left-4">
              <p className="text-yellow-500 text-sm">
                {trainer.role}
              </p>
              <h3 className="text-xl font-bold">
                {trainer.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Trainers;