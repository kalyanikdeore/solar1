// src/components/ServicesSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ms, pes, skd, spe, cs, bos } from "../assets"; // Ensure these images exist

const services = [
  {
    id: 1,
    title: "Solar EPC Services",
    description:
      "Solar EPC (Engineering, Procurement, and Construction) services encompass the complete process of designing, sourcing materials and installing solar energy systems. These services include.",
    image: ms,
    tag: "SERVICE #1",
    features: [
      "Engineering: Customized design and planning of solar systems, including site assessments, system optimization, and electrical layout.",
      " Procurement: Sourcing high-quality solar panels, inverters, and other components from trusted suppliers.",
      "Construction: Installation and commissioning of the solar system, ensuring proper setup and integration with existing infrastructure.",
    ],
  },
  {
    id: 2,
    title: "Solar BOS",
    description:
      "Navitas Efficens supplies quality Solar BOS Balance of System) components which includes mounting structures, cabling, earthing material, connectors, combiner boxes, switchgear, safety and monitoring equipment etc.",
    image: pes,
    tag: "SERVICE #2",
    features: ["Mounting Structures", "Switchgear", "Monitoring Systems"],
  },
  {
    id: 3,
    title: "Pre-engineered Structures",
    description:
      "Navitas Efficens designs and manufactures pre-engineered structures (PES),re pre-fabricated and manufactured off-site, typically using steel other durable materials.These structures are customized to meet specific design requirements and then assembled at the construction site. They offer advantages such as faster construction, durability, flexibility and are also cost effective.",
    image: skd,
    tag: "SERVICE #3",
    features: ["Fast Construction", "Durable", "Cost Effective"],
  },
  {
    id: 4,
    title: "Skill Development",
    description:
      "Navitas Efficens offering solar skill development training is an excellent initiative to equip individuals with the necessary knowledge and hands-on experience to work in the growing solar energy industry. By offering these training programs,Navitas Efficens helps address the demand for skilled professionals in the solar sector, supporting both individuals seeking career growth and companies looking for qualified personnel. ",
    image: spe,
    tag: "SERVICE #4",
    features: ["Hands-on Training", "Industry Experts", "Career Growth"],
  },
  {
    id: 5,
    title: "Consultancy Services",
    description:
      "Solar Consultancy Services provide expert advice and support throughout the planning, design, and implementation of solar energy systems.These services include feasibility study, System design and optimization, regulatory guidance, financial analysis, project management performance monitoring and maintenance. It help clients make informed decisions, maximize energy savings and ensure successful solar projects.",
    image: cs,
    tag: "SERVICE #5",
    features: [
      "Feasibility Study",
      "Project Management",
      "Performance Monitoring",
    ],
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance packages and after-sales support.",
    image: bos,
    tag: "SERVICE #6",
    features: ["Online Monitoring", "Regular Maintenance", "24/7 Support"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white pt-48 mb-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#10a19d] tracking-wide">
          SOLAR SERVICES
        </h2> */}
        <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
          Solar{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
            Services
          </span>
        </h2>

        <motion.div
          className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-600 mt-2">
          End-to-end excellence for solar project execution and performance
        </p>
      </motion.div>

      {/* Services */}
      <div className="space-y-24">
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
              className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image Section (Alternate left/right) */}
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded">
                  {service.tag}
                </span>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                />
                <h3 className="absolute bottom-4 left-4 bg-[#10a19d] text-white text-lg font-semibold px-4 py-2 rounded-md">
                  {service.title}
                </h3>
              </div>

              {/* Text Section */}
              <div
                className={`${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                } space-y-4`}
              >
                <h3 className="text-xl lg:text-2xl font-bold text-[#097673] flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {service.description}
                </p>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400">☀️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
