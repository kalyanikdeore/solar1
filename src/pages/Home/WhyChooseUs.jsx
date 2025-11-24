import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  DraftingCompass,
  Shield,
  Factory,
  Monitor,
  Zap,
  Phone,
  Leaf,
  Award,
  Sun,
  Battery,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified solar professionals dedicated to delivering efficient and trusted renewable energy solutions.",
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]"
    },
    {
      icon: DraftingCompass,
      title: "Precision Design",
      description: "Advanced 2D and 3D system designs optimized for maximum solar efficiency and energy production.",
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]"
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Premium components ensuring durability, safety, and long-term performance with industry-leading warranties.",
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]"
    },
    {
      icon: Factory,
      title: "In-house Manufacturing",
      description: "Custom GI mounting structures – 30% stronger, lighter weight, and engineered for longevity.",
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]"
    },
    {
      icon: Monitor,
      title: "Smart Monitoring",
      description: "Real-time performance tracking with advanced IoT dashboards and predictive maintenance alerts.",
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]"
    },
    {
      icon: Zap,
      title: "Proven Technologies",
      description: "From Mono PERC to Bifacial panels — cutting-edge technology powering your sustainability goals.",
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]"
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Integrated battery solutions for uninterrupted power supply and maximum energy independence.",
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Efficient project execution with minimal disruption and faster return on investment.",
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]"
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", color: "#F4C430" },
    { number: "2MW+", label: "Solar Capacity", color: "#4DB6E2" },
    { number: "100%", label: "Client Satisfaction", color: "#2E7D32" },
    { number: "5+", label: "Years Experience", color: "#F28B30" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#F6F7F4] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#2E7D32 1px, transparent 1px),
                             linear-gradient(90deg, #2E7D32 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <Award className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Solar Excellence{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Defined
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
            Where solar innovation meets sustainable engineering — delivering smart, reliable, 
            and efficient renewable energy solutions for a brighter future.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                  border: `2px solid ${feature.color}20`
                }}
              >
                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-3 group-hover:text-[#2E7D32] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] rounded-2xl p-10 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sun className="h-8 w-8 text-[#F4C430]" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Start Your Solar Journey?
              </h3>
            </div>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of satisfied customers who have transformed their energy 
              infrastructure with our reliable, efficient solar solutions and achieved 
              significant cost savings.
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
              
              {/* <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                <Leaf className="h-5 w-5" />
                View Projects
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;