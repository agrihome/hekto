"use client";

import { useState, useEffect } from "react";
import Button from "../Button";
import "./Footer.scss";
import Link from "next/link";

function FooterLinks({ links }) {
  return (
    <div className="footer__links-sub">
      {links.map((link) => (
        <p key={link}>{link}</p>
      ))}
    </div>
  );
}

function FooterHeading({ heading, onClick }) {
  return (
    <p className="title-medium footer__link" onClick={() => onClick(heading)}>
      {heading}
    </p>
  );
}

export default function Footer() {
  const [activeHeading, setActiveHeading] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null); // initially null (no window on server)

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    updateWindowWidth(); // run once on mount
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const footer_links = [
    {
      heading: "Catagories",
      links: [
        "Laptops & Computers",
        "Cameras & Photography",
        "Smart Phones & Tablets",
        "Video Games & Consoles",
        "Waterproof Headphones",
      ],
    },
    {
      heading: "Customer Care",
      links: [
        "My Account",
        "Discount",
        "Returns",
        "Orders History",
        "Order Tracking",
      ],
    },
    {
      heading: "Pages",
      links: [
        "Blog",
        "Browse the Shop",
        "Category",
        "Pre-Built Pages",
        "Visual Composer Elements",
      ],
    },
  ];

  const handleHeadingClick = (heading) => {
    if (windowWidth <= 950) {
      setActiveHeading((prev) => (prev === heading ? null : heading));
    }
  };

  // Don’t render anything until windowWidth is known (prevents hydration issues)
  if (windowWidth === null) return null;

  return (
    <footer className="footer__container">
      <div className="footer">
        <div className="footer__company">
          {/* Logo and input */}
          <div className="footer__input">
            <input placeholder="Enter Email Address" />
            <Button className="button--small">Sign Up</Button>
          </div>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {footer_links.map(({ heading, links }) => (
          <div className="footer__links" key={heading}>
            <FooterHeading heading={heading} onClick={handleHeadingClick} />
            {(windowWidth > 950 || activeHeading === heading) && (
              <FooterLinks links={links} />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
