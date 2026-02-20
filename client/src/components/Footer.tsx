export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-heading">Mustafa Aabid</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Govt Teacher | JKBOSE Mentor<br />
                            Hanjiwera, Jammu & Kashmir
                        </p>
                        <p className="text-xs text-slate-400 italic">Education with dedication. Service with responsibility.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-heading">Quick Links</h4>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li><a href="#study-hub" className="hover:text-primary transition-colors">Study Hub</a></li>
                            <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#csc" className="hover:text-primary transition-colors">CSC Services</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-heading">Contact</h4>
                        <div className="space-y-2 text-slate-600 text-sm">
                            <p>📍 Hanjiwera, J&K</p>
                            <p>📞 Phone: +91 99999 99999</p>
                            <p>🕒 Hours: Mon - Sat (9 AM - 6 PM)</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
                    <p>&copy; {new Date().getFullYear()} Mustafa Aabid | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
