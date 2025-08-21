'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-8 sm:py-12">
      {/* Background particles or pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#2A9D8F]/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#F4A261]/10 rounded-tr-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 items-center justify-items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Simran Achra
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-muted">
              Machine Learning & AI Enjineer
            </h3>
            <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-muted text-sm sm:text-base leading-relaxed px-2 sm:px-0">
              I build end-to-end AI solutions across LLMs, RAG, NLP, and Computer Vision - from data to deployment.
              I focus on turning ideas into scalable products using model 
              fine-tuning, real-time LLM apps, and full-stack integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary text-center">Contact Me</a>
            </div>
            
            <div className="flex mt-6 sm:mt-8 gap-6 sm:gap-6 justify-center">
              <a href="https://github.com/Simran65/" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl hover:text-secondary transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/simranachra/" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl hover:text-secondary transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:simranachra76@gmail.com" className="social-icon text-2xl hover:text-secondary transition-colors">
                <FaEnvelope />
              </a>
              <a href="tel:+923138115692" className="social-icon text-2xl hover:text-secondary transition-colors">
                <FaPhone />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
