'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Sukkur IBA University",
    period: "Aug 2021 – July 2025",
    grade: "",
    location: "Sukkur, Pakistan",
    website: "https://www.iba-suk.edu.pk/"
  },
  {
    degree: "Intermediate",
    institution: "Girls Degree College, Sukkur",
    period: "Mar 2018 – Mar 2020",
    grade: "Grade: A+",
    location: "Sukkur, Pakistan",
    website: null
  }
];

const certifications = [
  { title: "Generative AI Training", issuer: "Pak Angels", date: "" },
  { title: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", date: "" },
  { title: "Deep Learning", issuer: "Coursera", date: "" },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my knowledge and expertise in computer science and related technologies.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subtitle mb-6">Academic Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card p-6 border-l-4" style={{ borderLeftColor: '#2A9D8F' }}>
                  <div className="flex items-start">
                    <div className="bg-[#2A9D8F]/10 p-3 rounded-full mr-4">
                      <FaGraduationCap className="text-[#2A9D8F] text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <h5 className="text-lg text-[#2A9D8F] mb-2">{edu.institution}</h5>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.grade}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.location}</p>
                      {edu.website && (
                        <a 
                          href={edu.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-[#2A9D8F] hover:underline"
                        >
                          Visit Institution Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subtitle mb-6">Languages</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-4 border-l-4"
                style={{ borderLeftColor: '#2A9D8F' }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">Sindhi</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Native or Bilingual</span>
                </div>
                <div className="skill-bar">
                  <motion.div className="skill-progress" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1 }} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card p-4 border-l-4"
                style={{ borderLeftColor: '#2A9D8F' }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">Urdu</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Professional</span>
                </div>
                <div className="skill-bar">
                  <motion.div className="skill-progress" initial={{ width: 0 }} whileInView={{ width: "90%" }} viewport={{ once: true }} transition={{ duration: 1 }} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card p-4 border-l-4"
                style={{ borderLeftColor: '#2A9D8F' }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">English</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Professional</span>
                </div>
                <div className="skill-bar">
                  <motion.div className="skill-progress" initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ duration: 1 }} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subtitle mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card p-4 flex items-start border-l-4" style={{ borderLeftColor: '#2A9D8F' }}>
                  <div className="bg-[#F4A261]/10 p-2 rounded-full mr-3">
                    <FaMedal className="text-[#F4A261]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
