"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Mail, MapPin, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_HERO_IMAGES = [
  "/images/holistic_environment.jpeg",
  "/images/our_impact.jpeg",
  "/images/hompage,_Section2_greater image.jpeg",
];

const ALL_IMAGES = [
  "/images/WhatsApp Image 2026-09-22 at 4.25.32 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.32 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.33 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.33 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.34 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.35 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.35 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.35 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.36 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.36 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.37 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.37 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.38 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.38 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.38 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.39 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.39 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.40 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.40 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.40 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.42 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.25.42 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.37 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.38 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.38 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.38 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.39 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.39 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.40 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.40 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.40 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.41 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.42 PM (2).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.42 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.43 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.43 PM.jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.44 PM (1).jpeg",
  "/images/WhatsApp Image 2026-09-22 at 4.33.44 PM.jpeg",
  "/images/a strong legacy.jpeg",
  "/images/about us hero.jpeg",
  "/images/accesible education.jpeg",
  "/images/experieced educators.jpeg",
  "/images/experienced teacher.jpeg",
  "/images/hero1.jpeg",
  "/images/holistic_environment.jpeg",
  "/images/homepage_.jpeg",
  "/images/homepagehero.jpeg",
  "/images/homepagehero2.jpeg",
  "/images/hompage,_Section2_greater image.jpeg",
  "/images/our_impact.jpeg"
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : ALL_IMAGES.length - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev! < ALL_IMAGES.length - 1 ? prev! + 1 : 0));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev! < ALL_IMAGES.length - 1 ? prev! + 1 : 0));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : ALL_IMAGES.length - 1));
  };

  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden select-none bg-black">
        <HeroSlideshow images={GALLERY_HERO_IMAGES} />
        
        {/* Text Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        
        {/* Hero Title Container */}
        <div className="relative z-20 flex-1 w-full px-6 pb-12 md:px-14 md:pb-20 lg:px-20 lg:pb-24 flex flex-col justify-end">
          <div className="flex flex-col text-left max-w-2xl gap-5 mb-24">
            <span className="text-[#FFD700] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md">
              Gallery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg">
              <SplitTextReveal>
                <span className="block">A Glimpse Into</span>
                <span className="block">Campus Life</span>
              </SplitTextReveal>
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="w-full py-16 md:py-24 px-6 sm:px-10 bg-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              <SplitTextReveal>
                <span className="block">Our Gallery</span>
              </SplitTextReveal>
            </h2>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto font-medium">
              Explore vibrant moments, celebrations, and learning experiences from Bharti Vidyalaya. Click any image to view it in full screen.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {ALL_IMAGES.map((src, idx) => (
              <div 
                key={idx} 
                className="group relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm bg-zinc-200 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxIndex(idx)}
              >
                <ParallaxImage
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button 
            className="absolute left-4 md:left-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Navigation Next */}
          <button 
            className="absolute right-4 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          >
            <Image
              src={ALL_IMAGES[lightboxIndex]}
              alt={`Gallery Image ${lightboxIndex + 1} Fullscreen`}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white/90 text-sm font-medium tracking-wider">
            {lightboxIndex + 1} / {ALL_IMAGES.length}
          </div>
        </div>
      )}


    </div>
  );
}
