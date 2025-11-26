import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaPlay,
  FaSolarPanel,
  FaUsers,
  FaAward,
  FaCog,
  FaLeaf,
  FaBolt,
  FaSun,
} from "react-icons/fa";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import ServicesSection from "./ServicesSection";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import CTASection from "./CTASection";
import ContactLocationSection from "./ContactLocationSection";
import Video from "./Video";

const Home = () => {
  const servicesData = [
    {
      id: 1,
      title: "Solar EPC Services",
      description:
        "End-to-end Engineering, Procurement, and Construction services for solar projects with quality assurance.",
      icon: <FaSolarPanel className="text-3xl" />,
      features: ["Custom Design", "Quality Procurement", "Professional Installation"],
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]"
    },
    {
      id: 2,
      title: "Solar BOS Components",
      description:
        "High-quality Balance of System components including mounting structures and safety equipment.",
      icon: <FaCog className="text-3xl" />,
      features: ["Mounting Structures", "Switchgear", "Monitoring Systems"],
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]"
    },
    {
      id: 3,
      title: "Consultancy Services",
      description:
        "Expert advice for planning, design, and implementation of solar energy systems.",
      icon: <FaUsers className="text-3xl" />,
      features: ["Feasibility Study", "Project Management", "Performance Monitoring"],
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]"
    },
    {
      id: 4,
      title: "Skill Development",
      description:
        "Comprehensive training programs for solar industry professionals and technicians.",
      icon: <FaAward className="text-3xl" />,
      features: ["Hands-on Training", "Industry Experts", "Career Growth"],
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]"
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Industrial Client",
      content:
        "Navitas Efficens installed our 100KW rooftop solar system with exceptional professionalism. The energy savings have been remarkable!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "2MW Solar Plant"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Commercial Business Owner",
      content:
        "The team at Navitas Efficens delivered our solar project on time and within budget. Their expertise in solar EPC is outstanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Rooftop Installation"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Residential Client",
      content:
        "From consultation to commissioning, Navitas provided excellent service. Our electricity bills have reduced by 80%!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Solar Tree Project"
    },
  ];

  const statsData = [
    { 
      number: "50+", 
      label: "Projects Completed",
      icon: FaSolarPanel,
      color: "#F4C430"
    },
    { 
      number: "2MW+", 
      label: "Solar Capacity",
      icon: FaBolt,
      color: "#4DB6E2"
    },
    { 
      number: "100%", 
      label: "Client Satisfaction",
      icon: FaStar,
      color: "#2E7D32"
    },
    { 
      number: "5+", 
      label: "Years Experience",
      icon: FaAward,
      color: "#F28B30"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F7F4] to-white">
      <HeroSection />

      {/* Stats Section - Redesigned */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F4C430]/5 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2E7D32]/5 rounded-full blur-xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-4">
              <FaLeaf className="text-[#2E7D32] text-sm" />
              <span className="text-sm font-semibold text-[#2E7D32]">OUR IMPACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
              Powering <span className="text-[#F4C430]">Progress</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
              Delivering sustainable energy solutions with measurable results and environmental impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-[#F6F7F4] rounded-2xl p-8 text-center shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon className="text-2xl" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold text-[#1E1E1E] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#4A4A4A] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <WhoWeAre />
      
      {/* Services Section */}
      <ServicesSection />
      
      <Video />
      
      <WhyChooseUs />

      {/* Testimonials Section */}
      <TestimonialSection />
      
      <ContactLocationSection />

      <CTASection />
    </div>
  );
};

export default Home;