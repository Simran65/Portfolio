'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Jantrah Tech",
    period: "July 2025 – Present",
    location: "Remote",
    description: "Built real-time AI applications integrating LLMs, LangChain, RAG pipelines, and vector databases for semantic search. Developed and deployed full‑stack solutions (Flask backend, React.js frontend).",
    address: "Remote"
  },
  {
    title: "Data Scientist & Business Development Associate",
    company: "Innovtech Studio",
    period: "Aug 2024 – July 2025",
    location: "Part-Time",
    description: "Led project-based data science engagements from client acquisition to deployment. Contributed to data collection, preprocessing, model development, and deployment.",
    address: "Remote"
  },
  {
    title: "Machine Learning Intern",
    company: "Web3gle",
    period: "June 2024 – Aug 2024",
    location: "Onsite",
    description: "Improved model accuracy by 26% (71% → 97%) through data augmentation and fine-tuning. Built and deployed regression, decision trees, random forests, CNN, RNN models with Git + API integration.",
    address: "Onsite"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey includes roles in software engineering, web development, 
            event organization, and freelancing, showcasing my versatility and growth in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-6 border-l-4" style={{ borderLeftColor: '#2A9D8F' }}>
                  <div className="flex items-start gap-3 mb-2">
                    <FaBriefcase className="text-[#2A9D8F] mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <div className="text-[#2A9D8F] font-medium">{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                    <span className="flex items-center"><FaCalendarAlt className="mr-2 text-[#2A9D8F]" />{exp.period}</span>
                    <span className="flex items-center"><FaMapMarkerAlt className="mr-2 text-[#2A9D8F]" />{exp.location}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.split('. ').filter(Boolean).slice(0,5).map((point, i) => (
                      <li key={i}>{point.replace(/\.$/, '')}</li>
                    ))}
                  </ul>
                  {exp.address && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.address.split(',').map((tag, i) => (
                        <span key={i} className="tech-tag">{tag.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
