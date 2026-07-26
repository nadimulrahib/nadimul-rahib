"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Calendar, MapPin, Globe, Languages, MessageSquare, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa";
import { gsap } from 'gsap';

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "System Design Enthusiast",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const roleRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const ringOuterRef = useRef<HTMLDivElement | null>(null);
  const ringInnerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
        0
      )
        .fromTo(
          nameRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.1
        )
        .fromTo(
          roleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.25
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.35
        )
        .fromTo(
          metaRef.current?.children ?? [],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          0.45
        )
        .fromTo(
          socialRef.current?.children ?? [],
          { y: 15, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
          0.65
        )
        .fromTo(
          imageWrapRef.current,
          { opacity: 0, scale: 0.8, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: 'back.out(1.4)' },
          0.15
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -10, scale: 0.7 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(2)' },
          0.9
        );

      // continuous floating for the badge
      gsap.to(badgeRef.current, {
        y: '+=6',
        duration: 2.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });

      // subtle floating for the whole image
      gsap.to(imageWrapRef.current, {
        y: '+=8',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });

      // ring rotation speeds (slightly nicer than pure CSS spin, gives control)
      gsap.to(ringOuterRef.current, {
        rotate: 360,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
      gsap.to(ringInnerRef.current, {
        rotate: -360,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      // ambient glow pulse
      gsap.to(glowRef.current, {
        opacity: 0.6,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Rotating role text
  useEffect(() => {
    const interval = setInterval(() => {
      if (!roleRef.current) return;

      gsap.to(roleRef.current, {
        y: -14,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          gsap.fromTo(
            roleRef.current,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }
          );
        },
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-14 bg-background text-foreground flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Rings/Glows */}
      <div
        ref={glowRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none bg-linear-to-br from-primary/20 via-primary/10 to-transparent dark:from-primary/25 dark:via-primary/10 dark:to-transparent"
      />

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* Left Content Column */}
        <div className="flex flex-col space-y-6 text-left lg:items-start order-2 lg:order-1">
          <div>
            <div
              ref={nameRef}
              className="text-4xl sm:text-5xl font-bold tracking-wide font-serif italic bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground to-primary/70 dark:from-foreground dark:via-foreground dark:to-primary/80"
            >
              Nadimul <span className="font-sans not-italic font-normal">Rahib</span>
            </div>

            <p
              ref={roleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-1 bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/50"
            >
              {ROLES[roleIndex]}
            </p>
          </div>

          <div ref={descRef} className="space-y-4 max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Full Stack Developer focused on performance, security, and scalable system design.
            </p>
            <p>
              Improving my skills in system design, Redis, and performance optimization.
            </p>
          </div>

          {/* Grid Info Meta */}
          <div
            ref={metaRef}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-border text-left"
          >
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
            <div ref={socialRef} className="flex items-center space-x-4">
              <a
                href="https://github.com/nadimulrahib"
                className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground hover:scale-110 hover:-translate-y-0.5 transition-all border border-border"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nadimulrahib"
                className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground hover:scale-110 hover:-translate-y-0.5 transition-all border border-border"
              >
                <LinkedIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-card rounded-lg text-muted-foreground hover:text-foreground hover:scale-110 hover:-translate-y-0.5 transition-all border border-border"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-linear-to-r from-primary to-primary/80 hover:to-primary text-primary-foreground font-medium px-5 py-2.5 rounded-lg transition-all transform hover:translate-x-1 hover:shadow-primary/40 shadow-lg shadow-primary/20"
            >
              <span>Resume</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Graphic/Image Column */}
        <div className="flex items-center justify-center relative w-full order-1 lg:order-2">
          <div
            ref={imageWrapRef}
            className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center"
          >
            {/* Outer Abstract Ring lines matching the layout style */}
            <div
              ref={ringOuterRef}
              className="absolute inset-0 border border-primary/30 rounded-full"
            />
            <div className="absolute inset-3 md:inset-4 border border-border rounded-full" />
            <div
              ref={ringInnerRef}
              className="absolute inset-6 md:inset-8 border border-primary/20 rounded-full"
            />

            {/* Profile Frame Portal Container */}
            <div className="absolute inset-9 md:inset-12 rounded-full overflow-hidden border-2 border-primary/40 bg-linear-to-b from-card to-background flex items-end justify-center shadow-2xl shadow-primary/10">
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
            <div
              ref={badgeRef}
              className="absolute top-4 right-1 sm:top-10 sm:right-0 md:top-16 md:right-4 bg-card/90 backdrop-blur-md border border-border rounded-full p-2.5 sm:p-3 flex items-center space-x-2 shadow-xl"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                1
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold leading-tight whitespace-nowrap">
                  Year of
                </span>
                <span className="text-xs text-foreground font-medium leading-tight whitespace-nowrap">
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}