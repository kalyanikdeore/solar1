import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture11,
  img1,
} from "../assets";

const solarProjects = [
  {
    id: 1,
    // title: "1 MW Solar Power Plant - Kopargaon",
    // subtitle: "Commercial solar power installation",
    category: "1 MW Solar Power Plant - Kopargaon",
    url: Picture8,
  },
  {
    id: 2,
    // title: "2 MW Solar Power Plant - Akola",
    // subtitle: "Large-scale solar power project for industrial applications",
    category: "2 MW Solar Power Plant - Akola",
    url: Picture7,
  },
  {
    id: 3,
    // title: "Solar Tree - Nashik",
    // subtitle: "First ever SOLAR TREE with Net-metering in Maharashtra",
    category: "Solar Tree - Nashik",
    url: Picture9,
  },
  {
    id: 4,
    // title: "100 KW Industrial Rooftop - Nashik",
    // subtitle: "Industrial rooftop solar project",
    category: "100 KW Industrial Rooftop - Nashik",
    url: Picture10,
  },
  {
    id: 5,
    // title: "Pre-engineered Structure - Nashik",
    // subtitle: "10,000 sq.ft. industrial shed structure",
    category: "Pre-engineered Structure - Nashik",
    url: Picture11,
  },
];

const categories = [
  "All",
  "2 MW Solar Power Plant - Akola",
  "1 MW Solar Power Plant - Kopargaon",
  "Solar Tree - Nashik",
  "100 KW Industrial Rooftop - Nashik",
  "Pre-engineered Structure - Nashik",
];

const ImageWithFallback = ({ src, alt, className, fallbackText }) => {
  const [imgError, setImgError] = useState(false);
  if (imgError || !src) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center`}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-gray-500 text-sm">
            {fallbackText || "Image not available"}
          </p>
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? solarProjects
      : solarProjects.filter((p) => p.category === selectedCategory);

  const titleVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const categoryVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const fadeInZoom = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // ✨ New top-to-bottom animation for image only
  const imageVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen  pt-48 mb-30 px-8 sm:px-12 lg:px-24">
      {/* --- Title Section --- */}
      <motion.div
        className="text-center mb-12"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <h1 className="text-4xl font-extrabold text-[#10a19d] mb-4 tracking-tight">
          Project Gallery
        </h1> */}
        <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
          Project{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
            Gallery
          </span>
        </h2>
        <motion.div
          className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />{" "}
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Explore our diverse solar projects powering India’s clean energy
          future.
        </p>
      </motion.div>

      {/* --- Category Buttons --- */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16"
        variants={categoryVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#10a19d] text-white border-[#10a19d] shadow-md scale-105"
                : "bg-white text-[#10a19d] border-[#10a19d] hover:bg-[#f0fdfa]"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* --- Project Cards --- */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl cursor-pointer group"
              custom={index}
              variants={fadeInZoom}
              whileHover="hover"
              layout
              onClick={() => setSelectedImage(project)}
            >
              {/* --- Image Section with Top-to-Bottom Animation --- */}
              <motion.div
                className="overflow-hidden relative h-64"
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <ImageWithFallback
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fallbackText={project.title}
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-[#a7f3f0]">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-96 overflow-hidden">
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  fallbackText={selectedImage.title}
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-[#10a19d] text-white rounded-full p-2 px-3 text-lg font-bold hover:bg-[#0d8c89] transition"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#10a19d] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700">{selectedImage.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
