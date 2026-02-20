export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Mustafa Aabid</h3>
                        <p className="text-slate-400">
                            Education with dedication. Service with responsibility.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Mustafa</a></li>
                            <li><a href="#study-hub" className="hover:text-white transition-colors">Study Hub</a></li>
                            <li><a href="#csc" className="hover:text-white transition-colors">CSC Center</a></li>
                            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Location</h4>
                        <p className="text-slate-400">
                            Hanjiwera, Jammu & Kashmir<br />
                            India
                        </p>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mustafa Aabid. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
