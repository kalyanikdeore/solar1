import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const clientsRef = useRef(null);

  // Static testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      project: "2 MW Solar Plant - Akola",
      quote:
        "Navitas Efficens delivered our solar project with exceptional professionalism. The energy savings have been remarkable and the ROI exceeded our expectations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      project: "100 KW Industrial Rooftop - Nashik",
      quote:
        "The team at Navitas Efficens provided end-to-end solar solutions with outstanding expertise. Their maintenance support has been excellent.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Amit Patel",
      project: "Solar Tree Installation",
      quote:
        "From consultation to commissioning, Navitas provided excellent service. Our electricity bills have reduced by 80% and the system performance is outstanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 4,
      name: "Sunita Desai",
      project: "1 MW Plant - Kopargaon",
      quote:
        "Navitas Efficens transformed our energy infrastructure with their solar expertise. The project was completed on time and within budget.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 5,
      name: "Vikram Singh",
      project: "Commercial Solar Installation",
      quote:
        "The quality of work and attention to detail by Navitas team is exceptional. Highly recommended for any solar energy project.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 6,
      name: "Meera Joshi",
      project: "Residential Solar System",
      quote:
        "Excellent service from start to finish. The team was professional, knowledgeable, and delivered exactly what was promised.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1551836026-d5c88ac5d691?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  // Client testimonials carousel scroll
  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Client Testimonials */}
        <div className="mt-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* What Our Clients Say */}
            <span className="text-black">What Our </span>
            <span className="text-[#10a19d]">Clients Say</span>
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it - hear from our satisfied customers
            who have transformed their energy infrastructure with our solar
            solutions.
          </motion.p>

          <div className="relative">
            <button
              onClick={() => scrollClients("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#10a19d] hover:bg-[#0d817d] text-white p-3 rounded-full shadow-lg hidden md:block transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollClients("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#10a19d] hover:bg-[#0d817d] text-white p-3 rounded-full shadow-lg hidden md:block transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

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
                  className="min-w-[300px] sm:min-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#10a19d]"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {client.name}
                        </h4>
                        <p className="text-sm text-[#10a19d] font-medium">
                          {client.project}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      "{client.quote}"
                    </p>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#10a19d] transition-colors"
                onClick={() => {
                  if (clientsRef.current) {
                    const scrollPosition = index * 416; // Approximate card width + gap
                    clientsRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
