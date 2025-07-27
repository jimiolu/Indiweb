"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Home from "@/page";
import Footer from "@/components/Footer";
import Link from "next/link";

const Layout = () => {
  const navItems = [
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Case Studies",
      link: "#case-studies",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-3 left-0 w-full z-50">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton
                variant="primary"
                href="https://indisis.fillout.com/business"
                target="_blank"
                className="bg-basecolor rounded-full text-primary"
              >
                Let&apos;s Get Started
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                {/* <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton> */}
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  href="https://indisis.fillout.com/business"
                  target="_blank"
                  className="w-full bg-basecolor"
                >
                  Let&apos;s Get Started
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        <Home />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
