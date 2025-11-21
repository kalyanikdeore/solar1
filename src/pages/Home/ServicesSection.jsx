// src/components/Services.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Wrench,
  Cpu,
  Building,
  GraduationCap,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Phone,
  Eye,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const navigate = useNavigate(); // ✅ React Router navigation hook

  const services = [
    {
      icon: Wrench,
      title: "Solar EPC Services",
      description:
        "Solar EPC services encompass the complete process of designing, sourcing materials and installing solar energy systems. These services include.",
      points: [
        "Custom Design & Planning",
        "Quality Material Procurement",
        "Professional Installation",
        "Commissioning & Handover",
      ],
      gradient: "from-orange-500 to-amber-600",
      link: "/services", // ✅ redirect link
    },
    {
      icon: Cpu,
      title: "Solar BOS Components",
      description:
        "Navitas Efficens supplies quality Solar BOS Balance of System components which includes mounting structures, cabling, earthing material, safety and monitoring equipment etc.",
      points: [
        "Mounting Structures",
        "Inverters & Switchgear",
        "Monitoring Systems",
        "Safety Equipment",
      ],
      gradient: "from-blue-500 to-cyan-600",
      link: "/services",
    },
    {
      icon: Building,
      title: "Pre-engineered Structures",
      description:
        "Navitas Efficens designs and manufactures pre-engineered structures (PES),re pre-fabricated and  typically using steel other durable materials.",
      points: [
        "Fast Construction",
        "Durable Materials",
        "Cost Effective",
        "Custom Designs",
      ],
      gradient: "from-emerald-500 to-green-600",
      link: "/services",
    },
    {
      icon: GraduationCap,
      title: "Skill Development Training",
      description:
        "Navitas Efficens offering solar skill development training is an excellent initiative  with the necessary knowledge and hands-on experience to work in the growing solar energy industry.",
      points: [
        "Hands-on Training",
        "Industry Experts",
        "Certification Programs",
        "Career Placement",
      ],
      gradient: "from-purple-500 to-pink-600",
      link: "/services",
    },
    {
      icon: Lightbulb,
      title: "Consultancy Services",
      description:
        "Solar Consultancy Services provide expert advice and support throughout the planning, design, and implementation of solar energy systems.These services include feasibility study.",
      points: [
        "Feasibility Study",
        "System Design",
        "Project Management",
        "Performance Monitoring",
      ],
      gradient: "from-yellow-500 to-amber-600",
      link: "/services",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance packages and after-sales support with online monitoring capabilities. Reliable maintenance, seamless support — powered for your peace of mind.",
      points: [
        "Online Monitoring",
        "Regular Maintenance",
        "24/7 Support",
        "Performance Optimization",
      ],
      gradient: "from-indigo-500 to-blue-600",
      link: "/services",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Animated Gradient Circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-cyan-200 rounded-full blur-3xl opacity-40"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-300 to-green-200 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-5 py-2 mb-6 shadow-sm"
          >
            <Sparkles className="h-5 w-5 text-[#10a19d] animate-pulse" />
            <span className="text-sm font-medium text-[#10a19d] tracking-wide">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-4">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-[#10a19d]">
              Offer
            </span>
          </h2>
          <motion.div
            className="h-1 w-19 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "3.7rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering sustainability with innovative solar engineering
            solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-2xl`}
              ></div>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col justify-between relative z-10">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#10a19d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-[#10a19d] mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button - Redirects to details page */}
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => navigate(service.link)} // ✅ Redirect on click
                  className="flex items-center text-[#10a19d] font-semibold group-hover:text-[#10a19d] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#10a19d] to-[#0d817d] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Harness Solar Energy?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get a personalized consultation and discover how our solar
              solutions can transform your energy infrastructure and reduce
              costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")} // ✅ Redirect to contact page
                className="bg-white text-[#10a19d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/products")} // ✅ Redirect to projects page
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#10a19d] transition-colors flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                View Our Products
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
