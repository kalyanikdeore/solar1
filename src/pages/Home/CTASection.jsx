import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#10a19d] to-[#0d817d] rounded-2xl m-4 sm:m-6 lg:m-8">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Harness Solar Energy?
        </motion.h3>
        <motion.p
          className="text-xl text-white/90 max-w-1xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get expert consultation and a free quote for your solar project today.
          Join the renewable energy revolution with Navitas Efficens.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="tel:+919822561464"
            className="flex items-center justify-center bg-white text-[#10a19d] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-3 h-5 w-5" />
            Call Now: +91 98225 61464
          </motion.a>
          <motion.a
            href="https://wa.me/919822561464?text=Hello%20Navitas%20Efficens!%20I'm%20interested%20in%20solar%20solutions."
            className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#10a19d] font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            WhatsApp Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
