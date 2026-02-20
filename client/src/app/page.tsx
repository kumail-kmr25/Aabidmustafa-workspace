import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 text-white pt-16">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter animate-fade-in">
            Empowering Students.<br />
            <span className="text-accent">Serving the Community.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium">
            Govt Teacher in J&K | Dedicated to JKBOSE Students (Class 6–10)<br />
            Providing Study Material, PYQs, Quick Lectures & CSC Services in Hanjiwera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="#study-hub" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
              📚 Explore Study Material
            </Link>
            <Link href="#csc" className="bg-primary border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl">
              🏢 CSC Services
            </Link>
            <Link href="#contact" className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-all shadow-xl">
              📞 Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-blue-50 flex items-center justify-center">
              <span className="text-blue-200 text-9xl">👨🏫</span>
              {/* Image would go here later */}
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Mustafa Aabid</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mustafa Aabid is a dedicated Government Teacher in Jammu & Kashmir, committed to helping students from Class 6th to 10th under the Jammu and Kashmir Board of School Education (JKBOSE).
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">What he provides:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Clear simplified study notes",
                    "Previous Year Questions (PYQs)",
                    "Quick revision lectures",
                    "Chapter-wise summaries",
                    "Exam preparation guidance",
                    "Personal Mentorship"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-slate-700">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-600 italic">
                Alongside teaching, he manages a CSC (Common Service Center) in Hanjiwera, offering essential government and online services to the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Hub Section */}
      <section id="study-hub" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">📚 Study Hub</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">For JKBOSE Students - Learn smart. Revise faster. Score higher.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((cls) => (
              <div key={cls} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:border-primary transition-all cursor-pointer">
                <span className="text-3xl mb-2">🎓</span>
                <span className="font-bold text-slate-800">{cls}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Chapter-wise Notes", icon: "📄", desc: "High-quality PDF downloads for all subjects." },
              { title: "PYQs & Important Qs", icon: "📑", desc: "Previous year papers and targeted questions." },
              { title: "Revision Lectures", icon: "🎥", desc: "Quick concept videos for last-minute prep." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              View All Study Materials
            </button>
          </div>
        </div>
      </section>

      {/* CSC Center Section */}
      <section id="csc" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl font-bold">🏢 CSC Center – Hanjiwera</h2>
              <p className="text-slate-600 leading-relaxed">
                Serving the local community with reliable and trusted government and online services. We help citizens access essential services easily and efficiently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Aadhaar Services", "PAN Card Applications",
                  "Income & Caste Certificates", "Online Form Filling",
                  "Govt Scheme Applications", "Bill Payments",
                  "Exam Form Submissions"
                ].map((service, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700 bg-slate-50 p-3 rounded-lg">
                    <span className="text-green-500 font-bold">✔</span>
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                View CSC Services
              </button>
            </div>
            <div className="order-1 md:order-2 bg-blue-900 rounded-3xl p-12 text-white flex flex-col items-center justify-center space-y-6 shadow-2xl">
              <span className="text-9xl animate-pulse">🇮🇳</span>
              <h3 className="text-2xl font-bold text-center">Digital India Service Provider</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">🌟 Why Choose Mustafa Aabid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Govt School Teaching Experience",
              "JKBOSE-Focused Study Material",
              "Simple & Easy Explanations",
              "Regular Updates",
              "Trusted Community Service",
              "Personal Guidance for Students"
            ].map((reason, i) => (
              <div key={i} className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <span className="text-accent text-2xl font-bold block pt-1">✔</span>
                <span className="text-lg font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">📞 Contact & Support</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
            <div className="space-y-2">
              <span className="text-primary text-3xl block">📍</span>
              <h4 className="font-bold">Address</h4>
              <p className="text-slate-600">Hanjiwera, Jammu & Kashmir</p>
            </div>
            <div className="space-y-2">
              <span className="text-primary text-3xl block">📱</span>
              <h4 className="font-bold">Phone</h4>
              <p className="text-slate-600">Contact for Study Help or CSC Services</p>
            </div>
            <div className="space-y-2">
              <span className="text-primary text-3xl block">🕒</span>
              <h4 className="font-bold">Hours</h4>
              <p className="text-slate-600">Available on Contact Page</p>
            </div>
          </div>
          <button className="bg-primary text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all mt-8 transform hover:-translate-y-1">
            Contact Now
          </button>
        </div>
      </section>
    </main>
  );
}
