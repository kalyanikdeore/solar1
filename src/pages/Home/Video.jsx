import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const YouTubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Your YouTube video data - updated with solar-related content
  const videos = [
    { id: "2nK34ik34UI", title: "Solar Farm Installation", category: "Large Scale" },
    { id: "tBp7J6GI5VY", title: "Rooftop Solar Project", category: "Commercial" },
    { id: "ml1jWuXfZ58", title: "Solar Tree Innovation", category: "Innovation" },
    { id: "DduhjZd3Haw", title: "Client Success Story", category: "Testimonial" },
    { id: "A-N3uO0ODdc", title: "Solar Panel Manufacturing", category: "Behind Scenes" },
    { id: "8rKCghj3Xa0", title: "Renewable Energy Impact", category: "Documentary" },
    { id: "IcPXLnOQXC4", title: "Smart Solar Solutions", category: "Technology" },
    { id: "bfSie8a1-_M", title: "Team Installation Process", category: "Process" },
  ];

  const totalVideos = videos.length;

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVideos);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalVideos) % totalVideos);
  };

  const goToVideo = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextVideo();
    }, 6000); // Change video every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Calculate visible videos for the carousel
  const getVisibleVideos = () => {
    const visible = [];
    const totalVisible = 3; // Show 3 videos at a time

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalVideos) % totalVideos;
      visible.push({
        ...videos[index],
        position: i === 0 ? "center" : i === -1 ? "left" : "right",
      });
    }

    return visible;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F7F4] to-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6">
            <Play className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              PROJECT SHOWCASE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Solar Projects{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            Explore our innovative solar installations and renewable energy projects that are powering a sustainable future
          </p>
        </motion.div>

        {/* Video Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            <AnimatePresence mode="wait">
              {visibleVideos.map((video, index) => (
                <motion.div
                  key={`${video.id}-${video.position}`}
                  initial={{ 
                    opacity: video.position === "center" ? 1 : 0.6,
                    scale: video.position === "center" ? 1 : 0.85,
                    x: video.position === "left" ? -50 : video.position === "right" ? 50 : 0
                  }}
                  animate={{ 
                    opacity: video.position === "center" ? 1 : 0.6,
                    scale: video.position === "center" ? 1 : 0.85,
                    x: 0
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative transition-all duration-500 ${
                    video.position === "center" 
                      ? "w-full lg:w-1/2 z-10" 
                      : "w-1/4 hidden lg:block"
                  }`}
                >
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D9DDDC] ${
                    video.position === "center" ? "shadow-2xl" : ""
                  }`}>
                    {/* Video Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        video.category === "Large Scale" 
                          ? "bg-[#F4C430]/20 text-[#F28B30] border border-[#F4C430]/30"
                          : video.category === "Commercial"
                          ? "bg-[#4DB6E2]/20 text-[#4DB6E2] border border-[#4DB6E2]/30"
                          : video.category === "Innovation"
                          ? "bg-[#2E7D32]/20 text-[#2E7D32] border border-[#2E7D32]/30"
                          : "bg-[#F28B30]/20 text-[#F28B30] border border-[#F28B30]/30"
                      }`}>
                        {video.category}
                      </span>
                    </div>

                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-2xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}${video.position === "center" ? '?autoplay=1&mute=1' : ''}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    
                    {/* Video Title */}
                    <div className="p-4 bg-white">
                      <h3 className={`font-semibold text-[#1E1E1E] ${
                        video.position === "center" ? "text-lg" : "text-sm"
                      }`}>
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#1E1E1E] p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 z-20 border border-[#D9DDDC] hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextVideo}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#1E1E1E] p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 z-20 border border-[#D9DDDC] hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1E1E1E] p-2 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 z-20 border border-[#D9DDDC]"
            aria-label={isAutoPlaying ? "Pause auto-play" : "Play auto-play"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Video Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 flex-wrap">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#F4C430] to-[#F28B30] scale-125"
                    : "bg-[#D9DDDC] hover:bg-[#4DB6E2]"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          {/* Video Counter */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#D9DDDC]">
              <span className="text-lg font-bold text-[#1E1E1E]">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#4A4A4A]">/</span>
              <span className="text-[#4A4A4A]">
                {String(totalVideos).padStart(2, '0')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;