import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sun,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Award,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  Zap,
  Leaf,
  Users,
} from "lucide-react";
import { useState } from "react";
import { LogoSingle } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const footerSections = [
    {
      title: "Our Products",
      id: "products",
      links: [
        { name: "Solar Panels", path: "/products" },
        { name: "Inverters", path: "/products" },
        { name: "Mounting Systems", path: "/products" },
        { name: "BOS Components", path: "/products" },
        { name: "GI Structures", path: "/products" },
      ],
      icon: Zap,
      color: "#F4C430"
    },
    {
      title: "Our Services",
      id: "services",
      links: [
        { name: "Solar EPC", path: "/services" },
        { name: "Solar BOS", path: "/services" },
        { name: "Pre-engineered Structures", path: "/services" },
        { name: "Skill Development", path: "/services" },
        { name: "Consultancy", path: "/services" },
        { name: "Maintenance", path: "/services" },
      ],
      icon: Users,
      color: "#4DB6E2"
    },
  ];

  const certifications = [
    { name: "MNRE Approved", icon: <Award className="h-4 w-4" />, color: "#F4C430" },
    { name: "MSEDCL Empanelled", icon: <Shield className="h-4 w-4" />, color: "#4DB6E2" },
    { name: "ISO Certified", icon: <Award className="h-4 w-4" />, color: "#2E7D32" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/NavitasEfficens",
      color: "#2E7D32"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/navitasefficens",
      color: "#4DB6E2"
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.103C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.583A2.974 2.974 0 0 0 .502 6.186 31.37 31.37 0 0 0 0 12a31.37 31.37 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.103C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.583a2.974 2.974 0 0 0 2.09-2.103A31.37 31.37 0 0 0 24 12a31.37 31.37 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
        </svg>
      ),
      href: "https://www.youtube.com/results?search_query=Navitas+Efficens",
      color: "#F4C430"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1E1E1E] to-[#2E7D32] text-white relative overflow-hidden z-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F4C430]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Always visible */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4C430] to-[#F28B30] rounded-2xl flex items-center justify-center shadow-lg">
                <img
                  src={LogoSingle}
                  className="h-10 w-10 text-white"
                  alt="Navitas Efficens"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Navitas Efficens
                </span>
                <p className="text-[#F4C430] text-sm font-semibold">
                  Your Solar Energy Partner
                </p>
              </div>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed text-base">
              Leading the transition to sustainable energy with innovative solar solutions 
              from concept to commissioning. Empowering businesses and communities with 
              clean, reliable, and affordable solar energy for a brighter future.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-[#F4C430]" />
                Certifications & Approvals
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20"
                  >
                    <div style={{ color: cert.color }}>{cert.icon}</div>
                    <span className="text-white/90 text-sm font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 border border-white/20"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Accordion Sections for Mobile */}
          <div className="lg:hidden space-y-4">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-white/20"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${section.color}15, ${section.color}30)`,
                        border: `2px solid ${section.color}20`
                      }}
                    >
                      <section.icon className="h-5 w-5" style={{ color: section.color }} />
                    </div>
                    <h3 className="font-semibold text-white text-lg">
                      {section.title}
                    </h3>
                  </div>
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5 text-[#F4C430]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#F4C430]" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openSections[section.id] ? "auto" : 0,
                    opacity: openSections[section.id] ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 pb-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-white/80 hover:text-white transition-all duration-300 flex items-center group text-sm py-2"
                          onClick={() => setOpenSections({})}
                        >
                          <ArrowRight className="h-3 w-3 mr-3 text-[#F4C430] opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}

            {/* Contact Info Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              // className="border-b border-white/20"
            >
              <button
                onClick={() => toggleSection("contact")}
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DB6E2] to-[#2E7D32] flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    Contact Info
                  </h3>
                </div>
                {openSections["contact"] ? (
                  <ChevronUp className="h-5 w-5 text-[#F4C430]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#F4C430]" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openSections["contact"] ? "auto" : 0,
                  opacity: openSections["contact"] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pb-4 text-sm">
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                    <Phone className="h-4 w-4 text-[#F4C430] mt-1 flex-shrink-0" />
                    <div>
                      <a href="tel:+919822561464" className="text-white/80 hover:text-white transition-colors block">
                        +91 98225 61464
                      </a>
                      <a href="tel:+919922946677" className="text-white/80 hover:text-white transition-colors block">
                        +91 99229 46677
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                    <Mail className="h-4 w-4 text-[#4DB6E2] mt-1 flex-shrink-0" />
                    <a href="mailto:info@navitasefficens.in" className="text-white/80 hover:text-white transition-colors">
                      info@navitasefficens.in
                    </a>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                    <MapPin className="h-4 w-4 text-[#2E7D32] mt-1 flex-shrink-0" />
                    <div className="text-white/80">
                      Shop No. 6-7, Durgesh Apt,
                      <br />
                      Ganesh Nagar, Satpur,
                      <br />
                      Nashik - 422007
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                    <Clock className="h-4 w-4 text-[#F28B30] mt-1 flex-shrink-0" />
                    <div className="text-white/80">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:col-span-3">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${section.color}15, ${section.color}30)`,
                      border: `2px solid ${section.color}20`
                    }}
                  >
                    <section.icon className="h-6 w-6" style={{ color: section.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/80 hover:text-white transition-all duration-300 flex items-center group py-2"
                      >
                        <ArrowRight className="h-3 w-3 mr-3 text-[#F4C430] opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            {/* Contact Info - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DB6E2] to-[#2E7D32] flex items-center justify-center shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Contact Info
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <Phone className="h-5 w-5 text-[#F4C430] mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919822561464" className="text-white/80 hover:text-white transition-colors block text-sm">
                      +91 98225 61464
                    </a>
                    <a href="tel:+919922946677" className="text-white/80 hover:text-white transition-colors block text-sm">
                      +91 99229 46677
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <Mail className="h-5 w-5 text-[#4DB6E2] mt-1 flex-shrink-0" />
                  <a href="mailto:info@navitasefficens.in" className="text-white/80 hover:text-white transition-colors text-sm">
                    info@navitasefficens.in
                  </a>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <MapPin className="h-5 w-5 text-[#2E7D32] mt-1 flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    Shop No. 6-7, Durgesh Apt,
                    <br />
                    Ganesh Nagar, Satpur,
                    <br />
                    Nashik - 422007
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <Clock className="h-5 w-5 text-[#F28B30] mt-1 flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-white/70 text-sm order-2 md:order-1">
              © {currentYear} Navitas Efficens. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70 order-1 md:order-2">
              <span className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#2E7D32]" />
                MNRE, MSEDCL Empanelled Agency
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#4DB6E2]" />
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;