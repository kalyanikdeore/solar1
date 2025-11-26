import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Sun, Phone } from "lucide-react";
import { Logo } from "../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const location = useLocation();

  // Check if current page is home
  const isHomePage = location.pathname === "/";

  // Navigation data for Navitas Efficens
  const navData = {
    company: {
      name: "Navitas Efficens",
      logo: "NE",
    },
    navigation: [
      { label: "Home", path: "/" },
      {
        label: "About Us",
        path: "/about",
        subItems: [
          { name: "Our Story", href: "/about#our-story" },
          { name: "Vision & Mission", href: "/about#vision" },
          { name: "Team", href: "/about#team" },
        ],
      },
      {
        label: "Products",
        path: "/products",
        // subItems: [
        //   { name: "Solar Panels", href: "/products" },
        //   { name: "Inverters", href: "/products" },
        //   { name: "Mounting Systems", href: "/products" },
        //   { name: "BOS Components", href: "/products" },
        // ],
      },
      {
        label: "Services",
        path: "/services",
        // subItems: [
        //   { name: "Solar EPC", href: "/services" },
        //   { name: "Consultancy", href: "/services" },
        //   { name: "Skill Development", href: "/services" },
        //   { name: "Maintenance", href: "/services" },
        // ],
      },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    document.body.style.overflow = "auto";
  };

  const handleDropdownToggle = (dropdown) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setOpenSubDropdown(null);
  };

  const handleSubDropdownToggle = (subDropdown) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubDropdown(openSubDropdown === subDropdown ? null : subDropdown);
  };

  // Scroll to section when dropdown item is clicked
  const handleAboutSectionClick = (sectionId) => {
    closeAllMenus();
    if (location.pathname === "/about") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Determine background color based on scroll - ALWAYS transparent when not scrolled
  const getNavbarBackground = () => {
    return scrolled ? "bg-white shadow-md" : "bg-transparent";
  };

  // Determine text color based on page and scroll
  const getTextColor = () => {
    if (!isHomePage) {
      return "text-[#1E1E1E]"; // Always dark for non-home pages
    }
    return scrolled ? "text-[#1E1E1E]" : "text-white"; // White only on home page when not scrolled
  };

  // Determine quote button style based on page and scroll state
  const getQuoteButtonStyle = () => {
    if (!isHomePage) {
      // Always gradient background for non-home pages
      return "bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white";
    } else {
      // Home page: gradient when scrolled, glass morphism when not scrolled
      return scrolled 
        ? "bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white" 
        : "bg-white/20 backdrop-blur-sm text-white border border-white/30";
    }
  };

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Main Navbar */}
      <motion.nav
        className={`${getNavbarBackground()} transition-all duration-300`}
        initial={{ padding: "12px 0" }}
        animate={{
          padding: scrolled ? "6px 0" : "12px 0",
          backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center z-20">
          {/* Logo - Smaller size */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={Logo}
                className="w-48 h-12 md:w-48 md:h-24 object-contain"
                alt="Navitas Efficens Logo"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navData.navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  if (item.subItems) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (!openSubDropdown) setOpenDropdown(null);
                }}
              >
                <motion.div className="relative">
                  <Link
                    to={item.path}
                    className={`flex items-center ${getTextColor()} hover:text-[#F4C430] transition-colors px-3 py-2 font-medium uppercase tracking-wider text-xs relative`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.subItems && (
                      <span
                        className="ml-1"
                        onClick={handleDropdownToggle(item.label)}
                      >
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    )}

                    {hoveredItem === item.label && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F4C430] to-[#2E7D32]"
                        layoutId="navUnderline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Dropdown */}
                {item.subItems && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl z-50 border border-[#D9DDDC]"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => {
                      if (!openSubDropdown) setOpenDropdown(null);
                    }}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name} className="relative">
                          <Link
                            to={subItem.href}
                            className="flex items-center w-full px-3 py-2 text-xs text-[#4A4A4A] hover:bg-gradient-to-r hover:from-[#2E7D32] hover:to-[#4DB6E2] hover:text-white transition-all duration-300 border-b border-[#D9DDDC] last:border-b-0"
                            onClick={() => {
                              if (
                                subItem.href.includes("#") &&
                                location.pathname === "/about"
                              ) {
                                handleAboutSectionClick(
                                  subItem.href.split("#")[1]
                                );
                              } else {
                                closeAllMenus();
                              }
                            }}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Get Quote Button */}
            <motion.a
              href="tel:+919822561464"
              className={`ml-3 ${getQuoteButtonStyle()} px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-xs shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(242, 139, 48, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-3 w-3" />
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden ${getTextColor()} focus:outline-none`}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Always has white background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-16"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-end">
              <button
                onClick={closeAllMenus}
                className="text-[#1E1E1E] p-2 rounded-full hover:bg-[#F6F7F4] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid gap-1">
                {navData.navigation.map((item) => (
                  <div key={item.label} className="border-b border-[#D9DDDC]">
                    {item.subItems ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            to={item.path}
                            className="flex-1 flex items-center py-3 text-base text-[#1E1E1E] font-semibold"
                            onClick={closeAllMenus}
                          >
                            <span className="ml-3">{item.label}</span>
                          </Link>
                          {item.subItems && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenDropdown(
                                  openDropdown === item.label
                                    ? null
                                    : item.label
                                );
                                setOpenSubDropdown(null);
                              }}
                              className="p-2"
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  openDropdown === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <div
                                  key={subItem.name}
                                  className="border-t border-[#D9DDDC]"
                                >
                                  <Link
                                    to={subItem.href}
                                    className="block py-2 text-sm text-[#4A4A4A] hover:text-[#2E7D32] transition-colors"
                                    onClick={() => {
                                      if (
                                        subItem.href.includes("#") &&
                                        location.pathname === "/about"
                                      ) {
                                        handleAboutSectionClick(
                                          subItem.href.split("#")[1]
                                        );
                                      } else {
                                        closeAllMenus();
                                      }
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center py-3 text-base text-[#1E1E1E] font-semibold"
                        onClick={closeAllMenus}
                      >
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="tel:+919822561464"
                  className="block w-full bg-gradient-to-r from-[#F28B30] to-[#F4C430] text-white px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-center text-sm shadow-lg flex items-center justify-center gap-2"
                  onClick={closeAllMenus}
                >
                  <Phone className="h-4 w-4" />
                  Call +91 98225 61464
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;