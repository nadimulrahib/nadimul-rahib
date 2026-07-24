import React from 'react';
import { 
  Wrench, Cloud, Terminal, Globe, SquareTerminal, Database,
  Cpu, Server, Layout, ShieldCheck, Key, Code2, FileCode2,
  Lock, ArrowLeftRight, CreditCard, BellRing, PackagePlus, Phone
} from 'lucide-react';
import { 
  SiGit, SiGithub, SiPostman, SiVite, SiNpm, SiMongodb, SiDocker, 
  SiVercel, SiFirebase, SiNetlify, SiNodedotjs, SiExpress, SiPrisma, 
  SiTypescript, SiSocketdotio, SiStripe, SiPostgresql, 
  SiRedux, SiTailwindcss, SiShadcnui, SiTestinglibrary, SiFramer, 
  SiReactrouter, SiMui
} from 'react-icons/si';

const SiNodejs = SiNodedotjs;

const SKILL_CATEGORIES = [
  // নতুন ইমেজ অনুযায়ী ১ নম্বর ক্যাটাগরি (সবচেয়ে উপরে)
  {
    title: 'Backend Development',
    icon: Server,
    items: [
      { name: 'Node.js', icon: SiNodejs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Typescript', icon: SiTypescript },
      { name: 'Socket.io', icon: SiSocketdotio },
      { name: 'WebSocket', icon: ArrowLeftRight },
      { name: 'Stripe', icon: SiStripe },
      { name: 'SSLCommerz', icon: CreditCard },
      { name: 'Twilio', icon: Phone },
      { name: 'Mongoose', icon: Database },
      { name: 'REST APIs', icon: Code2 },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'JWT', icon: Lock },
      { name: 'Zod', icon: ShieldCheck },
      { name: 'Nodemailer', icon: BellRing },
      { name: 'Multer', icon: PackagePlus },
      { name: 'Redis', icon: Cpu },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ]
  },
  // নতুন ইমেজ অনুযায়ী ২ নম্বর ক্যাটাগরি
  {
    title: 'Frontend Development',
    icon: Layout,
    items: [
      { name: 'Next.js', icon: FileCode2 },
      { name: 'Redux', icon: SiRedux },
      { name: 'RTK Query', icon: SiRedux },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Shadcn', icon: SiShadcnui },
      { name: 'TanStack Query', icon: SiTestinglibrary },
      { name: 'React Hook Form', icon: ShieldCheck },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Material-UI', icon: SiMui },
      { name: 'React Router DOM', icon: SiReactrouter },
    ]
  },
  // আগের ক্যাটাগরি ৩
  {
    title: 'Development Tools',
    icon: Wrench,
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Terminal', icon: Terminal },
      { name: 'Vite', icon: SiVite },
      { name: 'npm', icon: SiNpm },
      { name: 'Cursor', icon: SquareTerminal },
    ]
  },
  // আগের ক্যাটাগরি ৪
  {
    title: 'Deployment & Testing',
    icon: Cloud,
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'VPS', icon: Globe },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Netlify', icon: SiNetlify },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-20 overflow-hidden font-sans">
      {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ গ্রিন গ্লো ওর্বস */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className=" mx-auto relative z-10 space-y-20">
        
        {/* সেকশন মেইন হেডার (ইমেজ অনুযায়ী Technical Proficiencies) */}
        <div className="flex items-center space-x-3 pb-4 border-b border-border/60">
          <Cpu className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Technical Proficiencies
          </h2>
        </div>

        {SKILL_CATEGORIES.map((category, catIdx) => {
          const CategoryIcon = category.icon;
          return (
            <div key={catIdx} className="space-y-6">
              
              {/* সাব-ক্যাটাগরি হেডার (যেমন: Backend Development, Frontend Development) */}
              <div className="flex items-center space-x-3 pb-2 border-b border-border/40 w-fit更新">
                <CategoryIcon className="w-5 h-5 text-muted-foreground/80" />
                <h3 className="text-lg font-bold tracking-tight text-foreground/90">
                  {category.title}
                </h3>
              </div>

              {/* রেসপন্সিভ এবং গ্রিড লেআউট (সব কার্ডের সাইজ সবসময় সমান থাকবে) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-stretch">
                {category.items.map((item, itemIdx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div 
                      key={itemIdx}
                      className="group relative flex items-center gap-3 p-4 bg-card/40 backdrop-blur-xl rounded-xl border border-border/60 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[72px]"
                    >
                      {/* ইমেজের মতো ডান কোণায় ইন্ডিকেটর ডট (হোভার করলে গ্রিন গ্লো হবে) */}
                      <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors duration-300 shrink-0" />

                      {/* স্কিল আইকন (হোভার করলে গ্রিন হবে) */}
                      <div className="text-muted-foreground group-hover:text-emerald-500 transition-colors duration-300 shrink-0">
                        <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* স্কিল নেম */}
                      <span className="text-xs sm:text-sm font-semibold text-foreground tracking-wide truncate pr-4">
                        {item.name}
                      </span>

                      {/* ইন্টারনাল গ্রিন হোভার ব্যাকগ্রাউন্ড লাইট */}
                      <div className="absolute inset-0 bg-emerald-500/[0.01] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}