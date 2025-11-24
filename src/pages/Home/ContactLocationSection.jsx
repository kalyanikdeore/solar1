import React from "react";
import { MapPin, Clock, Phone, Mail, Sun, Zap, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const ContactLocationSection = () => {
  const contactData = {
    company: {
      name: "Navitas Efficens",
      tagline: "Your Solar Energy Partner",
      description: "Visit our office for expert solar consultation and innovative renewable energy solutions tailored to your needs.",
    },
    location: {
      address: {
        line1: "Shop No. 6-7, Durgesh Apt,",
        line2: "Ganesh Nagar, Satpur,",
        line3: "Nashik - 422007, Maharashtra",
      },
    },
    contact: {
      phones: ["+91 98225 61464", "+91 99229 46677"],
      email: "info@navitasefficens.in",
      hours: {
        weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
        sunday: "Sunday: Closed",
      },
    },
    maps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.064773383549!2d73.73392167428358!3d20.00579598139975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec7ace5d6bb3%3A0xf0c4961f67c3f501!2sNavitas%20Efficens!5e0!3m2!1sen!2sin!4v1763106430744!5m2!1sen!2sin",
      directionsUrl: "https://goo.gl/maps/abc123def456",
      reviewsUrl: "https://g.page/r/Cg-1234567890/review",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <MapPin className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              VISIT US
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Get In <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Connect with our solar experts for personalized consultation and discover how we can power your sustainable future
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D9DDDC]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Map Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={contactData.maps.embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
                title="Navitas Efficens Office Location"
              />
              {/* Map Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-[#D9DDDC]">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, #F4C43015, #F4C43030)`,
                    border: `2px solid #F4C43020`
                  }}
                >
                  <Sun className="h-6 w-6 text-[#F4C430]" />
                </div>
                <div>
                  <span className="font-bold text-[#1E1E1E] block">
                    {contactData.company.name}
                  </span>
                  <span className="text-sm text-[#2E7D32] font-semibold">
                    {contactData.company.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1E1E1E] mb-6">
                  Contact Information
                </h3>
                <p className="text-[#4A4A4A] mb-8 text-lg leading-relaxed">
                  {contactData.company.description}
                </p>

                <div className="space-y-8">
                  {/* Office Location */}
                  <motion.div 
                    className="flex items-start gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #4DB6E215, #4DB6E230)`,
                        border: `2px solid #4DB6E220`
                      }}
                    >
                      <MapPin className="h-6 w-6 text-[#4DB6E2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E1E1E] text-lg mb-3">
                        Our Office
                      </h4>
                      <p className="text-[#4A4A4A] leading-relaxed">
                        {contactData.location.address.line1}
                        <br />
                        {contactData.location.address.line2}
                        <br />
                        {contactData.location.address.line3}
                      </p>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div 
                    className="flex items-start gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #F28B3015, #F28B3030)`,
                        border: `2px solid #F28B3020`
                      }}
                    >
                      <Clock className="h-6 w-6 text-[#F28B30]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E1E1E] text-lg mb-3">
                        Business Hours
                      </h4>
                      <p className="text-[#4A4A4A] leading-relaxed">
                        {contactData.contact.hours.weekdays}
                        <br />
                        {contactData.contact.hours.sunday}
                      </p>
                    </div>
                  </motion.div>

                  {/* Contact Details */}
                  <motion.div 
                    className="flex items-start gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #2E7D3215, #2E7D3230)`,
                        border: `2px solid #2E7D3220`
                      }}
                    >
                      <Phone className="h-6 w-6 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E1E1E] text-lg mb-3">
                        Contact Details
                      </h4>
                      <div className="space-y-3">
                        {contactData.contact.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-[#4A4A4A] hover:text-[#4DB6E2] transition-colors font-medium text-lg"
                          >
                            {phone}
                          </a>
                        ))}
                        <a
                          href={`mailto:${contactData.contact.email}`}
                          className="block text-[#4A4A4A] hover:text-[#4DB6E2] transition-colors font-medium text-lg"
                        >
                          {contactData.contact.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="mt-12 pt-8 border-t border-[#D9DDDC]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4A4A4A] text-lg font-medium">
                      Quick connect:
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={`tel:${contactData.contact.phones[0].replace(/\s/g, "")}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </motion.a>
                    <motion.a
                      href={`mailto:${contactData.contact.email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-[#4DB6E2] text-[#4DB6E2] px-6 py-3 rounded-xl font-semibold hover:bg-[#4DB6E2] hover:text-white transition-all flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #F4C43015, #F4C43030)`,
                border: `2px solid #F4C43020`
              }}
            >
              <Clock className="h-8 w-8 text-[#F4C430]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-4 text-lg">Quick Response</h4>
            <p className="text-[#4A4A4A] text-center text-sm leading-relaxed">
              Get responses within 2 hours on business days from our solar experts
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #2E7D3215, #2E7D3230)`,
                border: `2px solid #2E7D3220`
              }}
            >
              <Sun className="h-8 w-8 text-[#2E7D32]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-4 text-lg">Free Consultation</h4>
            <p className="text-[#4A4A4A] text-center text-sm leading-relaxed">
              Complimentary site assessment and personalized solar consultation
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #4DB6E215, #4DB6E230)`,
                border: `2px solid #4DB6E220`
              }}
            >
              <MapPin className="h-8 w-8 text-[#4DB6E2]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-4 text-lg">Service Areas</h4>
            <p className="text-[#4A4A4A] text-center text-sm leading-relaxed">
              Serving across Maharashtra with comprehensive solar installation services
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocationSection;