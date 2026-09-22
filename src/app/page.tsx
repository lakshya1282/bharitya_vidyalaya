import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import {
  ChevronDown,
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Building2,
  Trees,
  UserCheck,
  HeartHandshake,
  History,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const stats = [
    {
      icon: GraduationCap,
      metric: "20,000+",
      label: "Students Educated",
      description:
        "Empowered thousands of young minds across generations with quality education.",
    },
    {
      icon: Award,
      metric: "42+ Years",
      label: "Educational Legacy",
      description:
        "Four decades of unwavering commitment to academic excellence since 1984.",
    },
    {
      icon: Users,
      metric: "680+",
      label: "Students Today",
      description:
        "A thriving, vibrant student community learning and growing together every day.",
    },
    {
      icon: BookOpen,
      metric: "32",
      label: "Dedicated Teachers",
      description:
        "Passionate educators nurturing every child's individual academic potential.",
    },
    {
      icon: Building2,
      metric: "87,000 sq. ft.",
      label: "Modern Campus",
      description:
        "Spacious, well-equipped academic facility designed for holistic learning.",
    },
    {
      icon: Trees,
      metric: "70,000 sq. ft.",
      label: "Expansive Playground",
      description:
        "Dedicated sports fields and green spaces encouraging physical fitness.",
    },
  ];

  const valueProps = [
    {
      title: "Experienced Educators",
      subtitle: "Academic Excellence",
      description:
        "Highly qualified teachers dedicated to nurturing individual learning paths and conceptual clarity.",
      icon: UserCheck,
      image: "/images/experieced educators.jpeg",
    },
    {
      title: "Holistic Development",
      subtitle: "Beyond Academics",
      description:
        "Integrating sports, arts, leadership skills, and values to build confident, well-rounded personalities.",
      icon: Sparkles,
      image: "/images/holistic_environment.jpeg",
    },
    {
      title: "A Strong Legacy",
      subtitle: "Trusted Since 1984",
      description:
        "Four decades of educational heritage delivering consistent academic growth across generations.",
      icon: History,
      image: "/images/a strong legacy.jpeg",
    },
    {
      title: "Accessible Education",
      subtitle: "Community Focused",
      description:
        "High-grade modern education rendered accessible and affordable to families in Kumhari & Durg.",
      icon: ShieldCheck,
      image: "/images/accesible education.jpeg",
    },
    {
      title: "Supportive Environment",
      subtitle: "Safe & Inclusive",
      description:
        "A warm, secure, and encouraging environment where every child feels valued and inspired to thrive.",
      icon: HeartHandshake,
      image: "/images/experienced teacher.jpeg",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden select-none">
        {/* Background Slideshow */}
        <HeroSlideshow />



        {/* Text Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

        {/* Bottom Hero Section Layout */}
        <div className="relative z-20 w-full px-6 pb-12 md:px-14 md:pb-20 lg:px-20 lg:pb-24 flex flex-col justify-end">
          <div className="flex flex-col text-left max-w-2xl gap-5 mb-24">
            <div className="flex flex-col gap-2">
              <MaskReveal direction="bottom-up">
                <p className="text-white/80 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase">
                  Building Knowledge. Shaping Futures.
                </p>
              </MaskReveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg">
                <SplitTextReveal>
                  <span className="block">Bharti Vidyalaya,</span>
                  <span className="block">Kumhari</span>
                </SplitTextReveal>
              </h1>
            </div>

            <MaskReveal direction="top-down" delay={0.3}>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed drop-shadow-md max-w-xl">
                Since 1984, Bharti Vidyalaya has been committed to providing
                holistic, high-quality education to students, empowering them to
                excel academically and grow into responsible global citizens.
              </p>
            </MaskReveal>

            <MaskReveal direction="top-down" delay={0.2}>
              <Link
                href="/contact"
                className="rounded-full px-8 py-3.5 bg-[#1C4ED8] text-white font-bold text-sm sm:text-base hover:bg-blue-800 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer inline-flex items-center gap-2"
              >
                Enquire for Admission
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </MaskReveal>
          </div>
        </div>
      </section>

      {/* Trust / Stats Metrics Section */}
      <section className="w-full bg-white text-zinc-900">
        {/* Centered Title */}
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 pt-12 pb-8 md:pt-14 md:pb-10 text-center">
          <p className="text-[#253B80] uppercase text-xs tracking-[0.2em] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] inline-block" />
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            <SplitTextReveal>
              <span className="block">A School That Has Grown</span>
              <span className="block">With Its Students</span>
            </SplitTextReveal>
          </h2>
        </div>

        {/* Two-column layout: Images left | Metric cards right */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 pb-12 md:pb-16 flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          {/* Left: Two overlapping placeholder images */}
          <div className="relative w-full lg:w-[50%] shrink-0 h-[480px] sm:h-[540px] lg:h-auto min-h-[480px] lg:min-h-[580px]">
            {/* Main (back) image — top-left, larger */}
            <div className="absolute top-0 left-0 w-[82%] h-[78%] rounded-2xl overflow-hidden shadow-xl bg-zinc-200">
              <ParallaxImage
                src="/images/WhatsApp Image 2026-09-22 at 4.33.40 PM.jpeg"
                alt="Bharti Vidyalaya students"
              />
            </div>
            {/* Overlay (front) image — bottom-right corner with subtle blue/yellow frame shadow */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[52%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100 z-10">
              <ParallaxImage
                src="/images/WhatsApp Image 2026-09-22 at 4.33.44 PM (1).jpeg"
                alt="Bharti Vidyalaya campus"
              />
            </div>
            {/* Decorative dot-grid behind images */}
            <div
              className="absolute -bottom-4 -left-4 w-28 h-28 opacity-25 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #253B80 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* Right: 3×2 Compact Metric Cards filling vertical space */}
          <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 h-full min-h-[480px] lg:min-h-[580px]">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MaskReveal key={idx} direction="top-down" delay={0.1 * idx} className="h-full">
                  <div
                    className="group flex flex-col justify-between h-full p-4 sm:p-5 rounded-xl border border-zinc-200/80 bg-zinc-50/70 hover:bg-white hover:shadow-lg hover:border-[#253B80]/30 transition-all duration-200 cursor-default relative overflow-hidden"
                  >
                    {/* Subtle top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <div className="flex flex-col gap-2.5">
                      {/* Icon in deep blue pill badge */}
                      <div className="w-8 h-8 rounded-lg bg-[#253B80] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-3.5 h-3.5 text-white stroke-[1.75]" />
                      </div>

                      {/* Metric */}
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-none mb-1">
                          {item.metric}
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest leading-snug">
                          {item.label}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-1.5">
                      {/* Thin separator with subtle yellow accent on hover */}
                      <div className="w-7 h-px bg-zinc-300 group-hover:bg-[#FFD700] transition-colors duration-200" />

                      {/* Description */}
                      <p className="text-[11px] text-zinc-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </MaskReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — 5 Value Props Cards */}
      <section className="w-full bg-zinc-50 border-t border-zinc-200/70 text-zinc-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
            <div className="max-w-2xl">
              <p className="text-[#253B80] uppercase text-xs tracking-[0.2em] font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] inline-block" />
                Key Advantages
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
                Why Bharti Vidyalaya?
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="rounded-full px-6 py-2 bg-[#253B80] text-white font-bold text-xs sm:text-sm hover:bg-blue-800 transition-all shadow-md w-fit flex items-center gap-2"
              >
                Know More <span className="text-base leading-none">&rarr;</span>
              </Link>
              <p className="text-base md:text-lg text-zinc-500 max-w-md leading-relaxed">
                Empowering students through exceptional faculty, values, and holistic learning experiences since 1984.
              </p>
            </div>
          </div>

          {/* Auto-sliding marquee wrapper with side gradient fades */}
        </div>

        {/* Full-width Infinite Auto-Slide Marquee Container */}
        <div className="relative w-full overflow-hidden pt-1 pb-4">
          {/* Subtle side fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex gap-5 px-4">
            {[...valueProps, ...valueProps].map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 bg-white rounded-3xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#253B80]/40 transition-all duration-300 cursor-pointer"
                >
                  {/* Card Image Header */}
                  <div className="relative w-full h-64 sm:h-72 bg-zinc-100 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                    
                    {/* Icon Badge Overlay */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm border border-white/60 flex items-center justify-center text-[#253B80] shadow-md group-hover:bg-[#253B80] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Subtitle tag */}
                    <div className="absolute bottom-4 left-4 text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                      {prop.subtitle}
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-3 bg-white">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-[#253B80] transition-colors duration-200">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admissions CTA Banner Section — Full-bleed Blue */}
      <section className="w-full bg-[#253B80] text-white min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center py-14 md:py-18 px-6 sm:px-10 md:px-16 relative overflow-hidden">
        {/* Subtle Background Accent Ornaments */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FFD700]/10 pointer-events-none blur-2xl" />
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#FFD700] via-[#FFD700]/60 to-transparent" />

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative z-10">
          
          {/* Left Text Block */}
          <div className="flex flex-col gap-4 max-w-3xl">
            {/* Tags Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FFD700] text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-sm">
                Admissions Open
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/15">
                Nursery to XII
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/15">
                English Medium
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/15">
                CBSE Pattern
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/15">
                Commerce & Arts
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Give Your Child a<br className="hidden sm:block" /> Strong Start
            </h2>

            {/* Line / Subtitle */}
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl">
              Admissions are open for Classes Nursery to XII. Empowering young minds with quality education since 1984.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full md:w-auto rounded-full px-8 py-3.5 bg-[#FFD700] text-zinc-950 font-bold text-base hover:bg-yellow-300 active:scale-95 hover:scale-105 transition-all duration-200 shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Enquire for Admission</span>
              <ArrowRight className="w-5 h-5 text-zinc-950 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

        </div>
      </section>


    </div>
  );
}
