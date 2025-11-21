// YouTubeCarousel.jsx
import React, { useState, useEffect } from "react";

const YouTubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your YouTube video data
  const videos = [
    { id: "2nK34ik34UI", title: "Project Showcase 1" },
    { id: "tBp7J6GI5VY", title: "Creative Process" },
    { id: "ml1jWuXfZ58", title: "Behind the Scenes" },
    { id: "DduhjZd3Haw", title: "Client Testimonial" },
    { id: "A-N3uO0ODdc", title: "Final Results" },
    { id: "8rKCghj3Xa0", title: "Making of Documentary" },
    { id: "IcPXLnOQXC4", title: "Innovation in Action" },
    { id: "bfSie8a1-_M", title: "Team Collaboration" },
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

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate visible videos for the carousel
  const getVisibleVideos = () => {
    const visible = [];
    const totalVisible = 3; // Show 3 videos at a time (left, center, right)

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              Work Gallery
            </span>
          </h2>
          <div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and creative work in this curated
            collection
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-8">
            {/* Previous Video (Left) */}
            <div className="w-1/4 opacity-60 scale-90 transform transition-all duration-500">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${visibleVideos[0].id}`}
                    title={visibleVideos[0].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Current Video (Center) */}
            <div className="w-1/2 transform transition-all duration-500 scale-100 z-10">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${visibleVideos[1].id}?autoplay=1`}
                    title={visibleVideos[1].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Next Video (Right) */}
            <div className="w-1/4 opacity-60 scale-90 transform transition-all duration-500">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${visibleVideos[2].id}`}
                    title={visibleVideos[2].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-0 md:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-[#10a19d] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#0d8c89] transition-all duration-300 z-20"
            aria-label="Previous video"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextVideo}
            className="absolute right-0 md:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-[#10a19d] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#0d8c89] transition-all duration-300 z-20"
            aria-label="Next video"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Video Indicators */}
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 md:space-x-3 flex-wrap">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-2 h-1 md:w-4 md:h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#10a19d] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
