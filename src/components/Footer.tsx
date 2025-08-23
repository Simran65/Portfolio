'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#217A6A]">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* 3-column grid */}
        <div className="grid gap-8 py-12 md:grid-cols-3">
          
          {/* Left: About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Simran Achra</h3>
            <p className="text-white opacity-80">
              Machine Learning & AI Engineer specializing in LLMs, RAG, 
              Computer Vision, and full-stack AI products.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#recommendations" className="footer-link">Recommendations</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-white opacity-80 mb-2">Karachi, Pakistan</p>
            <p className="text-white opacity-80 mb-2">simranachra76@gmail.com</p>
            <p className="text-white opacity-80">+92 313 8115692</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 w-full" />

        {/* Bottom copyright text */}
        <div className="py-6 text-center">
          <p className="text-white opacity-80">
            © {currentYear} Simran Achra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
