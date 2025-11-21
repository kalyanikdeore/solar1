import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, Settings, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  // Data for the "Our Journey with You" steps
  const processSteps = [
    // {
    //   icon: CheckCircle,
    //   title: "Support & Maintenance",
    //   text: "Our comprehensive services span from Concept to Commissioning of Solar power projects and further operating and maintaining them throughout the lifetime of the projects. We focus on designing innovative products and technologies beneficial for society through technology transfer.",
    // },
    {
      icon: Sun,
      title: "Turnkey Solutions",
      text: "End-to-end solar projects from concept to commissioning.",
    },
    {
      icon: Zap,
      title: "Expert Team",
      text: "Renewable energy specialists with years of experience.",
    },
    {
      icon: Settings,
      title: "Quality Focus",
      text: "Stringent quality standards and best industry practices.",
    },
  ];

  // Data for "Trusted By" logos (using placeholder names)
  const trustedPartners = [
    "International Renewable Energy Corp",
    "GreenTech Solutions",
    "EcoPower Global",
    "Sustainable Future Inc.",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Updated for impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Navitas <span className="text-[#10a19d]">Efficens</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Navitas Efficens (NE) is an internationally registered brand and
            company engaged in designing, installation and commissioning of
            Solar PV power projects, providing turnkey solutions all under one
            roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text, Process & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* "Our Journey with You" Process Section */}
            <div>
              {/* <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                Our comprehensive services span from Concept to Commissioning of
                Solar power projects and further operating and maintaining them
                throughout the lifetime of the projects.
              </p> */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Journey with You
              </h3>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-[#10a19d] rounded-lg text-white">
                        <step.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Updated CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto bg-gradient-to-r from-[#10a19d] to-[#0d817d] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center group"
              >
                Discover Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Integrated Image and Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professionals installing solar panels by Navitas Efficens"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats Card - Moved to top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#10a19d] mb-1">
                  2MW+
                </div>
                <div className="text-sm text-gray-600">
                  Solar Capacity Installed
                </div>
              </div>
            </motion.div>

            {/* New "Trusted By" Bar - Positioned at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-0 right-0 bg-gray-800 text-white rounded-lg shadow-lg p-4"
            >
              <p className="text-center text-sm font-medium mb-2">
                Trusted By Industry Leaders
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs opacity-90">
                {trustedPartners.map((partner, index) => (
                  <span key={index}>{partner}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
