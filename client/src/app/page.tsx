import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <FloatingWhatsApp />

      {/* 3. Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-secondary flex items-center min-h-[85vh]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-primary leading-[1.1]">
                Empowering Students.<br />
                <span className="text-accent underline decoration-secondary decoration-8 underline-offset-4">Serving the Community.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                Govt Teacher in J&K helping Class 6–10 students under JKBOSE. Providing professional mentorship and accessible learning resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#study-hub" className="bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center">
                  🔵 Explore Study Material
                </Link>
                <Link href="#csc" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-md font-bold hover:bg-secondary transition-all flex items-center justify-center">
                  ⚪ CSC Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[500px] h-[500px] bg-secondary rounded-full flex items-center justify-center shadow-inner">
                <span className="text-[250px] drop-shadow-2xl">👨🏫</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Access Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16 lg:-mt-32">
            {[
              { icon: "📚", title: "Study Notes", desc: "Comprehensive chapter-wise notes for JKBOSE." },
              { icon: "📝", title: "PYQs", desc: "Previous year question papers with solutions." },
              { icon: "🎥", title: "Quick Lectures", desc: "Short video summaries of complex topics." },
              { icon: "🏢", title: "CSC Services", desc: "Trusted online government services in Hanjiwera." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-slate-50 card-hover flex flex-col items-center text-center">
                <span className="text-5xl mb-6">{item.icon}</span>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="section-padding bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden aspect-[4/5] flex items-center justify-center bg-secondary">
              <span className="text-[200px]">📷</span>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">Mustafa Aabid</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A dedicated Government Teacher in Jammu & Kashmir, committed to bridging the gap in quality education for students in rural areas.
              </p>
              <div className="grid gap-4">
                {[
                  "Govt Teacher in J&K Education Dept",
                  "Specialized in JKBOSE Curriculum",
                  "Committed to Community Welfare in Hanjiwera",
                  "Expert Personalized Student Guidance"
                ].map((point, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✔</span>
                    <span className="font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors shadow-md">
                Read More About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Study Hub Preview */}
      <section id="study-hub" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">📘 Study Hub – Classes 6 to 10</h2>
            <p className="text-slate-500">Access targeted resources for every class level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((cls) => (
              <div key={cls} className="bg-white border border-slate-100 p-8 rounded-2xl text-center card-hover border-b-4 border-b-primary shadow-sm hover:border-primary">
                <span className="text-primary font-black text-2xl block mb-2">{cls}</span>
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-primary underline decoration-white decoration-4 underline-offset-8">🌟 Why Choose Us?</h2>
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
      <section id="blog" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Latest Articles & Exam Guidance</h2>
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
      <section id="csc" className="section-padding bg-white border-t border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">Serving the Community Through CSC</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
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
      <section id="contact" className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Need Study Help or CSC Assistance?</h2>
          <p className="text-blue-200 text-xl font-medium">We are here to support your education and government service needs.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+919999999999" className="bg-white text-primary px-10 py-5 rounded-full font-bold flex items-center justify-center hover:bg-secondary transition-all">
              📞 Call Now
            </a>
            <a href="https://wa.me/your-number" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold flex items-center justify-center hover:scale-105 transition-all">
              💬 WhatsApp
            </a>
            <a href="#map" className="bg-transparent border-2 border-white/20 px-10 py-5 rounded-full font-bold flex items-center justify-center hover:bg-white/10 transition-all">
              📍 Visit Center
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
