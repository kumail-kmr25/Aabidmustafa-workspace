export default function AnnouncementBar() {
    return (
        <div className="bg-primary text-white h-[40px] flex items-center justify-between px-6 text-sm font-medium z-50 relative">
            <div className="flex-1 text-center md:text-left">
                <span className="animate-pulse mr-2">📢</span>
                New Study Materials for Class 10 Uploaded | CSC Services Available in Hanjiwera
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="https://wa.me/your-number" className="flex items-center hover:text-secondary transition-colors">
                    <span className="mr-1">💬</span> WhatsApp
                </a>
                <a href="tel:+919999999999" className="hover:text-secondary transition-colors">
                    📞 +91 99999 99999
                </a>
            </div>
        </div>
    );
}
