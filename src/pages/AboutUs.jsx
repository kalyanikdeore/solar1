import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Sparkles,
  Users,
  Award,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Leaf,
  Lightbulb,
  HeartHandshake,
  Star,
  Crown,
  Target,
  Eye,
  TrendingUp,
  Rocket,
  Gem,
  Clock,
  CheckCircle,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Sun,
  Battery,
  Power,
  Factory,
} from "lucide-react";

// Import images
import {
  img1,
  img3,
  img5,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
} from "../assets";

const teamMembers = [
  {
    name: "Er. Amit Kulkarni",
    role: "Co-founder and Director",
    img: Picture2,
    bio: "Visionary leader with 15+ years in sustainable technology",
    description: "Er. Amit Kulkarni is a young and dynamic engineer, innovator and entrepreneur from Nashik. He co-founded Navitas Efficens (NE) in 2014 to contribute towards Energy Self-Reliant Nation",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rahul@company.com",
    },
  },
  {
    name: "Mrs. Jayashree Kulkarni",
    role: "Co-founder and Director",
    img: Picture3,
    bio: "Digital marketing expert driving brand growth globally",
    description: "Jayashree Kulkarni is an iconic name in the field of mechanical engineering sector, working since 25 years, in spite of being a non technical person.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@company.com",
    },
  },
  {
    name: "Avanee Kulkarni",
    role: "Design & Media Head",
    img: Picture4,
    bio: "Tech innovator specializing in green energy solutions",
    description: "Avanee Kulkarni is a skilled architect with a passion for creating functional and aesthetically inspiring spaces. With expertise in architectural design.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amit@company.com",
    },
  },
  {
    name: "Sudhanva Kulkarni",
    role: "Technical Head",
    img: Picture6,
    bio: "Operations excellence with focus on sustainable practices",
    description: "Er. Sudhanva Kulkarni is a dynamic and an experienced electrical engineer with a strong background in designing and optimizing electrical systems.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@company.com",
    },
  },
  {
    name: "Durgaprasad Kulkarni",
    role: "Advisor - Finance",
    img: Picture5,
    bio: "Operations excellence with focus on sustainable practices",
    description: "Mr. Durgaprasad Naik is an experienced financial and legal advisor with extensive expertise in guiding organizations through complex financial and legal matters.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@company.com",
    },
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: CheckCircle, color: "#F4C430" },
  { number: "15+", label: "Years Experience", icon: Clock, color: "#4DB6E2" },
  { number: "200+", label: "Happy Clients", icon: Users, color: "#2E7D32" },
  { number: "25+", label: "Awards Won", icon: Award, color: "#F28B30" },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and green technologies",
    color: "#2E7D32",
    gradient: "from-[#2E7D32] to-[#4DB6E2]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solar solutions",
    color: "#F4C430",
    gradient: "from-[#F4C430] to-[#F28B30]"
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description: "Building strong partnerships for mutual success",
    color: "#4DB6E2",
    gradient: "from-[#4DB6E2] to-[#2E7D32]"
  },
  {
    icon: Gem,
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do",
    color: "#F28B30",
    gradient: "from-[#F28B30] to-[#5D4633]"
  },
];

const solarPlantFeatures = [
  {
    icon: Sun,
    title: "2 MW Capacity",
    description: "Power generation capacity sufficient for 1000+ households",
    value: "2 MW",
    color: "#F4C430"
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Advanced battery systems for uninterrupted power supply",
    value: "4 MWh",
    color: "#4DB6E2"
  },
  {
    icon: Power,
    title: "Annual Output",
    description: "Clean energy production reducing carbon footprint",
    value: "3.2 GWh",
    color: "#2E7D32"
  },
  {
    icon: Factory,
    title: "CO2 Reduction",
    description: "Annual carbon emission reduction equivalent",
    value: "2800 tons",
    color: "#F28B30"
  },
];

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  // Navigation handlers
  const handleExploreProducts = () => {
    navigate("/products");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const handleMeetTeam = () => {
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartProject = () => {
    navigate("/contact");
  };

  const handleFreeConsultation = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gradient-to-br from-[#F6F7F4] to-white text-[#1E1E1E] overflow-hidden">
      {/* HERO SECTION */}
      <section
        id="our-story"
        className="relative py-32 flex items-center justify-center bg-gradient-to-br from-[#F4C430] via-[#F28B30] to-[#2E7D32] text-white overflow-hidden px-6"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4C430]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#2E7D32]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#4DB6E2]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">
              ABOUT NAVITAS EFFICENS
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white to-[#F4C430] bg-clip-text text-transparent">
              Solar Innovation
            </span>
            <br />
            <span className="text-white">For a Sustainable Future</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-6xl mx-auto text-white/90 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Our comprehensive services span from Concept to Commissioning of Solar power projects
            and further operating and maintaining throughout the lifetime of the projects. We focus
            on designing innovative products and technologies beneficial for society through technology
            transfer. Our team consists of experts from renewable energy sectors, capable of executing
            large-scale Solar PV projects in compliance with stringent quality standards.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={handleExploreProducts}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-[#2E7D32] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>

            <motion.button
              onClick={handleFreeConsultation}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
            >
              Get Your Free Consultation
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-gradient-to-br from-white to-[#F6F7F4] rounded-2xl p-8 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300"
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
          </motion.div>
        </div>
      </section>

      {/* OUR VISION SECTION */}
      <section
        id="vision"
        ref={ref}
        className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden px-6"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div
            className="relative w-full lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={img1}
              alt="Leadership Team"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-6 left-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                Our Vision
              </div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6">
                <Target className="h-4 w-4 text-[#2E7D32]" />
                <span className="text-sm font-semibold text-[#2E7D32]">OUR VISION</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Powering a <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Sustainable</span> Future
              </h2>

              <motion.p
                className="text-xl text-[#4A4A4A] italic border-l-4 border-[#2E7D32] pl-6 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                "To be a global leader in advancing renewable energy solutions, driving the transition to a sustainable and carbon-free future"
              </motion.p>

              <motion.p
                className="text-lg text-[#4A4A4A] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                We aim to harness the power of nature to provide clean, reliable, and affordable energy
                to communities worldwide, fostering environmental stewardship and economic growth. By
                innovating and collaborating with stakeholders, we aspire to create a world where
                renewable energy is the primary source of power.
              </motion.p>
            </div>

            {/* Values Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon className="h-6 w-6" style={{ color: value.color }} />
                  </div>
                  <h4 className="font-bold text-[#1E1E1E] text-lg mb-2">{value.title}</h4>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOLAR POWER PLANT SECTION */}
      <section className="py-20 bg-white relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/20 mb-6">
              <Zap className="h-4 w-4 text-[#F4C430]" />
              <span className="text-sm font-semibold text-[#F4C430]">OUR MISSION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              2 MW Solar <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Power Plant</span>
            </h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
              Delivering sustainable, clean energy solutions that power communities and protect our planet
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Image Section */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={img5}
                alt="2 MW Solar Power Plant"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Solar Excellence</h3>
                <p className="text-lg opacity-90">State-of-the-art photovoltaic technology</p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#1E1E1E]">Our Mission</h3>

              <div className="space-y-6">
                {[
                  "To provide innovative, sustainable, and cost-effective solar energy solutions that empower businesses and communities",
                  "Committed to delivering high-quality design, installation, and maintenance services that maximize efficiency and performance",
                  "Creating a cleaner, greener future by harnessing the power of the sun while prioritizing customer satisfaction and environmental responsibility"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-[#4A4A4A] leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-r from-[#2E7D32]/10 to-[#4DB6E2]/10 rounded-2xl p-8 border border-[#2E7D32]/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-[#2E7D32]" />
                  <h4 className="font-bold text-[#1E1E1E] text-xl">Environmental Impact</h4>
                </div>
                <p className="text-[#4A4A4A] text-lg leading-relaxed">
                  Equivalent to planting 120,000 trees annually. Contributing significantly to
                  India's renewable energy targets and sustainable development goals.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Solar Plant Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {solarPlantFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h4 className="font-bold text-[#1E1E1E] text-lg">{feature.title}</h4>
                </div>
                <p className="text-3xl font-bold mb-2" style={{ color: feature.color }}>
                  {feature.value}
                </p>
                <p className="text-[#4A4A4A] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="team"
        className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden px-6"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB6E2]/10 border border-[#4DB6E2]/20 mb-6">
              <Users className="h-4 w-4 text-[#4DB6E2]" />
              <span className="text-sm font-semibold text-[#4DB6E2]">MEET OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              The <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Innovators</span>
            </h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
              A passionate team driving solar innovation for a sustainable future
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-lg border border-[#D9DDDC] hover:shadow-2xl transition-all duration-500 group h-full flex flex-col overflow-hidden">
                  <div className="p-8 flex flex-col flex-grow">
    <div className="relative mb-6 overflow-hidden rounded-2xl">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{member.name}</h3>
    <p className="text-[#4DB6E2] font-semibold mb-4">{member.role}</p>
    <p className="text-[#4A4A4A] leading-relaxed text-sm">{member.description}</p>
  </div>

  {/* Gradient bar AT THE REAL BOTTOM */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4C430] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#2E7D32] to-[#4DB6E2] text-white relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Build a{" "}
              <span className="bg-gradient-to-r from-white to-[#F4C430] bg-clip-text text-transparent">
                Sustainable Future
              </span>{" "}
              Together?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join us in our mission to create sustainable solar solutions that make a
              real difference. Let's collaborate to build a cleaner, smarter,
              and more sustainable world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={handleStartProject}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244, 196, 48, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all shadow-lg flex items-center gap-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={handleContactUs}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                Contact Our Team
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;