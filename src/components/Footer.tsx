import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-zinc-900 border-t border-zinc-200 flex flex-col justify-between py-12 md:py-16 px-6 sm:px-10 md:px-16 min-h-[50vh]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
        
        {/* Brand & Address Column */}
        <div className="flex flex-col gap-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 shadow-sm border border-zinc-100">
              <Image
                src="/images/logo.jpeg"
                alt="Bharti Vidyalaya Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-none">
                Bharti Vidyalaya
              </h3>
              <p className="text-sm text-zinc-500 font-medium pt-1">Kumhari, Durg (C.G.)</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed pt-0.5">
            Providing holistic, quality education for over 42 years since 1984.
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed pt-2">
            Our mission is to nurture confident, capable individuals equipped with the knowledge and values to succeed in a rapidly changing world.
          </p>
        </div>

        {/* Quick Contact Column */}
        <div className="flex flex-col gap-3 text-sm text-zinc-600">
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-0.5 text-[#253B80]">
            Contact Us
          </h4>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#253B80] shrink-0" />
            <span>Kumhari, District Durg, Chhattisgarh</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#253B80] shrink-0" />
            <span>Contact Admissions Office</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#253B80] shrink-0" />
            <span>info@bhartividyalaya.edu</span>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="flex flex-col gap-3 text-sm">
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-0.5 text-[#253B80]">
            Quick Links
          </h4>
          <div className="flex flex-wrap md:flex-col gap-3 md:gap-2.5 text-zinc-600">
            <Link href="/" className="hover:text-[#253B80] transition-colors duration-200">Home</Link>
            <Link href="/about" className="hover:text-[#253B80] transition-colors duration-200">About Us</Link>
            <Link href="/gallery" className="hover:text-[#253B80] transition-colors duration-200">Gallery</Link>
            <Link href="/contact" className="hover:text-[#253B80] transition-colors duration-200">Contact</Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto pt-6 mt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-400 gap-2">
        <p>© {new Date().getFullYear()} Bharti Vidyalaya, Kumhari. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
          Estd. 1984
        </p>
      </div>
    </footer>
  );
}
