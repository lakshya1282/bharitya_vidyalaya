"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DEFAULT_HERO_IMAGES = [
  "/images/homepagehero.jpeg",
  "/images/homepagehero2.jpeg",
  "/images/hero1.jpeg",
  "/images/about us hero.jpeg",
];

export default function HeroSlideshow({ images = DEFAULT_HERO_IMAGES }: { images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Bharti Vidyalaya Campus ${index + 1}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out scale-[1.01] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

    </div>
  );
}
