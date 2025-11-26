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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F6F7F4] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-4 sm:mb-6"
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#2E7D32]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2E7D32] tracking-wide">
              VISIT US
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E1E1E] mb-4 sm:mb-6">
            Get In <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <motion.div
            className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#F4C430] to-[#F28B30] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-base sm:text-lg lg:text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed px-4">
            Connect with our solar experts for personalized consultation and discover how we can power your sustainable future
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden border border-[#D9DDDC]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Map Section - NOW FIRST ON MOBILE */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:flex-1 min-h-[300px] lg:min-h-[500px] order-1">
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
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 border border-[#D9DDDC] max-w-xs">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, #F4C43015, #F4C43030)`,
                    border: `2px solid #F4C43020`
                  }}
                >
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#F4C430]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-[#1E1E1E] block text-sm sm:text-base truncate">
                    {contactData.company.name}
                  </span>
                  <span className="text-xs sm:text-sm text-[#2E7D32] font-semibold truncate">
                    {contactData.company.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info Section - NOW SECOND ON MOBILE */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between lg:flex-1 order-2">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E1E1E] mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <p className="text-[#4A4A4A] mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  {contactData.company.description}
                </p>

                <div className="space-y-6 sm:space-y-8">
                  {/* Office Location */}
                  <motion.div 
                    className="flex items-start gap-4 sm:gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #4DB6E215, #4DB6E230)`,
                        border: `2px solid #4DB6E220`
                      }}
                    >
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#4DB6E2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#1E1E1E] text-base sm:text-lg mb-2 sm:mb-3">
                        Our Office
                      </h4>
                      <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base">
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
                    className="flex items-start gap-4 sm:gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #F28B3015, #F28B3030)`,
                        border: `2px solid #F28B3020`
                      }}
                    >
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#F28B30]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#1E1E1E] text-base sm:text-lg mb-2 sm:mb-3">
                        Business Hours
                      </h4>
                      <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base">
                        {contactData.contact.hours.weekdays}
                        <br />
                        {contactData.contact.hours.sunday}
                      </p>
                    </div>
                  </motion.div>

                  {/* Contact Details */}
                  <motion.div 
                    className="flex items-start gap-4 sm:gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #2E7D3215, #2E7D3230)`,
                        border: `2px solid #2E7D3220`
                      }}
                    >
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#2E7D32]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#1E1E1E] text-base sm:text-lg mb-2 sm:mb-3">
                        Contact Details
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        {contactData.contact.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-[#4A4A4A] hover:text-[#4DB6E2] transition-colors font-medium text-sm sm:text-base lg:text-lg break-words"
                          >
                            {phone}
                          </a>
                        ))}
                        <a
                          href={`mailto:${contactData.contact.email}`}
                          className="block text-[#4A4A4A] hover:text-[#4DB6E2] transition-colors font-medium text-sm sm:text-base lg:text-lg break-words"
                        >
                          {contactData.contact.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#D9DDDC]">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[#4A4A4A] text-sm sm:text-base lg:text-lg font-medium text-center sm:text-left">
                      Quick connect:
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <motion.a
                      href={`tel:${contactData.contact.phones[0].replace(/\s/g, "")}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-md text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Call Now
                    </motion.a>
                    <motion.a
                      href={`mailto:${contactData.contact.email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-[#4DB6E2] text-[#4DB6E2] px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-[#4DB6E2] hover:text-white transition-all flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -3, scale: 1.02 }}
          >
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #F4C43015, #F4C43030)`,
                border: `2px solid #F4C43020`
              }}
            >
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#F4C430]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-3 sm:mb-4 text-base sm:text-lg">Quick Response</h4>
            <p className="text-[#4A4A4A] text-center text-xs sm:text-sm leading-relaxed">
              Get responses within 2 hours on business days from our solar experts
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -3, scale: 1.02 }}
          >
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #2E7D3215, #2E7D3230)`,
                border: `2px solid #2E7D3220`
              }}
            >
              <Sun className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#2E7D32]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-3 sm:mb-4 text-base sm:text-lg">Free Consultation</h4>
            <p className="text-[#4A4A4A] text-center text-xs sm:text-sm leading-relaxed">
              Complimentary site assessment and personalized solar consultation
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -3, scale: 1.02 }}
          >
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, #4DB6E215, #4DB6E230)`,
                border: `2px solid #4DB6E220`
              }}
            >
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#4DB6E2]" />
            </div>
            <h4 className="font-bold text-[#1E1E1E] text-center mb-3 sm:mb-4 text-base sm:text-lg">Service Areas</h4>
            <p className="text-[#4A4A4A] text-center text-xs sm:text-sm leading-relaxed">
              Serving across Maharashtra with comprehensive solar installation services
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocationSection;