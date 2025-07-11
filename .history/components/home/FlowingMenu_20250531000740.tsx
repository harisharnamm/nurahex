"use client"

import React from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

export interface FlowingMenuItem {
  link: string;
  text: string;
  supporting: string;
  image: string;
}

interface FlowingMenuProps {
  items: FlowingMenuItem[];
  className?: string;
}

function MenuItem({ link, text, supporting, image }: FlowingMenuItem) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const supportingRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !supportingRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
    gsap.to(supportingRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !supportingRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
    gsap.to(supportingRef.current, { opacity: 0, y: 16, duration: 0.3, ease: "power2.in" });
  };

  // Accessibility: show supporting text on focus
  const handleFocus = () => {
    if (supportingRef.current) {
      gsap.to(supportingRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    }
  };
  const handleBlur = () => {
    if (supportingRef.current) {
      gsap.to(supportingRef.current, { opacity: 0, y: 16, duration: 0.3, ease: "power2.in" });
    }
  };

  // Marquee content
  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link"
        href={link}
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby={text + "-supporting"}
      >
        {text}
        <div
          ref={supportingRef}
          id={text + "-supporting"}
          className="menu__item-supporting"
          aria-hidden="true"
        >
          {supporting}
        </div>
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items, className }) => {
  return (
    <div className={"menu-wrap " + (className || "") }>
      <nav className="menu" aria-label="NurahexAI Value Propositions">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default FlowingMenu;
