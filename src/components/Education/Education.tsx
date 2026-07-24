import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Trophy } from 'lucide-react';

const EDUCATION_DATA = [
//   {
//     institution: 'Northern University Bangladesh',
//     period: '2025 - Current',
//     degree: 'BSc',
//     department: 'Computer Science And Engineering',
//     result: 'CGPA: N/A',
//   },
  {
    institution: 'Institute of computer science and Technology (BTEB)',
    period: '2021 - 2026',
    degree: 'Diploma in Engineering',
    department: 'Computer Science and Technology',
    result: 'CGPA: 3.28',
  },
  {
    institution: 'Momarizpur High School (Cumilla Board)',
    period: '2019 - 2021',
    degree: 'Secondary School Certificate (SSC)',
    department: 'Science',
    result: 'GPA: 3.93',
  }
];

export default function Education() {
  return (
    <section className="relative w-full bg-background text-foreground py-24 px-4 sm:px-6 md:px-16 overflow-hidden font-sans">
      {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ গ্লো ওর্বস */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* সেকশন হেডার টাইটেল */}
        <div className="flex flex-col items-center text-center space-y-3 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Learning Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Educational <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Background</span>
          </h2>
        </div>

        {/* টাইমলাইন মেইন কন্টেইনার */}
        <div className="relative border-l-2 border-border/60 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[2px] md:before:bg-border/60 md:before:-translate-x-1/2 space-y-12 md:space-y-4">
          
          {EDUCATION_DATA.map((edu, idx) => {
            // জোড়-বিজোড় ইনডেক্স অনুযায়ী অল্টারনেট লেআউট তৈরি করার লজিক
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* টাইমলাইন ডট/নোড (মোবাইল এবং ডেস্কটপে পজিশন অ্যাডজাস্ট করা হয়েছে) */}
                <div className="absolute top-6 -left-[7px] md:left-1/2 w-3.5 h-3.5 bg-background border-2 border-primary rounded-full z-20 md:-translate-x-1/2 md:top-8 transition-transform duration-300 group-hover:scale-125" />

                {/* কার্ড কন্টেইনার (aspect-[4/5] স্টাইলের সাথে সামঞ্জস্য রেখে ইকুয়াল প্যাডিং দেওয়া) */}
                <div 
                  className={`w-full md:w-[calc(50%-24px)] pl-6 md:pl-0 ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <div className="group relative p-6 sm:p-8 bg-card/40 backdrop-blur-xl rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
                    
                    {/* টপ নিয়ন বর্ডার ইফেক্ট */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                    <div className={`flex flex-col space-y-3 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                      
                      {/* ইনস্টিটিউশন নেম */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                        {edu.institution}
                      </h3>

                      {/* সেশন/পিরিয়ড */}
                      <div className="flex items-center space-x-2 text-xs font-semibold text-muted-foreground bg-muted/50 border border-border/40 px-3 py-1.5 rounded-lg w-fit">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{edu.period}</span>
                      </div>

                      {/* ডিগ্রী ও কোর্স ইনফো */}
                      <div className={`flex flex-col space-y-2 pt-2 border-t border-border/40 w-full text-sm text-muted-foreground/90 ${
                        isLeft ? 'md:items-end' : 'md:items-start'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary/80 shrink-0" />
                          <span className="font-semibold text-foreground/90">{edu.degree}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary/80 shrink-0" />
                          <span>{edu.department}</span>
                        </div>
                        <div className="flex items-center gap-2 font-medium text-primary/90 mt-1">
                          <Trophy className="w-4 h-4 shrink-0" />
                          <span>{edu.result}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}