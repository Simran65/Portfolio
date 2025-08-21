'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

// Project type definition
interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

// Unified projects list
const projects: Project[] = [
  {
    title: "Generative AI-Based Image Manipulation Detection (FYP)",
    description: "Real-time web app to detect deepfake images using a pretrained SegFormer model on DEFACTO and IMD2020 datasets, processing 1K+ images with 75% IoU. Implemented grayscale mask localization and integrated model inference with React.js and Flask/FastAPI.",
    technologies: ["Python", "React.js", "Vision Transformers", "Flask/FastAPI"],
    github: "https://github.com/Simran65?tab=repositories"
  },
  {
    title: "CryptoTracker App",
    description: "Real-time mobile app to track cryptocurrency markets with price updates, favorites management, and multi-currency support (USD, INR, EUR). Built with Jetpack Compose, Room DB, DataStore, and Retrofit API integration.",
    technologies: ["Kotlin", "Retrofit", "Jetpack Compose", "Room DB", "DataStore"],
    github: "https://github.com/Simran65/SimranApp-CryptoTracker"
  },
  {
    title: "Cricket Chatbot",
    description: "Q&A bot for Pakistan cricket using LangChain RAG with ChromaDB and Mistral via Ollama, Streamlit UI; achieved ~5s query response.",
    technologies: ["Python", "LangChain", "Ollama", "Mistral", "ChromaDB", "Streamlit"],
    github: "https://github.com/Simran65?tab=repositories"
  },
  {
    title: "University Chatbot",
    description: "Chatbot for Sukkur IBA University using Gemini 1.5 Pro + LangChain for accurate information retrieval.",
    technologies: ["Python", "Gemini", "LangChain"],
    github: "https://github.com/Simran65/chatbot_using_gemini"
  },
  {
    title: "Multi-modal AI System for Disease Diagnosis",
    description: "AI system combining ML on health records and CNNs on X-rays for diagnosing heart disease, diabetes, stroke, pneumonia.",
    technologies: ["Python", "CNN", "VAE", "ML Models"],
    github: "https://github.com/Simran65/Multi-Modal-Disease-Diagnosis"
  },
  {
    title: "Facial Emotion Recognition",
    description: "Real-time system classifying 7 emotions from grayscale images using CNN + MobileNet with Streamlit UI.",
    technologies: ["CNN", "MobileNet", "Streamlit"],
    github: "https://github.com/Simran65/Facial-emotion-recognition"
  },
  {
    title: "Marketing Campaign Analysis Dashboard",
    description: "Interactive Power BI dashboard to analyze marketing spend, conversion rates, ROI.",
    technologies: ["Power BI"],
    github: "https://github.com/Simran65/BI-Dashboards-SuperRare-Sales-Tableau"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Selected work with tools used.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card w-full border-l-4"
              style={{ borderLeftColor: '#2A9D8F' }}
            >
              <div className="project-content p-6">
                <h3 className="project-title text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="project-description text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="project-tech mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag text-xs">{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:text-secondary transition-colors"
                >
                  <FaGithub className="mr-1" /> View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
