import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSolarPanel, FaLeaf, FaBolt, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const solarProjects = [
    {
      id: 1,
      title: "2 MW Solar Power Plant",
      location: "Akola Installation",
      description: "Large-scale ground-mounted solar power plant delivering clean energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: { capacity: "2MW", households: "1500", co2: "2800" }
    },
    {
      id: 2,
      title: "Industrial Rooftop Project",
      location: "100 KW Nashik Installation",
      description: "Commercial rooftop solar system with advanced monitoring",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: { capacity: "100KW", households: "80", co2: "140" }
    },
    {
      id: 3,
      title: "Solar Tree Innovation",
      location: "First in Maharashtra",
      description: "Revolutionary solar tree design with net-metering capabilities",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: { capacity: "50KW", households: "40", co2: "70" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solarProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, solarProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solarProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solarProjects.length) % solarProjects.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images with Solar Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={solarProjects[currentSlide].image}
            alt={solarProjects[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Solar Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/40 via-[#2E7D32]/30 to-[#4DB6E2]/20" />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Solar Flare Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Eco Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <FaLeaf className="text-[#2E7D32]" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Renewable Energy
                  </span>
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                  <span className="text-sm text-white/80">2024</span>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">{solarProjects[currentSlide].title}</span>
                </h1>

                {/* Location */}
                <p className="text-2xl md:text-3xl text-[#F4C430] font-light">
                  {solarProjects[currentSlide].location}
                </p>

                {/* Description */}
                <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                  {solarProjects[currentSlide].description}
                </p>

                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F4C430]">
                      {solarProjects[currentSlide].stats.capacity}
                    </div>
                    <div className="text-sm text-white/80 mt-1">Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#2E7D32]">
                      {solarProjects[currentSlide].stats.households}
                    </div>
                    <div className="text-sm text-white/80 mt-1">Households</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#4DB6E2]">
                      {solarProjects[currentSlide].stats.co2}t
                    </div>
                    <div className="text-sm text-white/80 mt-1">CO₂ Reduction</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(242, 139, 48, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/services")}
                    className="group bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-lg"
                  >
                    View Project Details
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                  >
                    Start Your Project
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Content - Controls & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Project Counter & Controls */}
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20"
                >
                  ‹
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20"
                >
                  {isAutoPlaying ? <FaPause /> : <FaPlay />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20"
                >
                  ›
                </motion.button>
              </div>

              <div className="text-white text-right">
                <div className="text-3xl font-bold">
                  {String(currentSlide + 1).padStart(2, "0")}
                </div>
                <div className="text-sm text-white/60">
                  / {String(solarProjects.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Project Thumbnails */}
            {/* <div className="grid grid-cols-3 gap-4">
              {solarProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? "border-[#F4C430] scale-105 shadow-lg"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-24 object-cover"
                  />
                  {index === currentSlide && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#F4C430]/20 border-2 border-[#F4C430]"
                    />
                  )} */}
                  {/* Project Indicator */}
                  {/* <div className={`absolute bottom-2 left-2 w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-[#F4C430]" : "bg-white/60"
                  }`} />
                </motion.button>
              ))}
            </div> */}

            {/* Features Quick Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: FaSolarPanel, label: "Solar", color: "#F4C430" },
                { icon: FaLeaf, label: "Eco", color: "#2E7D32" },
                { icon: FaBolt, label: "Power", color: "#4DB6E2" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-white/40 transition-all"
                >
                  <feature.icon 
                    className="text-xl mx-auto mb-2" 
                    style={{ color: feature.color }} 
                  />
                  <div className="text-white text-sm font-medium">{feature.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          // animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#F4C430] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;