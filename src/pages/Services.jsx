import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Sun, Zap, Settings, Users, Award, Shield } from "lucide-react";
import { ms, pes, skd, spe, cs, bos } from "../assets";
import { useNavigate } from "react-router-dom";



const services = [
  {
    id: 1,
    title: "Solar EPC Services",
    description: "End-to-end Engineering, Procurement, and Construction services for solar energy systems. We handle complete project lifecycle from design to commissioning with quality assurance and optimal performance.",
    image: ms,
    tag: "COMPREHENSIVE",
    features: [
      "Customized system design and planning",
      "High-quality component procurement",
      "Professional installation and commissioning",
      "Site assessment and optimization"
    ],
    icon: Sun,
    color: "#F4C430",
    gradient: "from-[#F4C430] to-[#F28B30]"
  },
  {
    id: 2,
    title: "Solar BOS Components",
    description: "Premium Balance of System components including mounting structures, cabling, earthing material, connectors, combiner boxes, switchgear, safety and monitoring equipment for reliable system integration.",
    image: pes,
    tag: "QUALITY",
    features: [
      "Durable mounting structures",
      "Advanced monitoring systems",
      "Safety-certified equipment",
      "Weather-resistant components"
    ],
    icon: Zap,
    color: "#4DB6E2",
    gradient: "from-[#4DB6E2] to-[#2E7D32]"
  },
  {
    id: 3,
    title: "Pre-engineered Structures",
    description: "Custom-designed pre-engineered structures manufactured off-site using durable materials. Offering faster construction, superior durability, flexibility, and cost-effective solutions for solar installations.",
    image: skd,
    tag: "INNOVATIVE",
    features: [
      "Faster construction timelines",
      "Superior durability and strength",
      "Cost-effective solutions",
      "Custom design flexibility"
    ],
    icon: Settings,
    color: "#2E7D32",
    gradient: "from-[#2E7D32] to-[#4DB6E2]"
  },
  {
    id: 4,
    title: "Skill Development Training",
    description: "Comprehensive solar training programs equipping individuals with essential knowledge and hands-on experience. Supporting career growth in the renewable energy sector with industry-expert led training.",
    image: spe,
    tag: "EDUCATION",
    features: [
      "Hands-on practical training",
      "Industry expert instructors",
      "Career placement support",
      "Certification programs"
    ],
    icon: Users,
    color: "#F28B30",
    gradient: "from-[#F28B30] to-[#5D4633]"
  },
  {
    id: 5,
    title: "Consultancy Services",
    description: "Expert solar consultancy covering feasibility studies, system design, regulatory guidance, financial analysis, project management, and performance monitoring for successful solar project implementation.",
    image: cs,
    tag: "EXPERT",
    features: [
      "Feasibility study and analysis",
      "Professional project management",
      "Performance monitoring systems",
      "Regulatory compliance guidance"
    ],
    icon: Award,
    color: "#F4C430",
    gradient: "from-[#F4C430] to-[#F28B30]"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance packages and after-sales support with online monitoring capabilities. Ensuring optimal system performance and longevity with regular maintenance and 24/7 support.",
    image: bos,
    tag: "SUPPORT",
    features: [
      "24/7 online monitoring",
      "Regular maintenance schedules",
      "Performance optimization",
      "Emergency support services"
    ],
    icon: Shield,
    color: "#4DB6E2",
    gradient: "from-[#4DB6E2] to-[#2E7D32]"
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <Settings className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              OUR SERVICES
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Solar Solutions
            </span>
          </h2>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            End-to-end solar energy services from design to maintenance, delivering excellence 
            in project execution and long-term performance optimization
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, threshold: 0.2 });

            return (
              <motion.div
                key={service.id}
                ref={ref}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Section */}
                  <div className={`relative ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Service Tag */}
                      <div className="absolute top-6 left-6">
                        <span 
                          className="px-4 py-2 rounded-xl text-white text-sm font-semibold shadow-lg"
                          style={{ backgroundColor: service.color }}
                        >
                          {service.tag}
                        </span>
                      </div>

                      {/* Service Icon */}
                      <div className="absolute bottom-6 left-6">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{ 
                            background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)`,
                            border: `2px solid ${service.color}20`
                          }}
                        >
                          <service.icon className="h-7 w-7" style={{ color: service.color }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4 group-hover:text-[#2E7D32] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#D9DDDC] hover:shadow-md transition-all duration-300 group/feature"
                        >
                          <CheckCircle className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                          <span className="text-[#4A4A4A] leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Service Highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gradient-to-r from-[#2E7D32]/10 to-[#4DB6E2]/10 rounded-2xl p-6 border border-[#2E7D32]/20"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <service.icon className="h-5 w-5" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1E1E1E]">Premium Service</h4>
                          <p className="text-sm text-[#4A4A4A]">Industry-leading quality and support</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Connecting Line (except last item) */}
                {index < services.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#F4C430] to-[#2E7D32] rounded-full opacity-50" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Solar Project?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Get expert consultation and discover how our comprehensive solar services 
              can transform your energy infrastructure and reduce costs.
            </p>
            <motion.button
            onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244, 196, 48, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all shadow-lg flex items-center gap-3 mx-auto"
            >
              <Sun className="h-5 w-5" />
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}