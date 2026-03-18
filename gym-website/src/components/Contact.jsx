import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);

      // Auto close after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 500);
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-16 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start?
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            Have questions about our memberships, facilities, or personal training?
            Drop us a message and our team will get back to you shortly.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-full">
                <MapPin className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400 text-sm">
                  123 Baker Street, London <br /> NW1 6XE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-full">
                <Phone className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400 text-sm">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-full">
                <Mail className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400 text-sm">
                  gym@fitnesssportcenter.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="Jhon Doe"
                required
                className="w-full mt-1 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="jhon@example.com"
                required
                className="w-full mt-1 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                required
                className="w-full mt-1 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-10 text-center max-w-md w-full shadow-xl">
            
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-500/20">
              <svg
                className="w-10 h-10 text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold mb-3">Message Sent!</h2>
            <p className="text-gray-400 text-sm">
              Thanks for reaching out. One of our team members will contact you
              within 24 hours.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;