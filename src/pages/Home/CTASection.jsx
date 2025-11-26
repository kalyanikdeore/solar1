import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Sun, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F4C430] via-[#F28B30] to-[#2E7D32] opacity-90" />
        <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#4DB6E2]/20 rounded-full blur-3xl" />

        {/* Solar Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #FFFFFF 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
            <Sun className="h-10 w-10 text-white" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Power Your Future with{" "}
          <span className="bg-gradient-to-r from-white to-[#F4C430] bg-clip-text text-transparent">
            Solar Energy?
          </span>
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get expert consultation and a customized solar solution today. 
          Join the renewable energy revolution with Navitas Efficens and start saving on your energy costs.
        </motion.p>

        {/* CTA Buttons - SINGLE RESPONSIVE VERSION */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4 lg:gap-6 mb-8 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Call Button */}
          <motion.a
            href="tel:+919822561464"
            className="group flex items-center justify-between bg-white text-[#2E7D32] hover:bg-gray-50 font-bold py-4 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl w-full sm:flex-1 min-h-[60px] sm:min-h-0"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Phone className="h-6 w-6 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <div className="text-left min-w-0 flex-1">
                <div className="text-sm font-semibold opacity-80 sm:text-xs lg:text-sm">Call Now</div>
                <div className="text-base font-semibold truncate sm:text-sm lg:text-base">+91 98225 61464</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919822561464?text=Hello%20Navitas%20Efficens!%20I'm%20interested%20in%20solar%20solutions."
            className="group flex items-center justify-between bg-[#25D366] text-white hover:bg-[#128C7E] font-bold py-4 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl w-full sm:flex-1 min-h-[60px] sm:min-h-0 border-2 border-white/20"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <div className="text-left min-w-0 flex-1">
                <div className="text-sm font-semibold opacity-90 sm:text-xs lg:text-sm">WhatsApp</div>
                <div className="text-base font-semibold sm:text-sm lg:text-base">Message Us</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-[#4DB6E2] rounded-full animate-pulse" />
            <span>Expert Solar Assessment</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-pulse" />
            <span>Quick Response</span>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <p className="text-white/80 text-sm font-medium">
              Trusted by 50+ clients across Maharashtra
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;