import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const clientsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Static testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      project: "2 MW Solar Plant - Akola",
      quote: "Navitas Efficens delivered our solar project with exceptional professionalism. The energy savings have been remarkable and the ROI exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Large Scale",
      savings: "75% energy cost reduction"
    },
    {
      id: 2,
      name: "Priya Sharma",
      project: "100 KW Industrial Rooftop - Nashik",
      quote: "The team at Navitas Efficens provided end-to-end solar solutions with outstanding expertise. Their maintenance support has been excellent.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Commercial",
      savings: "60% lower electricity bills"
    },
    {
      id: 3,
      name: "Amit Patel",
      project: "Solar Tree Installation",
      quote: "From consultation to commissioning, Navitas provided excellent service. Our electricity bills have reduced by 80% and the system performance is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Innovation",
      savings: "80% cost savings achieved"
    },
    {
      id: 4,
      name: "Sunita Desai",
      project: "1 MW Plant - Kopargaon",
      quote: "Navitas Efficens transformed our energy infrastructure with their solar expertise. The project was completed on time and within budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Industrial",
      savings: "2.5 years ROI"
    },
    {
      id: 5,
      name: "Vikram Singh",
      project: "Commercial Solar Installation",
      quote: "The quality of work and attention to detail by Navitas team is exceptional. Highly recommended for any solar energy project.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Commercial",
      savings: "70% energy independence"
    },
    {
      id: 6,
      name: "Meera Joshi",
      project: "Residential Solar System",
      quote: "Excellent service from start to finish. The team was professional, knowledgeable, and delivered exactly what was promised.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836026-d5c88ac5d691?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "Residential",
      savings: "90% grid dependency reduced"
    },
  ];

  // Client testimonials carousel scroll
  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => {
        const newIndex = direction === "left" ? prev - 1 : prev + 1;
        return Math.max(0, Math.min(newIndex, testimonials.length - 1));
      });
    }
  };

  const goToSlide = (index) => {
    if (clientsRef.current) {
      const scrollPosition = index * 416; // Approximate card width + gap
      clientsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <Quote className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Success <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Stories</span>
          </h2>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            Discover how businesses and homeowners are transforming their energy infrastructure 
            with our reliable solar solutions and achieving significant cost savings.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollClients("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#1E1E1E] p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all border border-[#D9DDDC] hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scrollClients("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#1E1E1E] p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all border border-[#D9DDDC] hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Container */}
          <div
            ref={clientsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((client, index) => (
              <motion.div
                key={client.id}
                className="min-w-[350px] sm:min-w-[420px] bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D9DDDC] hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, #F4C43015, #F4C43030)`,
                        border: `2px solid #F4C43020`
                      }}
                    >
                      <Quote className="h-5 w-5 text-[#F4C430]" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      client.category === "Large Scale" 
                        ? "bg-[#F4C430]/20 text-[#F28B30] border border-[#F4C430]/30"
                        : client.category === "Commercial"
                        ? "bg-[#4DB6E2]/20 text-[#4DB6E2] border border-[#4DB6E2]/30"
                        : client.category === "Innovation"
                        ? "bg-[#2E7D32]/20 text-[#2E7D32] border border-[#2E7D32]/30"
                        : "bg-[#F28B30]/20 text-[#F28B30] border border-[#F28B30]/30"
                    }`}>
                      {client.category}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#4A4A4A] mb-6 leading-relaxed text-lg italic">
                    "{client.quote}"
                  </p>

                  {/* Savings Highlight */}
                  <div className="bg-gradient-to-r from-[#2E7D32]/10 to-[#4DB6E2]/10 rounded-xl p-4 mb-6 border border-[#2E7D32]/20">
                    <p className="text-sm font-semibold text-[#2E7D32] text-center">
                      {client.savings}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#4DB6E2] shadow-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1E1E1E] text-lg">
                        {client.name}
                      </h4>
                      <p className="text-[#4DB6E2] font-medium text-sm">
                        {client.project}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#F4C430] text-[#F4C430]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-[#F4C430] to-[#F28B30] scale-125"
                  : "bg-[#D9DDDC] hover:bg-[#4DB6E2]"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;