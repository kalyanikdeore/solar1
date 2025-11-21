import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Sun } from "lucide-react";
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
        subItems: [
          { name: "Solar Panels", href: "/products" },
          { name: "Inverters", href: "/products" },
          { name: "Mounting Systems", href: "/products" },
          { name: "BOS Components", href: "/products" },
        ],
      },
      {
        label: "Services",
        path: "/services",
        subItems: [
          { name: "Solar EPC", href: "/services" },
          { name: "Consultancy", href: "/services" },
          { name: "Skill Development", href: "/services" },
          { name: "Maintenance", href: "/services" },
        ],
      },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      // If already on about page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Determine background color based on page and scroll
  const getNavbarBackground = () => {
    if (!isHomePage) {
      return "bg-white shadow-lg"; // Always white for non-home pages
    }
    return scrolled ? "bg-white shadow-lg" : "bg-transparent"; // Transparent only on home page when not scrolled
  };

  // Determine text color based on page and scroll
  const getTextColor = () => {
    if (!isHomePage) {
      return "text-gray-800"; // Always dark for non-home pages
    }
    return scrolled ? "text-gray-800" : "text-white"; // White only on home page when not scrolled
  };

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Main Navbar */}
      <motion.nav
        className={`${getNavbarBackground()} transition-all duration-300`}
        initial={{ padding: "16px 0" }}
        animate={{
          padding: scrolled ? "8px 0" : "16px 0",
          backgroundColor: !isHomePage
            ? "rgba(255,255,255,0.95)"
            : scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center z-200">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={Logo}
                className="w-64 h-16 md:w-96 md:h-24"
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
                    className={`flex items-center ${getTextColor()} hover:text-[#10a19d] transition-colors px-4 py-2 font-medium uppercase tracking-wider text-sm relative`}
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
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#10a19d]"
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
                    className="absolute left-0 top-full w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100"
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
                            className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-[#10a19d] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
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

            <motion.a
              href="/contact"
              className="ml-4 bg-gradient-to-r from-[#10a19d] to-[#0d817d] hover:from-[#0d817d] hover:to-[#10a19d] text-white px-6 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(16, 161, 157, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden ${getTextColor()} focus:outline-none`}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
              <button
                onClick={closeAllMenus}
                className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid gap-1">
                {navData.navigation.map((item) => (
                  <div key={item.label} className="border-b border-gray-100">
                    {item.subItems ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            to={item.path}
                            className="flex-1 flex items-center py-4 text-lg text-gray-800 font-semibold"
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
                              className="pl-8 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <div
                                  key={subItem.name}
                                  className="border-t border-gray-100"
                                >
                                  <Link
                                    to={subItem.href}
                                    className="block py-3 text-sm text-gray-600 hover:text-[#10a19d] transition-colors"
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
                        className="flex items-center py-4 text-lg text-gray-800 font-semibold"
                        onClick={closeAllMenus}
                      >
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-[#10a19d] to-[#0d817d] text-white px-6 py-4 rounded-lg font-semibold uppercase tracking-wider text-center text-lg shadow-lg"
                  onClick={closeAllMenus}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
