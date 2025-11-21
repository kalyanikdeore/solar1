// src/components/AboutUs.jsx
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
    description:
      "Er. Amit Kulkarni is a young and dynamic engineer, innovator and entrepreneur from Nashik. He co-founded Navitas Efficens (NE) in 2014 to contribute towards Energy Self-Reliant Nation",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rahul@company.com",
    },
  },
  {
    name: "Mrs. Jayashree kulkarni",
    role: "Co-founder and Director",
    img: Picture3,
    bio: "Digital marketing expert driving brand growth globally",
    description:
      "Jayashree Kulkarni is an iconic name in the field of mechanical engineering sector, working since 25 years, in spite of being a non technical person. ",
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
    description:
      "Avanee Kulkarni is a skilled architect with a passion for creating functional and aesthetically inspiring spaces. With expertise in architectural design. ",
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
    description:
      "Er. Sudhanva Kulkarni is a dynamic and an experienced electrical engineer with a strong background in designing and optimizing electrical systems. ",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@company.com",
    },
  },
  {
    name: "Durgaprsad Kulkarni",
    role: "Advisor - Finance",
    img: Picture5,
    bio: "Operations excellence with focus on sustainable practices",
    description:
      "Mr. Durgaprasad Naik is an experienced financial and legal advisor with extensive expertise in guiding organizations through complex financial and legal matters.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@company.com",
    },
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: CheckCircle },
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "200+", label: "Happy Clients", icon: Users },
  { number: "25+", label: "Awards Won", icon: Award },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and green technologies",
    color: "green",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    color: "yellow",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description: "Building strong partnerships for mutual success",
    color: "blue",
  },
  {
    icon: Gem,
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do",
    color: "purple",
  },
];

const solarPlantFeatures = [
  {
    icon: Sun,
    title: "2 MW Capacity",
    description: "Power generation capacity sufficient for 1000+ households",
    value: "2 MW",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Advanced battery systems for uninterrupted power supply",
    value: "4 MWh",
  },
  {
    icon: Power,
    title: "Annual Output",
    description: "Clean energy production reducing carbon footprint",
    value: "3.2 GWh",
  },
  {
    icon: Factory,
    title: "CO2 Reduction",
    description: "Annual carbon emission reduction equivalent",
    value: "2800 tons",
  },
];

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section based on hash in URL - MOVED INSIDE COMPONENT
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

  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      green: "from-[#10a19d] to-[#0d8c89]",
      yellow: "from-yellow-500 to-amber-600",
      blue: "from-blue-500 to-cyan-600",
      purple: "from-purple-500 to-indigo-600",
    };
    return colors[color] || colors.green;
  };

  // Navigation handlers
  const handleExploreProducts = () => {
    navigate("/products");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const handleMeetTeam = () => {
    // Scroll to team section
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartProject = () => {
    navigate("/contact");
  };

  // NEW: Handler for Free Consultation that redirects to second page
  const handleFreeConsultation = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#10a19d]/10 to-blue-50/30 text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <section
        id="our-story"
        className="relative py-40 flex items-center justify-center bg-gradient-to-br from-[#10a19d] via-[#0d8c89] to-[#0a7875] text-white overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10a19d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#0d8c89] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#0a7875] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-4xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-6xl mx-auto text-white leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Our comprehensive services span from Concept to Commissioning of
            Solar power projects and further operating and maintaining
            throughout the lifetime of the projects.We focus on designing
            innovative products and technologies beneficial for society through
            technology transfer.Our team consists of experts from renewable
            energy sectors, capable of executing large-scale Solar PV projects
            in compliance with stringent quality standards, industry best
            practices, and regulatory norms.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button
              onClick={handleExploreProducts}
              className="group bg-white text-[#10a19d] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm 
             hover:bg-white-500 hover:text-black transition-all duration-300 transform hover:scale-105 
             shadow-2xl hover:shadow-3xl flex items-center gap-3"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            {/* UPDATED: Changed onClick handler to handleFreeConsultation */}
            <button
              onClick={handleFreeConsultation}
              className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3"
            >
              Get Your Free Consultation
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR VISION FOR THE FUTURE SECTION */}
      <section
        id="vision"
        ref={ref}
        className="py-20 bg-gradient-to-br from-white via-[#f7fdfc] to-[#e7f9f8] text-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-7"
      >
        {/* Background Blurs */}
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-[#10a19d]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-blue-400/20 rounded-full blur-[100px]"></div>

        {/* Main Container */}
        <motion.div
          className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Image Section - Left to Right Animation */}
          <motion.div
            className="relative w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <motion.img
              src={img1}
              alt="Leadership Team"
              className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-6 left-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="bg-[#10a19d] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#0d8c89] transition">
                Vision
              </button>
            </motion.div>
          </motion.div>

          {/* Text Section - Top to Bottom Animation */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6 lg:px-0"
            variants={{
              hidden: { opacity: 0, y: -60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight"
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              Our Vision for the <span className="text-[#10a19d]">Future</span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl italic text-gray-700 border-l-4 border-[#10a19d] pl-5"
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              " To be a global leader in advancing renewable energy solutions,
              driving the transition to a sustainable and carbon-free future"
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We aim to harness the power of nature to provide clean, reliable,
              and affordable energy to communities worldwide, fostering
              environmental stewardship and economic growth. By innovating and
              collaborating with stakeholders, we aspire to create a world where
              renewable energy is the primary source of power, ensuring a
              healthier planet for future generations.
            </motion.p>

            {/* Feature Boxes - Subtle Bottom-Up Animation */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                {
                  icon: (
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#10a19d]" />
                  ),
                  title: "Athletic Excellence",
                  desc: "Olympic-grade training infrastructure",
                },
                {
                  icon: (
                    <Crown className="w-5 sm:w-6 h-5 sm:h-6 text-[#10a19d]" />
                  ),
                  title: "Luxury Experience",
                  desc: "Five-star amenities and premium service",
                },
                {
                  icon: (
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-[#10a19d]" />
                  ),
                  title: "Global Community",
                  desc: "Connecting passionate individuals worldwide",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow hover:shadow-md transition-all border border-gray-100"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.2 },
                    },
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h4 className="font-bold text-base sm:text-lg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2 MW SOLAR POWER PLANT SECTION */}
      <section className="py-20 bg-gradient-to-br from-white via-[#f7fdfc] to-[#e7f9f8] text-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-[#10a19d]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-blue-400/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-[#10a19d]/10 text-[#10a19d] px-6 py-3 rounded-full font-medium mb-6">
              <Zap className="w-5 h-5" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
              2 MW Solar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                Power Plant
              </span>
            </h2>
            <motion.div
              className="h-1 w-19 bg-[#10a19d] mx-auto mb-5"
              initial={{ width: 0 }}
              whileInView={{ width: "4.9rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              "Delivering Sustainability" highlights your company's role in
              providing sustainable, clean energy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 px-4 sm:px-6 lg:px-0">
            {/* Image Section */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img5}
                alt="2 MW Solar Power Plant"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Solar Excellence</h3>
                <p className="text-sm opacity-90">
                  State-of-the-art photovoltaic technology
                </p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-2xl font-bold text-gray-900">
                Key Features
              </h3>

              <div className="space-y-4">
                {[
                  "To provide innovative, sustainable, and cost-effective solar energy solutions that empower businesses and communities to reduce their carbon footprint and achieve energy independence.",
                  "As a leading Solar EPC company, we are committed to delivering high-quality design, installation, and maintenance services that maximize efficiency and performance.",
                  "To create a cleaner, greener future by harnessing the power of the sun while prioritizing customer satisfaction, safety, and environmental responsibility.",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10a19d] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#10a19d]/5 rounded-2xl p-6 border border-[#10a19d]/20">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-[#10a19d]" />
                  <h4 className="font-semibold text-gray-900">
                    Environmental Impact
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Equivalent to planting 120,000 trees annually. Contributing
                  significantly to India's renewable energy targets and
                  sustainable development goals.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Solar Plant Stats */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {solarPlantFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#10a19d]/10 rounded-lg group-hover:bg-[#10a19d] group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-2xl font-bold text-[#10a19d] mb-2">
                  {feature.value}
                </p>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="team"
        className="py-20 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#10a19d]/10 text-[#10a19d] px-6 py-2 rounded-full font-medium">
                <Zap className="w-5 h-5" />
                Our Team
              </div>
            </motion.div>
            <h2 className="text-4xl sm:text-4xl font-extrabold  mb-5">
              <span className="text-black"> Meet the </span>
              <span className="text-[#10a19d]">Innovators</span>
            </h2>

            <motion.div
              className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />

            <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
              A passionate team driving innovation for a sustainable future.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-0">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group w-full sm:w-[45%] lg:w-[30%]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative bg-white backdrop-blur-sm rounded-3xl p-5 border border-gray-200 hover:border-gray-300 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col shadow-lg">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-700 font-medium mb-2">
                      {member.role}
                    </p>

                    <div className="mt-2">
                      <p className="text-gray-600 text-sm leading-snug transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-[#10a19d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white text-black relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#10a19d]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10a19d]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-12 sm:w-16 h-12 sm:h-16 text-[#10a19d] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black mb-6">
              Ready to Build a{" "}
              <span className="bg-gradient-to-r from-[#10a19d] to-black bg-clip-text text-transparent">
                Better Future
              </span>{" "}
              Together?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join us in our mission to create sustainable solutions that make a
              real difference. Let's collaborate to build a cleaner, smarter,
              and more sustainable world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button
                onClick={handleStartProject}
                className="group bg-[#10a19d] text-white px-8 sm:px-10 py-3 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#0d8c89] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleContactUs}
                className="group border-2 border-[#10a19d] text-[#10a19d] px-8 sm:px-10 py-3 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#10a19d] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                Contact Our Team
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
