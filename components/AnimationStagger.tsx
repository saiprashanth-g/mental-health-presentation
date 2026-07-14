'use client'; // This must run on the client for GSAP to work

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Use the native Next.js integration

// Essential: Register ScrollTrigger plugin once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Define the customizable props
interface AnimationStaggerProps {
  children: React.ReactNode;
  selector?: string; // The CSS selector (e.g., '.box') to stagger
  delay?: number; // Initial delay before staggering starts
  stagger?: number; // Time distance between each item
  y?: number; // Starting Y position offset
  duration?: number; // Speed of each animation
}

// Reusable Component Wrapper
export default function AnimationStagger({
  children,
  selector = '.stagger-item', // Default CSS class for child elements
  delay = 0,
  stagger = 0.15, // 150ms gap between items
  y = 20, // Start 20px below final position
  duration = 0.5, // Fast, snappy transition (500ms)
}: AnimationStaggerProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>();

  // Advanced integration managing timeline lifecycle
  useGSAP(() => {
    // 1. Target all matching elements within this component's scope
    const targets = containerRef.current?.querySelectorAll(selector);

    // Escape early if no targets are found
    if (!targets || targets.length === 0) return;

    // 2. Initialize the main presentation timeline
    timelineRef.current = gsap.timeline({
      // 3. Connect the entire timeline to ScrollTrigger
      scrollTrigger: {
        trigger: containerRef.current, // Start animating when this component is visible
        start: "top 75%", // Start when component is 75% visible
        end: "bottom 25%", // End when the presentation slides past
        toggleActions: "play none none reverse", // Rewind when presentation moves backward
        // markers: true, // Uncomment this line to visualize trigger points
      },
      delay: delay // Global delay for this specific slide block
    });

    // 4. Set the initial 'FROM' state (invisible and offset)
    gsap.set(targets, { opacity: 0, y: y });

    // 5. Execute the 'TO' stagger animation
    timelineRef.current.to(targets, {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger, // Lock the sequential pattern
      ease: "power2.out" // Use a smooth but assertive ease
    });

  }, { scope: containerRef }); // Use native GSAP scope restriction

  // Use useLayoutEffect for immediate cleanup during HMR
  useLayoutEffect(() => {
    return () => {
      // Safely kill all plugin instances on slide unmount
      timelineRef.current?.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Return the container wrapper
  return (
    <div ref={containerRef} className="relative w-full">
      {children}
    </div>
  );
}