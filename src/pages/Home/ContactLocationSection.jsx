import React from "react";
import { MapPin, Clock, Phone, Mail, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ContactLocationSection = () => {
  const contactData = {
    company: {
      name: "Navitas Efficens",
      tagline: "Your Smart Energy Partner",
      description:
        "Visit our office for expert solar consultation and innovative energy solutions.",
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
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.064773383549!2d73.73392167428358!3d20.00579598139975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec7ace5d6bb3%3A0xf0c4961f67c3f501!2sNavitas%20Efficens!5e0!3m2!1sen!2sin!4v1763106430744!5m2!1sen!2sin",
      directionsUrl: "https://goo.gl/maps/abc123def456",
      reviewsUrl: "https://g.page/r/Cg-1234567890/review",
    },
  };

  return (
    <section className="bg-gray-50 py-14 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#10a19d] mb-3">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              Office
            </span>
          </h2>

          <motion.div
            className="h-1 w-14 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "3.5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our solar experts for personalized consultation
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Map Section (Reduced height) */}
            <div className="relative h-full min-h-[300px] lg:min-h-[300px]">
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
              {/* <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-gray-200">
                <div className="w-10 h-10 bg-[#10a19d] rounded-lg flex items-center justify-center">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">
                    {contactData.company.name}
                  </span>
                  <span className="text-sm text-[#10a19d] font-medium">
                    {contactData.company.tagline}
                  </span>
                </div>
              </div> */}
            </div>

            {/* Contact Info Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  {contactData.company.description}
                </p>

                <div className="space-y-6">
                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Our Office
                      </h4>
                      <p className="text-gray-600">
                        {contactData.location.address.line1}
                        <br />
                        {contactData.location.address.line2}
                        <br />
                        {contactData.location.address.line3}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        {contactData.contact.hours.weekdays}
                        <br />
                        {contactData.contact.hours.sunday}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Contact Details
                      </h4>
                      <div className="space-y-2">
                        {contactData.contact.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-gray-600 hover:text-[#10a19d] transition-colors font-medium"
                          >
                            {phone}
                          </a>
                        ))}
                        <a
                          href={`mailto:${contactData.contact.email}`}
                          className="block text-gray-600 hover:text-[#10a19d] transition-colors font-medium"
                        >
                          {contactData.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">
                      Quick connect:
                    </span>
                    <div className="flex gap-4">
                      <a
                        href={`tel:${contactData.contact.phones[0].replace(
                          /\s/g,
                          ""
                        )}`}
                        className="text-[#10a19d] hover:text-[#0d817d] font-medium transition-colors flex items-center gap-1 text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${contactData.contact.email}`}
                        className="text-[#10a19d] hover:text-[#0d817d] font-medium transition-colors flex items-center gap-1 text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">
              Response within 2 hours on business days
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Free Consultation
            </h4>
            <p className="text-gray-600 text-sm">
              Complimentary site assessment and consultation
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
            <p className="text-gray-600 text-sm">
              Serving across Maharashtra region
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocationSection;
