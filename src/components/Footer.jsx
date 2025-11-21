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
    },
  ];

  const certifications = [
    { name: "MNRE Approved", icon: <Award className="h-4 w-4" /> },
    { name: "MSEDCL Empanelled", icon: <Shield className="h-4 w-4" /> },
    { name: "ISO Certified", icon: <Award className="h-4 w-4" /> },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#10a19d] to-[#0d817d] py-8 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 text-center lg:text-left">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Ready to Go Solar?
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Get your free consultation and quote today!
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link
                to="/contact"
                className="bg-white text-[#10a19d] px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-sm sm:text-base"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info - Always visible */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={LogoSingle}
                className="h-16 w-16 sm:h-16 sm:w-16 text-white"
              />

              <div>
                <span className="text-xl sm:text-2xl font-bold">
                  Navitas Efficens
                </span>
                <p className="text-[#10a19d] text-sm font-medium">
                  Your Smart Energy Partner
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Leading the transition to sustainable energy with innovative solar
              solutions from concept to commissioning. Empowering businesses and
              communities with clean, reliable, and affordable solar energy.
            </p>

            {/* Certifications */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">
                Certifications & Approvals
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-800 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <div className="text-[#10a19d]">{cert.icon}</div>
                    <span className="text-gray-300">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://facebook.com/NavitasEfficens"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#10a19d] transition-all duration-300"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/navitasefficens"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#10a19d] transition-all duration-300"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/results?search_query=Navitas+Efficens"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#10a19d] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.103C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.583A2.974 2.974 0 0 0 .502 6.186 31.37 31.37 0 0 0 0 12a31.37 31.37 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.103C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.583a2.974 2.974 0 0 0 2.09-2.103A31.37 31.37 0 0 0 24 12a31.37 31.37 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                </svg>
              </motion.a>
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
                className="border-b border-gray-700"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <h3 className="font-semibold text-[#10a19d] text-lg">
                    {section.title}
                  </h3>
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5 text-[#10a19d]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#10a19d]" />
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
                          className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                          onClick={() => setOpenSections({})}
                        >
                          <ArrowRight className="h-3 w-3 mr-2 text-[#10a19d] opacity-0 group-hover:opacity-100 transition-opacity" />
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
              className="border-b border-gray-700"
            >
              <button
                onClick={() => toggleSection("contact")}
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <h3 className="font-semibold text-[#10a19d] text-lg">
                  Contact Info
                </h3>
                {openSections["contact"] ? (
                  <ChevronUp className="h-5 w-5 text-[#10a19d]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#10a19d]" />
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
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 text-[#10a19d] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                        +91 98225 61464
                      </div>
                      <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                        +91 99229 46677
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-[#10a19d] mt-1 flex-shrink-0" />
                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      info@navitasefficens.in
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-[#10a19d] mt-1 flex-shrink-0" />
                    <div className="text-gray-400">
                      Shop No. 6-7, Durgesh Apt,
                      <br />
                      Ganesh Nagar, Satpur,
                      <br />
                      Nashik - 422007
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-[#10a19d] mt-1 flex-shrink-0" />
                    <div className="text-gray-400">
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
                <h3 className="text-lg font-semibold mb-4 text-[#10a19d]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 text-[#10a19d] opacity-0 group-hover:opacity-100 transition-opacity" />
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
              <h3 className="text-lg font-semibold mb-4 text-[#10a19d]">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#10a19d] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      +91 98225 61464
                    </div>
                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      +91 99229 46677
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#10a19d] mt-1 flex-shrink-0" />
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    info@navitasefficens.in
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#10a19d] mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    Shop No. 6-7, Durgesh Apt,
                    <br />
                    Ganesh Nagar, Satpur,
                    <br />
                    Nashik - 422007
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#10a19d] mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
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
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-gray-400 text-sm order-2 md:order-1">
              © {currentYear} Navitas Efficens. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 order-1 md:order-2">
              <span>MNRE, MSEDCL Empanelled Agency</span>
              <span className="hidden sm:inline">•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
