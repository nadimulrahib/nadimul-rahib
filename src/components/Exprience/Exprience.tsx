import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'Softvence Agency (Betopia Group)',
    role: 'Webflow Developer',
    period: 'Oct 2025 - June 2026',
    points: [
      'Designed, developed, and maintained responsive websites using Webflow, ensuring cross-device compatibility and fast loading.',
      'Managed content updates, data entry, and digital asset organization with high accuracy.',
      'Collaborated with design and development teams to deliver projects on schedule.',
      'Prepared daily/weekly progress reports and communicated with clients for feedback and revisions.',
      'Handled multiple tasks simultaneously in a fast-paced environment while maintaining quality.'
    ]
  },

];

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-20  overflow-hidden font-sans">
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className=" mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-14 text-left">
          <div className="flex items-center space-x-2 text-primary">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Experience & Technical <span className="text-primary">Expertise</span>
          </h2>
        </div>

        {/* Dynamic & Uniform Responsive Grid */}
        {/* lg:grid-cols-3 এ items-stretch ব্যবহার করায় বড় স্ক্রিনে সব কার্ডের Height ও Width নিখুঁতভাবে সমান থাকবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-card rounded-xl border border-border/80 border-l-4 border-l-primary/80 shadow-xs hover:shadow-md hover:border-border transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              {/* Upper Content Section */}
              <div className="flex flex-col h-full">
                
                {/* Timeline & Period Badge */}
                <div className="flex items-center space-x-2 mb-4 text-xs font-semibold text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-md w-fit">
                  <Calendar className="w-3.5 h-3.5 text-primary/80" />
                  <span>{exp.period}</span>
                </div>

                {/* Company Name */}
                <h3 className="text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors duration-200 mb-1">
                  {exp.company}
                </h3>

                {/* Role / Designation */}
                <p className="text-sm font-medium text-primary mb-6 tracking-wide">
                  {exp.role}
                </p>

                {/* Work Responsibilities List */}
                {/* flex-1 ব্যবহারের কারণে ভেতরের লিস্টটি বাকি ফাঁকা জায়গা সমানভাবে ভাগ করে নেবে */}
                <ul className="space-y-3.5 flex-1">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-xs sm:text-sm text-muted-foreground/90 leading-relaxed group/item">
                      {/* Modern Bullet Point using Custom Arrows */}
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 mr-2 shrink-0 select-none transition-transform duration-200 group-hover/item:translate-x-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle Card Bottom Accent for Premium Feel */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-primary/5 rounded-br-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}