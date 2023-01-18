"use client";
import { useEffect, useState } from "react";
import "./styles.scss";

export const Navigation = () => {
  // Manage sticky state of navigation
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 340) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation ${scrolled && "sticky"}`}>
      <div className="content">Navigation Bar</div>
    </div>
  );
};
