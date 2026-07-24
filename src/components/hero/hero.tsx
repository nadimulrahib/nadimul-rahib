import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Calendar, MapPin, Globe, Languages, MessageSquare, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-14 bg-background text-foreground flex items-center justify-center overflow-hidden">
      {/* Background Decorative Rings/Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* Left Content Column */}
        <div className="flex flex-col space-y-6 text-left lg:items-start order-2 lg:order-1">
          <div>
            <div className="text-4xl sm:text-5xl font-bold tracking-wide text-foreground font-serif italic">
              Nadimul <span className="font-sans not-italic font-normal">Rahib</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="space-y-4 max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Full Stack Developer focused on performance, security, and scalable system design.
            </p>
            <p>
              Improving my skills in system design, Redis, and performance optimization.
            </p>
          </div>

          {/* Grid Info Meta */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-border text-left">
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">nadimulrahib@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">+8801624934990</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">July 31, 2005 (Age: 21)</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">Feni, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">Bangladeshi</span>
            </div>
            <div className="flex items-center space-x-3 text-foreground/90 min-w-0">
              <Languages className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm truncate">Bangla, English</span>
            </div>
          </div>

          {/* Social Icons & Resume Button CTA */}
          <div className="flex items-center flex-wrap justify-center lg:justify-start gap-4 pt-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors border border-border">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors border border-border">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors border border-border">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 py-2.5 rounded-lg transition-all transform hover:translate-x-1 shadow-lg shadow-primary/20"
            >
              <span>Resume</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Graphic/Image Column */}
        <div className="flex items-center justify-center relative w-full order-1 lg:order-2">
          {/* Main Visual Profile Portal Circular Borders */}
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center">

            {/* Outer Abstract Ring lines matching the layout style */}
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-3 md:inset-4 border border-border rounded-full" />
            <div className="absolute inset-6 md:inset-8 border border-primary/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

            {/* Profile Frame Portal Container */}
            <div className="absolute inset-9 md:inset-12 rounded-full overflow-hidden border-2 border-primary/40 bg-linear-to-b from-card to-background flex items-end justify-center shadow-2xl">
              {/* Profile Image Asset Placeholder */}
              <div className="relative w-full h-[110%] md:h-[107%] top-6">
                <Image
                  src="/images/nadimulrahib.png"
                  alt="Nadimul Rahib Profile Image"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top scale-105"
                />
              </div>
            </div>

            {/* Badge: Experience Count Floating Element */}
            <div className="absolute top-4 right-1 sm:top-10 sm:right-0 md:top-16 md:right-4 bg-card/90 backdrop-blur-md border border-border rounded-full p-2.5 sm:p-3 flex items-center space-x-2 shadow-xl">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                1
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold leading-tight whitespace-nowrap">Year of</span>
                <span className="text-xs text-foreground font-medium leading-tight whitespace-nowrap">Experience</span>
              </div>
            </div>

            {/* Badge: Current Employment Floating Element */}
            {/* <div className="absolute bottom-16 left-2 md:left-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-1.5 flex items-center space-x-2 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Currently At <span className="text-primary font-semibold">Shakil Edu Group</span>
              </span>
            </div> */}

          </div>
        </div>

      </div>
    </section>
  );
}