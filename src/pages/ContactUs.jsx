// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Sun,
  MessageCircle,
  Star,
  Zap,
} from "lucide-react";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const formspreeResponse = await fetch(
        "https://formspree.io/f/YOUR_FORMSPREE_FORM_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact Form Submission: ${formData.subject}`,
          }),
        }
      );

      // Prepare WhatsApp message
      const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;

      const whatsappUrl = `https://wa.me/919822561464?text=${whatsappMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      if (formspreeResponse.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98225 61464", "+91 99229 46677"],
      link: "tel:+919822561464",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@navitasefficens.in"],
      link: "mailto:info@navitasefficens.in",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Shop No. 6-7, Durgesh Apt, Ganesh Nagar, Satpur, Nashik - 422007",
        "Branch Offices at Pune, Kopargaon",
      ],
      link: "https://maps.google.com",  
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gray-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-300 rounded-full opacity-25 blur-2xl"></div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-16 right-16 text-gray-400 opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Star size={24} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-16 text-gray-500 opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <Zap size={20} fill="currentColor" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-30">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#10a19d] mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              Touch
            </span>
          </h2>

          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to harness solar power? Contact us for personalized
            consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#10a19d] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  className="flex items-start p-4 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group bg-white"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center mr-4 group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-300 shadow-md">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-600 text-sm mb-1"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="mt-6 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200"
            >
              <h4 className="font-bold text-gray-900 mb-3">Connect With Us</h4>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with latest projects
              </p>
              <div className="flex space-x-3">
                <motion.a
                  href="https://www.youtube.com/results?search_query=Navitas+Efficens"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-[#10a19d] rounded-xl flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.103C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.583A2.974 2.974 0 0 0 .502 6.186 31.37 31.37 0 0 0 0 12a31.37 31.37 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.103C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.583a2.974 2.974 0 0 0 2.09-2.103A31.37 31.37 0 0 0 24 12a31.37 31.37 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/navitasefficens"
                  className="w-12 h-12 bg-[#10a19d] rounded-xl flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/NavitasEfficens"
                  className="w-12 h-12 bg-[#10a19d] rounded-xl flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#10a19d] mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 mb-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="+91 00000 00000"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="Subject"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <motion.textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none bg-white"
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-[#10a19d] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#0d8c89] transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
