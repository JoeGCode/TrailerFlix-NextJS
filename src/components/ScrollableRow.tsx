"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type ScrollableRowType = {
  children: React.ReactNode;
  title: string;
};

function ScrollableRow({ title, children }: ScrollableRowType) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  function updateButtonVisibility() {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }
  useLayoutEffect(() => {
    const currentRef = rowRef.current;
    if (currentRef) {
      updateButtonVisibility();
      currentRef.addEventListener("scroll", updateButtonVisibility);
      return () => {
        if (currentRef) {
          currentRef.removeEventListener("scroll", updateButtonVisibility);
        }
      };
    }
  }, [children]);

  function scroll(direction: "left" | "right") {
    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 px-4 sm:px-6 md:px-12">{title}</h2>
      {children && (
        <div className="relative flex items-center">
          {showLeftButton && (
            <button
              className="absolute left-0 z-20 bg-black/80 text-white p-2 h-full"
              onClick={() => scroll("left")}
            >
              <MdChevronLeft size={24} />
            </button>
          )}
          <div
            ref={rowRef}
            className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth relative"
            style={{ scrollbarWidth: "none" }}
          >
            {children}
          </div>
          {showRightButton && (
            <button
              className="absolute right-0 z-20 bg-black/80 text-white p-2 h-full"
              onClick={() => scroll("right")}
            >
              <MdChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default ScrollableRow;
