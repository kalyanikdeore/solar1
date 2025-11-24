import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, Settings, CheckCircle, Leaf, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  // Data for the "Our Journey with You" steps
  const processSteps = [
    {
      icon: Sun,
      title: "Turnkey Solutions",
      text: "End-to-end solar projects from concept to commissioning with cutting-edge technology.",
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]"
    },
    {
      icon: Zap,
      title: "Expert Team",
      text: "Renewable energy specialists with years of experience and certifications.",
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]"
    },
    {
      icon: Settings,
      title: "Quality Focus",
      text: "Stringent quality standards and best industry practices for maximum efficiency.",
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]"
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      text: "Creating lasting environmental benefits through renewable energy solutions.",
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]"
    },
  ];

  // Data for "Trusted By" logos
  const trustedPartners = [
    "SolarTech International",
    "GreenEnergy Corp",
    "EcoPower Solutions",
    "Renewable Future Inc",
  ];

  const achievements = [
    { number: "50+", label: "Projects", color: "#F4C430" },
    { number: "2MW+", label: "Capacity", color: "#4DB6E2" },
    { number: "100%", label: "Satisfaction", color: "#2E7D32" },
    { number: "5+", label: "Years Experience", color: "#F28B30" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[#F4C430]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#2E7D32]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6">
            <Leaf className="w-4 h-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32]">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Leading <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Solar Innovation</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-4xl mx-auto leading-relaxed">
            Navitas Efficens is an internationally recognized brand delivering comprehensive
            solar energy solutions from design to commissioning, providing sustainable
            turnkey projects under one roof.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Process Steps & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Our Approach */}
              <div>
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-8">
                  Our Solar Approach
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}15, ${step.color}30)`,
                          border: `2px solid ${step.color}20`
                        }}
                      >
                        <step.icon size={24} style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#1E1E1E] text-lg mb-2">
                          {step.title}
                        </h4>
                        <p className="text-[#4A4A4A] leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solar panel installation by Navitas Efficens"
                  className="w-full h-[500px] object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/30 to-transparent" />
              </div>

              {/* Trusted By Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-18 left-6 right-6 bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] text-white rounded-2xl shadow-lg p-6"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Award className="w-5 h-5" />
                    <p className="font-semibold text-lg">Trusted By Industry Leaders</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
                    {trustedPartners.map((partner, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 * index }}
                        className="hover:text-[#F4C430] transition-colors cursor-pointer"
                      >
                        {partner}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-28 sm:pt-12 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(244, 196, 48, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center group"
          >
            Explore Our Mission
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;