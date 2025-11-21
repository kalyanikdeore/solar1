import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import React Router's useNavigate

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroProjects = [
    {
      id: 1,
      title: "2 MW Solar Power Plant",
      subtitle: "Akola Installation",
      description:
        "Large-scale ground-mounted solar power plant delivering clean energy",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      service: "Solar EPC",
      year: "2024",
    },
    {
      id: 2,
      title: "Industrial Rooftop Project",
      subtitle: "100 KW Nashik Installation",
      description: "Commercial rooftop solar system with advanced monitoring",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      service: "Solar BOS",
      year: "2023",
    },
    {
      id: 3,
      title: "Solar Tree Innovation",
      subtitle: "First in Maharashtra",
      description:
        "Revolutionary solar tree design with net-metering capabilities",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      service: "Innovation",
      year: "2024",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % heroProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroProjects.length]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % heroProjects.length);
  };

  const prevProject = () => {
    setActiveProject(
      (prev) => (prev - 1 + heroProjects.length) % heroProjects.length
    );
  };

  const selectProject = (index) => {
    setActiveProject(index);
  };

  return (
    <section className="relative h-screen pt-20">
      {/* Background Images with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroProjects[activeProject].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10a19d]/60 via-transparent to-[#0d817d]/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Service Tag */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-[#10a19d]"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {heroProjects[activeProject].service}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">
                      {heroProjects[activeProject].year}
                    </span>
                  </motion.div>

                  {/* Main Title */}
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    {heroProjects[activeProject].title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                    {heroProjects[activeProject].subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 max-w-md">
                    {heroProjects[activeProject].description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/services")} // Redirect
                      className="bg-[#10a19d] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group hover:bg-[#0d817d]"
                    >
                      Our Services
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        <FaArrowRight />
                      </motion.div>
                    </motion.button>

                    {/* Updated Contact Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/contact")} // Redirect
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      Get in Touch
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Project Selector */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:absolute lg:bottom-8 lg:right-8 lg:max-w-md"
            >
              {/* Controls */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
                  >
                    ‹
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
                  >
                    {isAutoPlaying ? <FaPause /> : <FaPlay />}
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
                  >
                    ›
                  </motion.button>
                </div>

                {/* Project Counter */}
                <div className="text-white text-sm font-medium">
                  <span className="text-2xl font-bold">
                    {String(activeProject + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1">/</span>
                  <span className="text-gray-300">
                    {String(heroProjects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Project Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {heroProjects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => selectProject(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === activeProject
                        ? "border-[#10a19d] scale-105"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-20 object-cover"
                    />
                    {index === activeProject && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 border-2 bg-[#10a19d]/20"
                        style={{ borderColor: "#10a19d" }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
