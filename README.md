# 🎓 JKBOSE Digital Learning Portal & CSC Services
### *Empowering the Next Generation through Digital Excellence*

Welcome to the **Mustafa Aabid Digital Learning System**, a state-of-the-art educational platform and community service hub designed to transform the learning experience for JKBOSE students (Classes 6-10) and provide seamless access to essential CSC services in Jammu & Kashmir.

---

## 🚀 Key Features

### 🌙 Modern User Experience
- **Adaptive Interface**: Transition between **Light and Dark Modes** with smooth, high-end animations powered by `next-themes`.
- **Vertical Navigation**: An elegant, persistent **Sidebar** for desktop and a sliding mobile drawer for intuitive flow.
- **Responsive Mastery**: Crafted for all devices—from mobile phones in rural areas to high-resolution desktop monitors.

### 📚 Advanced Education Engine
- **Structured Study Hub**: Access curated, chapter-wise resources (Notes, PYQs, lectures) with a single click.
- **Smart Analytics**: Admin dashboards featuring **Recharts** for real-time tracking of resource trends and subject popularity.
- **Bulk Management**: A professional drag-and-drop system for high-volume material publishing.

### 🛡️ Security & Integrity (Anti-Piracy)
- **On-the-Fly Watermarking**: Dynamic injection of student names and emails into PDF downloads using `pdf-lib`.
- **Real-Time Alerts**: Instant, low-latency notifications for students via **Socket.io** whenever new content is live.

### 🏢 Digital Community Hub (CSC)
- Integrated Common Service Center (CSC) gateway for Aadhaar, PAN, and Government schemes.
- Built-in mentorship and exam guidance from **Mustafa Aabid** (Govt Teacher & JKBOSE Mentor).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Design Tokens & Utility Classes)
- **Interactions**: [Framer Motion](https://www.framer.com/motion/) & [Lucide React](https://lucide.dev/)
- **State & Theme**: next-themes & SWR

### Backend
- **Core**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Real-Time**: [Socket.io](https://socket.io/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
- **File Processing**: [Multer](https://github.com/expressjs/multer) & [pdf-lib](https://pdf-lib.js.org/)

---

## 🏁 Getting Started

### 1. Clone the Vision
```bash
git clone https://github.com/your-username/aabidmustafa-portal.git
cd aabidmustafa-workspace
```

### 2. Configure the Engine
Add a `.env` in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
```

### 3. Launch the Platform
**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

---

## 📜 Professional Vision
Developed by **Antigravity AI** in collaboration with **Mustafa Aabid**, this portal serves as a beacon of digital transformation in education. It is not just a management system—it is a promise to provide every student in Jammu & Kashmir with the tools they need to succeed in a globalized world.

---
*Created with ❤️ for the Students of Hanjiwera and J&K.*
