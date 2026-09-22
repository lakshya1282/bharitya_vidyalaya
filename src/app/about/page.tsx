import Image from "next/image";
import Link from "next/link";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { ChevronDown, MapPin, Phone, Mail, BookOpen, Users, Globe, Monitor, FileCheck, Brain, Library, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden select-none bg-black">
        {/* Background Image with Ambient Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/experieced educators.jpeg"
            alt="Bharti Vidyalaya Campus"
            priority
          />
        </div>

        {/* Text Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

        {/* Hero Title Container */}
        <div className="relative z-20 flex-1 w-full px-6 pb-12 md:px-14 md:pb-20 lg:px-20 lg:pb-24 flex flex-col justify-end">
          <div className="flex flex-col text-left max-w-2xl gap-5 mb-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg">
                <SplitTextReveal>
                    <span className="block">42 Years of Learning</span>
                    <span className="block">& Growing</span>
                </SplitTextReveal>
            </h1>
            <MaskReveal direction="top-down" delay={0.3}>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed drop-shadow-md max-w-xl">
                    Since 1984, Bharti Vidyalaya has been committed to providing quality education while nurturing confident, capable and well-rounded individuals.
                </p>
            </MaskReveal>
            <MaskReveal direction="top-down" delay={0.4}>
                <div className="mt-2">
                    <Link
                      href="/contact"
                      className="rounded-full px-8 py-3.5 bg-[#1C4ED8] text-white font-bold text-sm sm:text-base hover:bg-blue-800 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer inline-flex items-center gap-2"
                    >
                      Enquire About Admission
                      <span className="text-lg leading-none">&rarr;</span>
                    </Link>
                </div>
            </MaskReveal>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="w-full py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage
                    src="/images/holistic_environment.jpeg"
                    alt="Bharti Vidyalaya Heritage"
                />
            </div>
            
            {/* Right Text Content */}
            <div className="flex flex-col gap-6 md:gap-8 text-left">
                <MaskReveal direction="top-down" delay={0.1}>
                  <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-medium">
                      Established in 1984, Bharti Vidyalaya has been committed to providing holistic, high-quality education to students, empowering them to excel academically and grow into responsible global citizens.
                  </p>
                </MaskReveal>
                <MaskReveal direction="top-down" delay={0.2}>
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                      Over the years, 20,000+ students have passed through our doors, taking with them a strong foundation of values, knowledge, and skills. Our focus has always been on nurturing individual talent while fostering a sense of community and responsibility.
                  </p>
                </MaskReveal>
                <MaskReveal direction="top-down" delay={0.3}>
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                      Today, the school has around 680 students supported by 32 dedicated teachers. We continue to build upon our legacy, ensuring every child receives the attention and guidance they need in a supportive and progressive environment.
                  </p>
                </MaskReveal>
            </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="w-full py-20 px-6 sm:px-10 bg-[#253B80]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left: Textual Content (Timeline) */}
            <div className="order-2 lg:order-1 relative border-l-2 border-[#FFD700]/50 ml-4 space-y-12 py-4">
            {[
              { year: "1984", title: "Foundation Stone Laid", desc: "Bharti Vidyalaya was established with a vision to make quality education accessible." },
              { year: "1997–98", title: "Expansion & Growth", desc: "Introduction of higher secondary classes to accommodate the growing student body." },
              { year: "1998–99", title: "New Campus Block", desc: "Inauguration of a dedicated sports field and additional classrooms." },
              { year: "2007–08", title: "Modernization", desc: "Integration of computer labs and modern teaching aids into the curriculum." },
              { year: "2008–09", title: "Silver Jubilee", desc: "Celebrating 25 years of educational excellence and community impact." },
              { year: "2011", title: "CBSE Pattern Adoption", desc: "Transitioned to the CBSE curriculum pattern to elevate academic standards." },
              { year: "2014–15", title: "Holistic Development Focus", desc: "Launched comprehensive arts, sports, and life skills programs." },
              { year: "Today", title: "A Legacy Continues", desc: "Proudly educating 680+ students with state-of-the-art facilities and a committed faculty." },
            ].map((milestone, idx) => (
              <MaskReveal key={idx} direction="top-down" delay={0.1 * idx}>
                <div className="relative flex flex-col items-start group">
                  {/* Dot */}
                  <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#FFD700] border-4 border-[#253B80] shadow-sm mt-1.5" />
                  
                  {/* Content */}
                  <div className="pl-8 w-full md:pr-10">
                    <span className="inline-block text-xl font-black text-white/25 tracking-tighter mb-1 select-none">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </MaskReveal>
            ))}
            </div>

            {/* Right: Title and Image */}
            <div className="order-1 lg:order-2 flex flex-col lg:sticky lg:top-32">
                <div className="mb-8 lg:mb-10 text-left">
                    <span className="text-[#FFD700] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
                        Our Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg">
                        <SplitTextReveal>
                            <span className="block">Milestones of</span>
                            <span className="block">Excellence</span>
                        </SplitTextReveal>
                    </h2>
                </div>
                
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                    <ParallaxImage
                        src="/images/our_impact.jpeg"
                        alt="School Journey"
                    />
                </div>
            </div>

        </div>
      </section>

      {/* Academics Section - Bento Grid */}
      <section className="w-full py-12 px-6 sm:px-10 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
                <span className="text-[#253B80] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                    Academics
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-3">
                    <SplitTextReveal>
                        <span className="block">Strong Foundations.</span>
                        <span className="block">Stronger Futures.</span>
                    </SplitTextReveal>
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-medium">
                    At Bharti Vidyalaya, our curriculum is designed to ignite curiosity, encourage critical thinking, and build a robust foundation for lifelong learning.
                </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px]">
                
                {/* Item 1: CBSE Pattern (Large Square) */}
                <div className="lg:col-span-2 lg:row-span-2 bg-[#253B80] rounded-3xl p-8 sm:p-10 flex flex-col justify-end relative overflow-hidden group shadow-lg">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110">
                        <BookOpen className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm mb-4 border border-white/20">
                            <BookOpen className="w-6 h-6 text-[#FFD700]" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">CBSE-Pattern Curriculum</h3>
                        <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed max-w-md">
                            A standardized, rigorously structured curriculum that prepares students for national-level excellence and competitive milestones.
                        </p>
                    </div>
                </div>

                {/* Item 2: 32 Teachers (Wide Rectangle) */}
                <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-3xl p-8 flex flex-col justify-center border border-zinc-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/20 flex items-center justify-center shrink-0">
                            <Users className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-1">32 Dedicated Teachers</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                A highly qualified faculty committed to personalized attention and nurturing the unique potential of every child.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Item 3: English Medium (Small Square) */}
                <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <Globe className="w-8 h-8 text-[#253B80]" />
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-1">English Medium</h3>
                        <p className="text-zinc-500 text-xs font-medium">Global communication skills</p>
                    </div>
                </div>


                {/* Item 5: Continuous Assessment (Small Square) */}
                <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <FileCheck className="w-8 h-8 text-[#253B80]" />
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Regular Assessment</h3>
                        <p className="text-zinc-500 text-xs font-medium">Tracking holistic progress</p>
                    </div>
                </div>


                {/* Item 7: Well-Stocked Library (Wide Rectangle) */}
                <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-3xl p-8 flex flex-col justify-center border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0">
                            <Library className="w-7 h-7 text-zinc-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-1">Well-Stocked Library</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                A quiet haven of knowledge featuring thousands of books, journals, and reference materials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Item 8: Remedial Coaching (Wide Rectangle) */}
                <div className="lg:col-span-2 lg:row-span-1 bg-zinc-100/50 rounded-3xl p-8 flex items-center justify-between border border-zinc-200">
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-1">Remedial & Advanced Coaching</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
                            Extra support for those who need it, and advanced challenges for high achievers.
                        </p>
                    </div>
                    <TrendingUp className="w-10 h-10 text-[#253B80] opacity-20 hidden sm:block" />
                </div>

            </div>
        </div>
      </section>

      {/* Campus & Facilities Section */}
      <section className="w-full py-24 px-6 sm:px-10 bg-[#253B80]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
                <span className="text-[#FFD700] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
                    Campus & Facilities
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                    A Space to Learn,<br className="hidden sm:block" /> Play & Grow
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                    Spread across a lush 87,000 sq. ft. campus, Bharti Vidyalaya offers a meticulously designed environment equipped with modern amenities to nurture every aspect of a child's development.
                </p>
            </div>

            {/* Facilities Grid - 3x3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                    { title: "70,000 sq. ft. Playground", desc: "Spacious grounds for sports, physical education, and outdoor activities.", image: "/images/WhatsApp Image 2026-09-22 at 4.33.40 PM.jpeg" },
                    { title: "Kids' Library", desc: "A colorful, engaging space to foster a love for reading early on.", image: "/images/library_books_1790083950696.jpg" },
                    { title: "Activity-Based Learning", desc: "Interactive zones designed for hands-on learning and exploration.", image: "/images/homepagehero2.jpeg" },
                    { title: "Audio-Visual Teaching", desc: "Modern smart classes for an immersive educational experience.", image: "/images/WhatsApp Image 2026-09-22 at 4.33.43 PM.jpeg" },
                    { title: "Art & Craft Classes", desc: "Dedicated studios encouraging creativity and fine motor skills.", image: "/images/craft_images_1790083964058.jpg" },
                    { title: "School Transportation", desc: "Safe, reliable, and comfortable commute for peace of mind.", image: "/images/indian_school_bus_1790083977227.jpg" },
                    { title: "SMS Alerts for Parents", desc: "Real-time updates and seamless communication with parents.", image: "/images/sms_absent_alert.jpg" },
                    { title: "Clean & Hygienic Campus", desc: "A safe, sanitized, and meticulously maintained environment.", image: "/images/homepage_.jpeg" },
                    { title: "Parents & Teachers Workshops", desc: "Collaborative sessions to align on student growth and development.", image: "/images/ptm_indian_classroom.jpg" }
                ].map((facility, idx) => (
                    <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                                src={'image' in facility ? facility.image! : `https://picsum.photos/seed/${facility.seed}/600/450`}
                                alt={facility.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col gap-2 flex-1 bg-white">
                            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{facility.title}</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                {facility.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </section>

      {/* Beyond the Classroom Section */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            
            {/* Header */}
            <span className="text-[#253B80] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Beyond the Classroom
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-12">
                Learning Happens Everywhere
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-left mb-16">
                <p className="flex-1 text-base sm:text-lg text-zinc-600 leading-relaxed font-medium">
                    Education at Bharti Vidyalaya extends far beyond textbooks. We believe that true growth happens when students are encouraged to explore their passions, collaborate with peers, and step outside their comfort zones. Our diverse range of extracurricular programs ensures that every child finds their unique spark.
                </p>
                <p className="flex-1 text-base sm:text-lg text-zinc-600 leading-relaxed font-medium">
                    From the sports field to the art studio, our meticulously planned activities foster leadership, creativity, and resilience. We celebrate cultural diversity through various events and instill essential life skills, preparing our students to confidently navigate and succeed in the real world.
                </p>
            </div>

            {/* Styled Strip / CTA */}
            <div className="w-full bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-sm sm:text-base font-bold text-[#253B80]">
                    <span>Sports</span>
                    <span className="text-[#FFD700]">•</span>
                    <span>Arts</span>
                    <span className="text-[#FFD700]">•</span>
                    <span>Activities</span>
                    <span className="text-[#FFD700]">•</span>
                    <span>Celebrations</span>
                    <span className="text-[#FFD700]">•</span>
                    <span>Life Skills</span>
                </div>
                
                <Link 
                    href="/gallery" 
                    className="shrink-0 inline-flex items-center gap-2 bg-[#253B80] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors group shadow-md"
                >
                    <span>See it in action</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

        </div>
      </section>


    </div>
  );
}
