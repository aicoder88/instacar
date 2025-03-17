import React, { useState, useRef, useEffect } from "react";

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

const ComparisonSlider = ({
  beforeImage = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
  afterImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Car detailing before and after comparison",
}: ComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;

    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const containerWidth = rect.width;

    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMoveEvent = (e: MouseEvent) => handleMouseMove(e);
    const handleMouseUpEvent = () => handleMouseUp();
    const handleTouchMoveEvent = (e: TouchEvent) => handleTouchMove(e);
    const handleTouchEndEvent = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMoveEvent);
      document.addEventListener("mouseup", handleMouseUpEvent);
      document.addEventListener("touchmove", handleTouchMoveEvent as any);
      document.addEventListener("touchend", handleTouchEndEvent);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveEvent);
      document.removeEventListener("mouseup", handleMouseUpEvent);
      document.removeEventListener("touchmove", handleTouchMoveEvent as any);
      document.removeEventListener("touchend", handleTouchEndEvent);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg bg-black"
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={`${alt} - after`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Partial width based on slider) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - before`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="m9 18 6-6-6-6" />
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
