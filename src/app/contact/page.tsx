"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const CONTACT_HERO_IMAGES = [
  "/images/experieced educators.jpeg",
  "/images/experienced teacher.jpeg"
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col bg-white text-zinc-900 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <HeroSlideshow images={CONTACT_HERO_IMAGES} />
        </div>
        
        {/* Text Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 flex-1 w-full px-6 pb-12 md:px-14 md:pb-20 lg:px-20 lg:pb-24 flex flex-col justify-end">
          <div className="flex flex-col text-left max-w-2xl gap-5 mb-24">
            <span className="text-[#FFD700] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md">
              Admissions Open
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg">
              <SplitTextReveal>
                <span className="block">Give Your Child a</span>
                <span className="block">Strong Start</span>
              </SplitTextReveal>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-16 md:py-24 px-6 sm:px-10 bg-zinc-50 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info & Map */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-6">
                <SplitTextReveal>
                  <span className="block">Get in Touch</span>
                </SplitTextReveal>
              </h2>
              <MaskReveal direction="top-down" delay={0.1}>
                <p className="text-zinc-600 font-medium leading-relaxed max-w-md mb-8">
                  We welcome your queries regarding admissions, curriculum, and campus facilities. Reach out to us using the contact details below or drop us a message.
                </p>
              </MaskReveal>
              
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                    <MapPin className="w-6 h-6 text-[#253B80]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Visit Us</span>
                    <span className="text-lg font-bold text-zinc-900">G.E. Road, Kumhari,</span>
                    <span className="text-base text-zinc-600 font-medium">Dist. Durg, Chhattisgarh</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                    <Phone className="w-6 h-6 text-[#253B80]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Call Us</span>
                    <span className="text-lg font-bold text-zinc-900 tracking-wide">93297-71421</span>
                    <span className="text-lg font-bold text-zinc-900 tracking-wide">73899-02221</span>
                  </div>
                </div>
              </div>
            </div>

            <MaskReveal direction="top-down" delay={0.2}>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold tracking-wide">English Medium</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold tracking-wide">CBSE Pattern</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold tracking-wide">Commerce & Arts</span>
              </div>
            </MaskReveal>

            {/* Google Maps Embed */}
            <MaskReveal direction="top-down" delay={0.3}>
              <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-zinc-200 mt-4 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3a28dcf37fcd47b9%3A0xc47e335520e54d7!2sBharti%20Vidyalaya%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </MaskReveal>
          </div>

          {/* Right Column: Enquiry Form */}
          <MaskReveal direction="top-down" delay={0.4} className="h-fit">
          <div className="w-full bg-white rounded-3xl shadow-xl border border-zinc-100 p-8 md:p-12 h-fit">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight">Admission Enquiry</h3>
            <p className="text-sm text-zinc-500 font-medium mb-8">Fill out the form below and our admissions team will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-bold text-zinc-700 ml-1">Parent's / Guardian's Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Enter your full name"
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#253B80] focus:ring-4 focus:ring-[#253B80]/10 transition-all font-medium text-zinc-900"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-bold text-zinc-700 ml-1">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  placeholder="10-digit mobile number"
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#253B80] focus:ring-4 focus:ring-[#253B80]/10 transition-all font-medium text-zinc-900"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="class" className="text-sm font-bold text-zinc-700 ml-1">Class Applying For *</label>
                <select 
                  id="class" 
                  required
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#253B80] focus:ring-4 focus:ring-[#253B80]/10 transition-all font-medium text-zinc-900 appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }}
                >
                  <option value="" disabled selected>Select a class</option>
                  <option value="nursery">Nursery / KG</option>
                  <option value="primary">Primary (Class 1-5)</option>
                  <option value="middle">Middle (Class 6-8)</option>
                  <option value="secondary">Secondary (Class 9-10)</option>
                  <option value="higher-secondary">Higher Secondary (Class 11-12)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-bold text-zinc-700 ml-1">Message / Queries</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your child or any specific questions..."
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#253B80] focus:ring-4 focus:ring-[#253B80]/10 transition-all font-medium text-zinc-900 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== "idle"}
                className={`w-full py-4 mt-2 rounded-xl font-bold text-white tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                  formStatus === "idle" ? "bg-[#253B80] hover:bg-blue-900 hover:shadow-xl hover:-translate-y-1" :
                  formStatus === "submitting" ? "bg-zinc-400 cursor-not-allowed" :
                  "bg-emerald-500"
                }`}
              >
                {formStatus === "idle" && (
                  <>
                    Submit Enquiry
                    <Send className="w-5 h-5 ml-1" />
                  </>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <>
                    Sent Successfully
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          </MaskReveal>
          
        </div>
      </section>


    </div>
  );
}
