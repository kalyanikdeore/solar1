// src/components/Products.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { SolarPanel, Settings, Zap, Cpu } from "lucide-react";
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
      description: "High-efficiency solar panels from trusted manufacturers",
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
      description: "All types and brands for optimal energy conversion",
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
      description: "Durable and reliable mounting solutions",
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
      description: "Complete BOS components for system integration",
    },
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
      className="section-padding bg-white pt-48 px-6 md:px-12  lg:px-20"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#10a19d] mb-4">
            Our <span className="text-gradient">Products</span>
          </h2> */}
          <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              Products
            </span>
          </h2>

          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality components and innovative technologies for superior solar
            energy systems
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-primary text-white p-3 rounded-full shadow-md">
                    <product.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#096f6c] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <h4 className="font-semibold text-gray-900 mb-3">
                  Available Types:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.types.map((type, typeIndex) => (
                    <span
                      key={typeIndex}
                      className="px-3 py-1 bg-white text-primary rounded-full text-sm border border-primary/20"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-primary rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">20-30%</div>
              <div className="text-primary-light">Stronger GI Structures</div>
              <p className="text-sm mt-1">
                Lightweight yet more durable than MS
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-primary-light">Quality Assured</div>
              <p className="text-sm mt-1">Industry best practices followed</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-primary-light">Online Monitoring</div>
              <p className="text-sm mt-1">
                Real-time system performance tracking
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
