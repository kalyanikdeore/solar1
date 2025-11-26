import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Zap, Building, TreePalm, Factory } from "lucide-react";
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
    title: "1 MW Solar Power Plant",
    subtitle: "Kopargaon Commercial Installation",
    category: "1 MW Solar Power Plant - Kopargaon",
    url: Picture8,
    type: "Large Scale",
    capacity: "1 MW",
    icon: Sun,
    color: "#F4C430"
  },
  {
    id: 2,
    title: "2 MW Solar Power Plant",
    subtitle: "Akola Industrial Power Project",
    category: "2 MW Solar Power Plant - Akola",
    url: Picture7,
    type: "Large Scale",
    capacity: "2 MW",
    icon: Zap,
    color: "#4DB6E2"
  },
  {
    id: 3,
    title: "Solar Tree Innovation",
    subtitle: "First Net-metering Solar Tree in Maharashtra",
    category: "Solar Tree - Nashik",
    url: Picture9,
    type: "Innovation",
    capacity: "50 KW",
    icon: TreePalm,
    color: "#2E7D32"
  },
  {
    id: 4,
    title: "Industrial Rooftop",
    subtitle: "100 KW Commercial Rooftop Installation",
    category: "100 KW Industrial Rooftop - Nashik",
    url: Picture10,
    type: "Commercial",
    capacity: "100 KW",
    icon: Building,
    color: "#F28B30"
  },
  {
    id: 5,
    title: "Pre-engineered Structure",
    subtitle: "10,000 sq.ft. Industrial Shed Structure",
    category: "Pre-engineered Structure - Nashik",
    url: Picture11,
    type: "Structure",
    capacity: "10K sq.ft.",
    icon: Factory,
    color: "#4DB6E2"
  },
];

const categories = [
  "All",
  "Large Scale",
  "Commercial",
  "Innovation",
  "Structure"
];

const projectTypes = {
  "Large Scale": { icon: Sun, color: "#F4C430", bgColor: "#F4C43015" },
  "Commercial": { icon: Building, color: "#4DB6E2", bgColor: "#4DB6E215" },
  "Innovation": { icon: TreePalm, color: "#2E7D32", bgColor: "#2E7D3215" },
  "Structure": { icon: Factory, color: "#F28B30", bgColor: "#F28B3015" }
};

const ImageWithFallback = ({ src, alt, className, fallbackText }) => {
  const [imgError, setImgError] = useState(false);
  if (imgError || !src) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-[#F6F7F4] to-white flex items-center justify-center border border-[#D9DDDC]`}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-[#4A4A4A] text-sm">
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
      : solarProjects.filter((p) => p.type === selectedCategory);

  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
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
    hover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <Sun className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              PROJECT GALLERY
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Solar Project{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            Explore our diverse solar projects powering India's clean energy future
            with innovative solutions and sustainable technology
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={categoryVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const typeInfo = projectTypes[category] || { icon: Sun, color: "#2E7D32", bgColor: "#2E7D3215" };
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${selectedCategory === category
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-[#4A4A4A] border-[#D9DDDC] hover:shadow-md"
                  }`}
                style={{
                  backgroundColor: selectedCategory === category ? typeInfo.color : undefined,
                  borderColor: selectedCategory === category ? typeInfo.color : undefined
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category !== "All" && (
                  <typeInfo.icon className="w-4 h-4" />
                )}
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden border border-[#D9DDDC]"
                custom={index}
                variants={fadeInZoom}
                whileHover="hover"
                layout
                onClick={() => setSelectedImage(project)}
              >
                {/* Image Section */}
                <motion.div
                  className="relative h-64 overflow-hidden"
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

                  {/* Capacity Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.capacity}
                    </div>
                  </div>

                  {/* Type Icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
                        border: `2px solid ${project.color}20`
                      }}
                    >
                      <project.icon className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#1E1E1E] group-hover:text-[#2E7D32] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                    {project.subtitle}
                  </p>

                  {/* Project Type */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <project.icon className="w-3 h-3" style={{ color: project.color }} />
                    </div>
                    <span className="text-sm text-[#4A4A4A] font-medium">{project.type}</span>
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: project.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-[#F6F7F4] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#D9DDDC]">
              <Sun className="w-12 h-12 text-[#4A4A4A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">No projects found</h3>
            <p className="text-[#4A4A4A]">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Modal */}
        {/* Modal */}
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
        className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto flex flex-col"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden bg-gray-100 flex items-center justify-center">
          <ImageWithFallback
            src={selectedImage.url}
            alt={selectedImage.title}
            className="w-full h-full object-contain"
            fallbackText={selectedImage.title}
          />
          
          {/* Close Button */}
          <motion.button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-[#1E1E1E] rounded-full p-2 hover:bg-white transition-all duration-300 border border-[#D9DDDC] shadow-lg"
            onClick={() => setSelectedImage(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${selectedImage.color}15, ${selectedImage.color}30)`,
                border: `2px solid ${selectedImage.color}20`
              }}
            >
              <selectedImage.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: selectedImage.color }} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E1E1E] leading-tight break-words">
                {selectedImage.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm sm:text-base mt-1 break-words">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#F6F7F4] rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="font-semibold text-[#1E1E1E] text-sm sm:text-base mb-1 sm:mb-2">Capacity</div>
              <div className="text-[#4A4A4A] text-sm sm:text-base break-words">{selectedImage.capacity}</div>
            </div>
            <div className="bg-[#F6F7F4] rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="font-semibold text-[#1E1E1E] text-sm sm:text-base mb-1 sm:mb-2">Project Type</div>
              <div className="text-[#4A4A4A] text-sm sm:text-base break-words">{selectedImage.type}</div>
            </div>
          </div>

          {/* Additional Content Area (if needed) */}
          {selectedImage.description && (
            <div className="mt-4 sm:mt-6">
              <div className="font-semibold text-[#1E1E1E] text-sm sm:text-base mb-2">Project Details</div>
              <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;