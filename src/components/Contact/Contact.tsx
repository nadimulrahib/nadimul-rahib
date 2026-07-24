'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin,MessageSquare, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // ব্যাকএন্ড নোডমেইলার এপিআই রাউটে ডেটা পাঠানো হচ্ছে
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="relative w-full bg-background text-foreground py-24 overflow-hidden font-sans">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className=" mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-2xl leading-tight">
            Let&apos;s talk on something <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">great together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 bg-card/40 backdrop-blur-xl rounded-3xl border border-border/60 shadow-xl relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* বাম পাশ: ইনফরমেশন */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Contact Information</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                Feel free to reach out for collaborations, job opportunities, or just to say hello!
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 text-foreground/90 group w-fit">
                  <div className="p-2.5 bg-muted rounded-xl border border-border/40 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium truncate">nadimulrahib38@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-foreground/90 group w-fit">
                  <div className="p-2.5 bg-muted rounded-xl border border-border/40 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">+8801624934990</span>
                </div>
                <div className="flex items-center space-x-4 text-foreground/90 group w-fit">
                  <div className="p-2.5 bg-muted rounded-xl border border-border/40 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Feni, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {[{ icon: Github, href: '#' }, { icon: LinkedIn, href: '#' }, { icon: MessageSquare, href: '#' }].map((social, sIdx) => {
                const Icon = social.icon;
                return (
                  <a key={sIdx} href={social.href} className="p-3 bg-muted/80 hover:bg-muted border border-border/60 hover:border-primary/40 rounded-xl text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ডান পাশ: মডার্ন ফর্ম */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col space-y-5">
            <input 
              type="text" required placeholder="Full name" value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-sm focus:outline-hidden focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/60"
            />
            <input 
              type="email" required placeholder="your@email.com" value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-sm focus:outline-hidden focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/60"
            />
            <input 
              type="text" required placeholder="Subject" value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-4 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-sm focus:outline-hidden focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/60"
            />

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1.5 bg-background text-[11px] font-medium text-primary tracking-wide rounded">
                Your message
              </label>
              <textarea 
                rows={5} required value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-4 bg-muted/40 border-2 border-primary/40 rounded-xl text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground min-h-[140px]"
              />
            </div>

            <div className="space-y-3 pt-2">
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:pointer-events-none"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send className={`w-4 h-4 ${status === 'submitting' ? 'animate-pulse' : ''}`} />
              </button>
              
              {status === 'success' && (
                <div className="flex items-center justify-center space-x-2 text-emerald-500 text-sm font-medium py-1 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message sent directly to Nadimul&apos;s inbox!</span>
                </div>
              )}
              {status === 'error' && (
                <p className="text-center text-xs text-destructive font-medium">
                  Failed to send message. Please verify environment settings.
                </p>
              )}
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}