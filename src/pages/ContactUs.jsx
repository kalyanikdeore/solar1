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
  Users,
  Leaf,
  Clock,
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
      color: "#F4C430",
      description: "Speak directly with our solar experts"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@navitasefficens.in"],
      link: "mailto:info@navitasefficens.in",
      color: "#4DB6E2",
      description: "Get detailed information via email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Shop No. 6-7, Durgesh Apt, Ganesh Nagar, Satpur, Nashik - 422007",
        "Branch Offices at Pune, Kopargaon"
      ],
      link: "https://maps.google.com",
      color: "#2E7D32",
      description: "Schedule an office consultation"
    },
  ];

  const features = [
    {
      icon: Clock,
      text: "Quick Response Within 2 Hours",
      color: "#F4C430"
    },
    {
      icon: Users,
      text: "Expert Solar Consultation",
      color: "#4DB6E2"
    },
    {
      icon: Leaf,
      text: "Free Site Assessment",
      color: "#2E7D32"
    },
    {
      icon: Sun,
      text: "Custom Solar Solutions",
      color: "#F28B30"
    }
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
      className="relative py-20 bg-gradient-to-br from-[#F6F7F4] to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4DB6E2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-6"
          >
            <MessageCircle className="h-4 w-4 text-[#2E7D32]" />
            <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">
              GET IN TOUCH
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            Start Your Solar{" "}
            <span className="bg-gradient-to-r from-[#F4C430] to-[#F28B30] bg-clip-text text-transparent">
              Journey
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
            Ready to harness solar power? Contact us for personalized consultation 
            and discover how we can transform your energy infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-500 flex items-start gap-6"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${info.color}15, ${info.color}30)`,
                      border: `2px solid ${info.color}20`
                    }}
                  >
                    <info.icon className="h-6 w-6" style={{ color: info.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1E1E1E] text-lg mb-2 group-hover:text-[#2E7D32] transition-colors">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-[#4A4A4A] text-sm mb-1 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                    <p className="text-[#4A4A4A] text-xs mt-2 opacity-70">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#D9DDDC]"
            >
              <h4 className="font-bold text-[#1E1E1E] text-lg mb-4">Connect With Us</h4>
              <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed">
                Follow our journey in solar innovation and stay updated with latest projects
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.youtube.com/results?search_query=Navitas+Efficens"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-[#F4C430] rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.103C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.583A2.974 2.974 0 0 0 .502 6.186 31.37 31.37 0 0 0 0 12a31.37 31.37 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.103C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.583a2.974 2.974 0 0 0 2.09-2.103A31.37 31.37 0 0 0 24 12a31.37 31.37 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/navitasefficens"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-[#4DB6E2] rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/NavitasEfficens"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-[#2E7D32] rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="bg-white rounded-2xl p-8 md:mb-34 shadow-2xl border border-[#D9DDDC]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#F4C430] to-[#F28B30] flex items-center justify-center shadow-lg">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E1E1E]">Send Message</h3>
                <p className="text-[#4A4A4A] text-sm">Get your free solar consultation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D9DDDC] rounded-xl focus:ring-2 focus:ring-[#4DB6E2] focus:border-transparent transition-all duration-300 bg-white placeholder-[#4A4A4A]"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D9DDDC] rounded-xl focus:ring-2 focus:ring-[#4DB6E2] focus:border-transparent transition-all duration-300 bg-white placeholder-[#4A4A4A]"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                    Phone
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D9DDDC] rounded-xl focus:ring-2 focus:ring-[#4DB6E2] focus:border-transparent transition-all duration-300 bg-white placeholder-[#4A4A4A]"
                    placeholder="+91 00000 00000"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D9DDDC] rounded-xl focus:ring-2 focus:ring-[#4DB6E2] focus:border-transparent transition-all duration-300 bg-white placeholder-[#4A4A4A]"
                    placeholder="Subject"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                  Message *
                </label>
                <motion.textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D9DDDC] rounded-xl focus:ring-2 focus:ring-[#4DB6E2] focus:border-transparent transition-all duration-300 resize-none bg-white placeholder-[#4A4A4A]"
                  placeholder="Tell us about your solar project requirements..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: "0 10px 30px rgba(244, 196, 48, 0.4)" }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message & Get Consultation
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