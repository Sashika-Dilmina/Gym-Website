import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setShowSuccess(true);
    reset(); // Clear form
    
    // Auto hide success modal after 5s
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16 transition-colors duration-300 relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>

      <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT SIDE: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-500 font-black tracking-[0.2em] uppercase mb-4 text-sm">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to <span className="text-yellow-500 ">start</span> your journey?
          </h2>

          <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-md">
            Have questions about our memberships, facilities, or personal training?
            Drop us a message and our team will get back to you shortly.
          </p>

          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Location", detail: "123 Baker Street, London NW1 6XE" },
              { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email", detail: "gym@fitnesssportcenter.com" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-yellow-500/20 p-4 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 shadow-lg shadow-yellow-500/5">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                  <p className="text-lg font-bold group-hover:text-yellow-500 transition-colors whitespace-pre-line">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/50 p-10 rounded-[2.5rem] border border-gray-800 shadow-2xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input
                  {...register("fullName", { 
                    required: "Full name is required",
                    minLength: { value: 3, message: "Name must be at least 3 characters" }
                  })}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full mt-2 p-4 rounded-2xl bg-black border transition-all font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500/50 ${
                    errors.fullName ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 mt-1">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full mt-2 p-4 rounded-2xl bg-black border transition-all font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500/50 ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full mt-2 p-4 rounded-2xl bg-black border transition-all font-medium resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500/50 ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  }`}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-yellow-500 text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* SUCCESS MODAL ANIMATION */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-[100] p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-800 rounded-[3rem] p-12 text-center max-w-md w-full shadow-2xl"
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-yellow-500/10 text-yellow-500 shadow-inner">
                 <CheckCircle2 size={48} strokeWidth={2.5} />
              </div>

              <h2 className="text-3xl font-black mb-4 dark:text-white">Success!</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Your message has been sent. Our team will get back to you within 24 hours.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-4 rounded-2xl hover:opacity-80 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactSection;