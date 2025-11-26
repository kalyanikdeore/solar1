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
  SolarPanel,
  Zap,
  Leaf,
  Users,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const navigate = useNavigate();

  const services = [
    {
      icon: SolarPanel,
      title: "Solar EPC Services",
      description: "End-to-end Engineering, Procurement, and Construction services for solar projects with quality assurance and innovative design solutions.",
      points: [
        "Custom Design & Planning",
        "Quality Material Procurement",
        "Professional Installation",
        "Commissioning & Handover",
      ],
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]",
      link: "/services",
    },
    {
      icon: Cpu,
      title: "Solar BOS Components",
      description: "High-quality Balance of System components including mounting structures, inverters, monitoring systems and safety equipment for optimal performance.",
      points: [
        "Mounting Structures",
        "Inverters & Switchgear",
        "Monitoring Systems",
        "Safety Equipment",
      ],
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]",
      link: "/services",
    },
    {
      icon: Building,
      title: "Pre-engineered Structures",
      description: "Custom-designed pre-engineered structures using durable materials for fast, cost-effective, and reliable solar installations.",
      points: [
        "Fast Construction",
        "Durable Materials",
        "Cost Effective",
        "Custom Designs",
      ],
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]",
      link: "/services",
    },
    {
      icon: GraduationCap,
      title: "Skill Development Training",
      description: "Comprehensive solar training programs with hands-on experience, industry experts, and certification for career growth in renewable energy.",
      points: [
        "Hands-on Training",
        "Industry Experts",
        "Certification Programs",
        "Career Placement",
      ],
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]",
      link: "/services",
    },
    {
      icon: Lightbulb,
      title: "Consultancy Services",
      description: "Expert solar consultancy from feasibility studies to performance monitoring, ensuring optimal system design and project success.",
      points: [
        "Feasibility Study",
        "System Design",
        "Project Management",
        "Performance Monitoring",
      ],
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]",
      link: "/services",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance packages with online monitoring, regular upkeep, and 24/7 support for maximum system efficiency and longevity.",
      points: [
        "Online Monitoring",
        "Regular Maintenance",
        "24/7 Support",
        "Performance Optimization",
      ],
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]",
      link: "/services",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-10 left-10 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-2 bg-[#2E7D32]/10 rounded-full px-5 py-2 mb-6 border border-[#2E7D32]/20"
          >
            <Sparkles className="h-5 w-5 text-[#2E7D32] animate-pulse" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              OUR EXPERTISE
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Solar Energy{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Empowering sustainable futures with innovative solar engineering and cutting-edge renewable energy solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl`}
              />

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D9DDDC] h-full flex flex-col justify-between relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)`,
                    border: `2px solid ${service.color}20`
                  }}
                >
                  <service.icon className="h-7 w-7" style={{ color: service.color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-4 group-hover:text-[#2E7D32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-[#4A4A4A] text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-[#2E7D32] mr-3 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => navigate(service.link)}
                  className="flex items-center text-[#2E7D32] font-semibold hover:text-[#F28B30] transition-colors group/btn mt-4"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Harness Solar Power?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Get a personalized consultation and discover how our solar solutions can transform your energy infrastructure while reducing costs and environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(244, 196, 48, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all shadow-lg flex items-center gap-3"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/products")}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                <Eye className="h-5 w-5" />
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