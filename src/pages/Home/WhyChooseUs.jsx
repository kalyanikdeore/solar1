// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  DraftingCompass,
  Shield,
  Factory,
  Monitor,
  Zap,
  Phone,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Experienced solar professionals dedicated to delivering efficient and trusted renewable solutions.",
    },
    {
      icon: <DraftingCompass className="h-8 w-8" />,
      title: "Precision Design",
      description:
        "Advanced 2D and 3D system designs for maximum solar efficiency and performance.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Materials",
      description:
        "We use top-tier components ensuring durability, safety, and long-term savings.",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "In-house Manufacturing",
      description:
        "Custom GI mounting structures – 30% stronger, lighter, and built to last.",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Online Monitoring",
      description:
        "Track system performance in real-time with smart IoT dashboards.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Proven Technologies",
      description:
        "From Mono PERC to Bifacial panels — our technology powers your sustainability goals.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#e8f9f8] via-white to-[#c9f4f3]">
      {/* Background wave effect */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#10a19d"
            fillOpacity="0.1"
            d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,208C672,203,768,213,864,197.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10a19d] to-[#0d817d]">
              Navitas Efficens
            </span>
            ?
          </h2>
          <motion.div
            className="h-1 w-19 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "4.9rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Where innovation meets sustainability — delivering smart, clean, and
            reliable solar energy.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 25px rgba(16,161,157,0.2)",
              }}
              className="relative bg-white rounded-3xl p-8 shadow-sm transition-all duration-500"
            >
              <div className="absolute -top-6 left-6 w-10 h-10 bg-gradient-to-tr from-[#10a19d] to-[#0d817d] rounded-2xl flex items-center justify-center shadow-md text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section  */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#10a19d] to-[#0d817d] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their
              energy infrastructure with our reliable solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-white text-[#10a19d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Get Free Consultation
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/products")}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#10a19d] transition-colors flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                View Our Products
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
