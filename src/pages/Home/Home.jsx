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
      icon: <FaSolarPanel className="text-3xl text-[#10a19d]" />,
      features: [
        "Custom Design",
        "Quality Procurement",
        "Professional Installation",
      ],
    },
    {
      id: 2,
      title: "Solar BOS Components",
      description:
        "High-quality Balance of System components including mounting structures and safety equipment.",
      icon: <FaCog className="text-3xl text-[#10a19d]" />,
      features: ["Mounting Structures", "Switchgear", "Monitoring Systems"],
    },
    {
      id: 3,
      title: "Consultancy Services",
      description:
        "Expert advice for planning, design, and implementation of solar energy systems.",
      icon: <FaUsers className="text-3xl text-[#10a19d]" />,
      features: [
        "Feasibility Study",
        "Project Management",
        "Performance Monitoring",
      ],
    },
    {
      id: 4,
      title: "Skill Development",
      description:
        "Comprehensive training programs for solar industry professionals and technicians.",
      icon: <FaAward className="text-3xl text-[#10a19d]" />,
      features: ["Hands-on Training", "Industry Experts", "Career Growth"],
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
    },
  ];

  const statsData = [
    { number: "50+", label: "Projects Completed" },
    { number: "2MW+", label: "Solar Capacity" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-4xl font-bold text-[#10a19d] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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

      <CTASection />
      <ContactLocationSection />
    </div>
  );
};

export default Home;
