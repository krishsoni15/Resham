"use client";

import React, { useRef, useEffect, useState } from "react";

export interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  activeCategoryIndex?: number;
  onItemSelect?: (index: number, item: GooeyNavItem) => void;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 500,
  particleCount = 10,
  particleDistances = [50, 10],
  particleR = 60,
  timeVariance = 200,
  initialActiveIndex = 0,
  activeCategoryIndex,
  onItemSelect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const particleContainerRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  // Sync controlled active category index from scroll spy if provided
  useEffect(() => {
    if (activeCategoryIndex !== undefined && activeCategoryIndex !== activeIndex) {
      triggerNavChange(activeCategoryIndex);
    }
  }, [activeCategoryIndex]);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const makeParticles = (element: HTMLElement) => {
    if (!particleContainerRef.current) return;
    const particleHolder = particleContainerRef.current;
    
    // Clear old particles safely
    while (particleHolder.firstChild) {
      particleHolder.removeChild(particleHolder.firstChild);
    }

    const particleColors = ["#9A481B", "#B85721", "#D97706", "#F59E0B"];
    
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime + noise(timeVariance);
      const startPos = getXY(particleDistances[0], particleCount - i, particleCount);
      const endPos = getXY(particleDistances[1] + noise(5), particleCount - i, particleCount);
      const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];

      const particle = document.createElement("span");
      const point = document.createElement("span");
      
      particle.classList.add("gooey-particle");
      particle.style.setProperty("--start-x", `${startPos[0]}px`);
      particle.style.setProperty("--start-y", `${startPos[1]}px`);
      particle.style.setProperty("--end-x", `${endPos[0]}px`);
      particle.style.setProperty("--end-y", `${endPos[1]}px`);
      particle.style.setProperty("--time", `${t}ms`);
      
      point.classList.add("gooey-point");
      point.style.setProperty("--color", randomColor);

      particle.appendChild(point);
      particleHolder.appendChild(particle);

      setTimeout(() => {
        try {
          if (particleHolder.contains(particle)) {
            particleHolder.removeChild(particle);
          }
        } catch {}
      }, t);
    }
  };

  const updateIndicatorPosition = (element: HTMLElement) => {
    if (!containerRef.current || !indicatorRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    
    Object.assign(indicatorRef.current.style, styles);
    if (particleContainerRef.current) {
      Object.assign(particleContainerRef.current.style, styles);
    }
  };

  const triggerNavChange = (index: number) => {
    if (!navRef.current) return;
    const lis = navRef.current.querySelectorAll("li");
    const targetLi = lis[index] as HTMLElement;
    if (!targetLi) return;

    setActiveIndex(index);
    updateIndicatorPosition(targetLi);
    makeParticles(targetLi);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const anchorEl = e.currentTarget;
    const liEl = anchorEl.parentElement as HTMLElement;
    if (activeIndex === index) return;
    
    setActiveIndex(index);
    if (liEl) {
      updateIndicatorPosition(liEl);
      makeParticles(liEl);
    }
    
    if (onItemSelect) {
      onItemSelect(index, items[index]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(
        {
          currentTarget: e.currentTarget
        } as React.MouseEvent<HTMLAnchorElement>,
        index
      );
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLElement;
    if (activeLi) {
      updateIndicatorPosition(activeLi);
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLElement;
      if (currentActiveLi) {
        updateIndicatorPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          .gooey-indicator {
            position: absolute;
            pointer-events: none;
            z-index: 1;
            border-radius: 9999px;
            background: linear-gradient(135deg, #9A481B 0%, #B85721 100%);
            box-shadow: 0 4px 16px rgba(154, 72, 27, 0.35);
            transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .gooey-particles-holder {
            position: absolute;
            pointer-events: none;
            z-index: 2;
            display: grid;
            place-items: center;
          }

          .gooey-particle {
            position: absolute;
            top: calc(50% - 6px);
            left: calc(50% - 6px);
            display: block;
            pointer-events: none;
            animation: gooeyParticleAnim var(--time, 500ms) ease-out forwards;
          }

          .gooey-point {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 9999px;
            background: var(--color, #9A481B);
            animation: gooeyPointAnim var(--time, 500ms) ease-out forwards;
          }

          @keyframes gooeyParticleAnim {
            0% {
              transform: translate(var(--start-x), var(--start-y));
              opacity: 1;
            }
            100% {
              transform: translate(var(--end-x), var(--end-y));
              opacity: 0;
            }
          }

          @keyframes gooeyPointAnim {
            0% {
              transform: scale(1);
              opacity: 0.9;
            }
            100% {
              transform: scale(0.2);
              opacity: 0;
            }
          }

          li.gooey-item {
            position: relative;
            z-index: 3;
          }

          li.gooey-item a {
            position: relative;
            z-index: 4;
            transition: color 0.25s ease;
          }
        `}
      </style>

      <div className="relative p-1 bg-transparent rounded-full" ref={containerRef}>
        {/* Crisp Gliding Copper Pill Background */}
        <span className="gooey-indicator" ref={indicatorRef} />
        {/* Soft Sparkle Burst Container */}
        <span className="gooey-particles-holder" ref={particleContainerRef} />

        <nav className="flex relative">
          <ul
            ref={navRef}
            className="flex gap-1 list-none p-0 m-0 relative z-10"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className="gooey-item rounded-full relative cursor-pointer transition-all duration-200"
              >
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  className={`outline-none py-1.5 px-4 inline-block font-extrabold text-xs lg:text-sm rounded-full ${
                    activeIndex === index
                      ? "text-white"
                      : "text-[#1C1917] hover:text-[#9A481B]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default GooeyNav;
