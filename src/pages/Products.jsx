import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { SolarPanel, Settings, Zap, Cpu, CheckCircle, Shield, TrendingUp, Clock } from "lucide-react";
import { spi, spm, spp, spb } from "../assets";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const products = [
    {
      icon: SolarPanel,
      title: "Solar Panels",
      image: spi,
      types: [
        "Polycrystalline",
        "Mono-crystalline",
        "Half-cut Mono PERC",
        "Bifacial",
      ],
      description: "High-efficiency solar panels from trusted manufacturers with advanced photovoltaic technology",
      features: ["High Efficiency", "Weather Resistant", "25+ Year Warranty", "Advanced PERC"],
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]"
    },
    {
      icon: Cpu,
      title: "Inverters",
      image: spm,
      types: [
        "String Inverters",
        "Micro Inverters",
        "Central Inverters",
        "Hybrid Inverters",
      ],
      description: "Advanced inverters for optimal energy conversion with smart monitoring capabilities",
      features: ["Smart Monitoring", "High Efficiency", "Grid Compatibility", "Remote Control"],
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]"
    },
    {
      icon: Settings,
      title: "Mounting Systems",
      image: spp,
      types: [
        "Fixed Stands",
        "Solar Trackers",
        "Roof Mounting",
        "Ground Mounting",
      ],
      description: "Durable and reliable mounting solutions engineered for maximum stability and longevity",
      features: ["Galvanized Steel", "Wind Resistant", "Easy Installation", "Corrosion Proof"],
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]"
    },
    {
      icon: Zap,
      title: "Balance of System",
      image: spb,
      types: [
        "Combiner Boxes",
        "Monitoring Systems",
        "Safety Equipment",
        "Cabling",
      ],
      description: "Complete BOS components ensuring seamless system integration and optimal performance",
      features: ["Safety Certified", "Weather Proof", "Easy Maintenance", "Smart Integration"],
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]"
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      value: "20-30%",
      label: "Stronger GI Structures",
      description: "Lightweight yet more durable than MS structures",
      color: "#F4C430"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Quality Assured",
      description: "Industry best practices and quality standards",
      color: "#2E7D32"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Online Monitoring",
      description: "Real-time system performance tracking",
      color: "#4DB6E2"
    },
    {
      icon: CheckCircle,
      value: "10+",
      label: "Years Warranty",
      description: "Comprehensive warranty on all components",
      color: "#F28B30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <Zap className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              OUR PRODUCTS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
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

          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            Premium components and innovative technologies for superior solar energy systems
            that deliver maximum efficiency and long-term reliability
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg border border-[#D9DDDC] hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-6">
                {/* Image Section */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Product Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}15, ${product.color}30)`,
                        border: `2px solid ${product.color}20`
                      }}
                    >
                      <product.icon className="h-6 w-6" style={{ color: product.color }} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#1E1E1E] group-hover:text-[#2E7D32] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                        <span className="text-sm text-[#4A4A4A]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Available Types */}
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-3 text-lg">
                      Available Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.types.map((type, typeIndex) => (
                        <span
                          key={typeIndex}
                          className="px-3 py-2 bg-[#F6F7F4] text-[#4A4A4A] rounded-xl text-sm border border-[#D9DDDC] hover:border-[#4DB6E2] transition-colors"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Border Bottom */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-[#2E7D32] to-[#4DB6E2] rounded-2xl p-10 text-white shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 text-[#F4C430]">
                  {feature.value}
                </div>
                <div className="font-semibold text-lg mb-2">
                  {feature.label}
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8 pt-8 border-t border-white/20"
          >
            <p className="text-white/90 text-lg">
              All our products come with comprehensive technical support and industry-leading warranties
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;