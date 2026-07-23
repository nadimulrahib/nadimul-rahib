/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import {  Phone, Mail, MapPin } from "lucide-react";
import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa";
// কুইক লিঙ্কের ডেটা অ্যারে
const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border text-muted-foreground">
      <div className="mx-auto container w-full justify-center items-center py-12">
        {/* মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* ১ম কলাম: ব্র্যান্ড লোগো এবং সোশ্যাল লিঙ্ক */}
          <div className="flex flex-col gap-6">
            <Link href="#top" className="text-3xl font-bold tracking-wide text-foreground font-serif italic">
              Nadimul   <span className=" font-sans not-italic font-normal">Rahib</span>
            </Link>
            
            {/* সোশ্যাল আইকনসমূহ */}
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
                <LinkedIn className="h-5 w-5" />
              </a>
              {/* হোয়াটসঅ্যাপ আইকনের জন্য ফোন বাটন ব্যবহার করা হয়েছে */}
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ২য় কলাম: কুইক লিঙ্কসমূহ */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-foreground uppercase">
              <span className="h-4 w-[3px] rounded-full bg-primary" /> {/* নীল ইন্ডিকেটর বার */}
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-green-500 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩য় কলাম: কন্টাক্ট ইনফো */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-foreground uppercase">
              <span className="h-4 w-[3px] rounded-full bg-primary" /> {/* নীল ইন্ডিকেটর বার */}
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground/60" />
                <span>Feni, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground/60" />
                <a href="tel:+8801624934990" className="hover:text-foreground transition-colors duration-200">
                  +8801624934990
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground/60" />
                <a href="mailto:nadimulrahib38@gmail.com" className="hover:text-foreground transition-colors duration-200">
                  nadimulrahib38@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* বটম সেকশন: কপিরাইট টেক্সট */}
        <div className="mt-12 pt-8 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground/60">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>© 2026 Nadimul Rahib. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
