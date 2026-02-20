import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AboutMeSection from "@/components/AboutMeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden pt-20 lg:pt-0">
      <FloatingWhatsApp />

      {/* 3. Hero Section - Refined for Side Navigation */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white to-secondary dark:from-[#0F172A] dark:to-[#1E293B] flex items-center min-h-[85vh] transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/5 dark:bg-primary/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-widest">Enrollment Open 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-100 leading-[1] font-heading tracking-tighter">
                Empowering <span className="text-primary dark:text-blue-400">Gen Z.</span><br />
                <span className="text-slate-400">Serving the People.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Professional JKBOSE Mentorship for Classes 6–10 and Trusted CSC Services in Hanjiwera.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Link href="/dashboard/materials" className="bg-primary text-secondary px-10 py-5 rounded-[24px] font-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                  Explore Resources <span className="text-xl">→</span>
                </Link>
                <Link href="#csc" className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-100 px-10 py-5 rounded-[24px] font-black hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                  CSC Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end items-center relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
              <div className="relative z-10 w-[450px] h-[450px] bg-slate-50 dark:bg-slate-800 rounded-[80px] flex items-center justify-center shadow-2xl rotate-3 border-4 border-white dark:border-slate-700 overflow-hidden">
                <span className="text-[200px] drop-shadow-2xl">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy About replaced with Brand New Rich Profile */}
      <AboutMeSection />

      {/* 6. Study Hub Preview */}
      <section id="study-hub" className="section-padding bg-white dark:bg-[#0F172A] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">📘 Study Hub – Classes 6 to 10</h2>
            <p className="text-slate-500">Access targeted resources for every class level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((cls) => (
              <div key={cls} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-8 rounded-2xl text-center card-hover border-b-4 border-b-primary shadow-sm hover:border-primary">
                <span className="text-primary dark:text-blue-400 font-black text-2xl block mb-2">{cls}</span>
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider font-bold">Core Subjects Available</p>
                <button className="text-primary font-bold text-sm border-b-2 border-primary hover:text-accent hover:border-accent transition-all">
                  View Materials
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-20 bg-secondary dark:bg-[#1E293B] transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16 text-primary dark:text-blue-400 font-heading tracking-tighter">🌟 Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: "🎓", text: "Govt Teaching Experience" },
              { icon: "📄", text: "Updated Study Materials" },
              { icon: "📊", text: "Exam-Oriented Preparation" },
              { icon: "🤝", text: "Trusted Community Service" }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <span className="text-5xl block">{item.icon}</span>
                <p className="font-bold text-primary font-heading uppercase text-sm tracking-widest">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blog Preview */}
      <section id="blog" className="section-padding bg-white dark:bg-[#0F172A] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tighter">Latest Guidance</h2>
            <button className="hidden md:block text-primary font-bold hover:text-accent transition-all border-b-2 border-primary">View All Articles</button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "JKBOSE Exam Prep Strategy", desc: "Proven tips to score 90%+ in your board exams." },
              { title: "Revision Guide for Class 10", desc: "Focus on these 5 topics before your finals." },
              { title: "Effective Study Timetable", desc: "How to balance multiple subjects weekly." }
            ].map((blog, i) => (
              <div key={i} className="group card-hover">
                <div className="aspect-video bg-soft-gray rounded-xl mb-6 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <span className="text-4xl opacity-20">📰</span>
                </div>
                <h4 className="text-xl font-bold mb-4 line-clamp-2">{blog.title}</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{blog.desc}</p>
                <button className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Read More <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CSC Services Highlight */}
      <section id="csc" className="section-padding bg-white dark:bg-[#0F172A] border-t border-slate-50 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-primary dark:text-blue-400 tracking-tighter">Serving the Community</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Our Common Service Center in Hanjiwera provides a wide range of government-to-citizen services under the Digital India mission.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Aadhaar Services", "PAN Card Applications",
                  "Income/Caste Certificates", "Govt Scheme Enrollment",
                  "Online Form Filling", "Exam Form Submissions"
                ].map((s, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-soft-gray p-4 rounded-lg">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-sm font-semibold">{s}</span>
                  </div>
                ))}
              </div>
              <button className="bg-slate-900 text-white px-10 py-4 rounded-md font-bold hover:bg-black transition-all">
                View All Services
              </button>
            </div>
            <div className="bg-secondary rounded-3xl overflow-hidden aspect-video flex items-center justify-center p-12">
              <span className="text-9xl grayscale opacity-50">🏢</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section id="contact-cta" className="py-24 bg-primary text-white text-center dark:bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">Need Study Help or CSC Assistance?</h2>
          <p className="text-blue-100 dark:text-slate-400 text-xl font-medium">We are here to support your education and government service needs.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-black flex items-center justify-center hover:bg-secondary transition-all shadow-xl">
              📩 Message Me
            </Link>
            <a href="https://wa.me/917006851315" target="_blank" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-black flex items-center justify-center hover:scale-105 transition-all shadow-xl">
              💬 WhatsApp
            </a>
            <Link href="/contact#map" className="bg-transparent border-2 border-white/20 px-10 py-5 rounded-full font-black flex items-center justify-center hover:bg-white/10 transition-all">
              📍 Visit Center
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
