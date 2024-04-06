import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import GsapMagnetic from "./GsapMagnetic";
import DarkModeToggle from "./DarkMode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const navbarRef = useRef(null);

  useGSAP(() => {
    const navbar = navbarRef.current;
    gsap.to(navbar, { y: 0, opacity: 1, delay: 5, duration: 2, ease: "back.out" });
  }, { scope: navbarRef });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (isLandingPage) {
        if (currentScrollPos > 100) {
          setIsLandingPage(false);
          setPrevScrollPos(currentScrollPos);
        }
      } else {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage, prevScrollPos]);

  return (
    <>
      <div ref={navbarRef} className="navbar-container" style={{ top: visible ? "0" : "-10rem", transition: "top 0.3s" }}>
        <nav className="main-nav">
          {/* 1st logo part */}
          <div className="logo">
            <GsapMagnetic>
              <div className="nav-logo"></div>
            </GsapMagnetic>
          </div>
          {/* 2nd menu part */}
          <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#ecosystem">ecosystem</a>
              </li>
              <li>
                <a href="#page">Comrade Program</a>
              </li>
              <li>
                <a href="#hub">emergex hub</a>
              </li>
              <li>
                <a href="#ecosystem">learn</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
          {/* 3rd social media links */}
          <div className="social-media">
            {/* hamburget menu start */}
            <div className="hamburger-menu">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowMediaIcons(!showMediaIcons); }}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
