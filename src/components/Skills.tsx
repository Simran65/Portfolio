'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaReact, FaBrain, FaDatabase, FaNetworkWired, FaTools, FaGitAlt, FaChartBar } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiJavascript, SiKeras, SiOpencv, SiHuggingface, SiLangchain, SiStreamlit, SiTableau, SiPostman, SiJupyter, SiKaggle, SiOpenai } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import { FaFileExcel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


const skills = [
  {
    category: "Machine Learning & AI",
    items: [
      { name: "LLMs, RAG, NLP", icon: FaBrain, level: 90 },
      { name: "Computer Vision, Image Processing", icon: FaBrain, level: 85 },
      { name: "Fine-tuning, CNN, RNN", icon: FaBrain, level: 85 },
      { name: "Transfer Learning (ResNet, EfficientNet, ViT, BERT)", icon: FaNetworkWired, level: 80 },
      { name: "Generative AI (GANs, Diffusion Models, Stable Diffusion)", icon: SiOpenai, level: 80 },
      { name: "Reinforcement Learning (Q-learning, DQN, Policy Gradients)", icon: GiArtificialIntelligence, level: 70 },
      { name: "Explainable AI (XAI: SHAP, LIME)", icon: BsGraphUp, level: 75 },
      { name: "MLOps Basics (Deployment, CI/CD, Monitoring)", icon: FaTools, level: 70 },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow, PyTorch", icon: SiTensorflow, level: 85 },
      { name: "Scikit-Learn, Transformers", icon: SiPytorch, level: 85 },
      { name: "Keras", icon: SiKeras, level: 80 },
      { name: "OpenCV", icon: SiOpencv, level: 80 },
      { name: "Hugging Face Hub", icon: SiHuggingface, level: 80 },
      { name: "LangChain", icon: SiLangchain, level: 75 },
      { name: "Streamlit", icon: SiStreamlit, level: 80 },
      { name: "Gradio", icon: FaCode, level: 75 },
    ]
  },
  {
    category: "Data Analysis & Visualization",
    items: [
      { name: "Pandas, NumPy", icon: FaDatabase, level: 90 },
      { name: "Matplotlib, Seaborn", icon: FaChartBar, level: 85 },
      { name: "Power BI", icon: FaChartBar, level: 75 },
      { name: "Tableau", icon: SiTableau, level: 75 },
      { name: "Excel (Pivot, Power Query)", icon: FaFileExcel, level: 70 },
    ]
  },
  {
    category: "Web Development & APIs",
    items: [
      { name: "Flask, FastAPI", icon: FaServer, level: 85 },
      { name: "React.js, HTML, CSS, Bootstrap, Tailwind", icon: FaReact, level: 80 },
      { name: "SQL Database", icon: FaDatabase, level: 75 },
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: FaCode, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 80 },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git/GitHub", icon: FaGitAlt, level: 85 },
      { name: "Postman", icon: SiPostman, level: 80 },
      { name: "Jupyter Notebook / Google Colab", icon: SiJupyter, level: 85 },
      { name: "Kaggle (Competitions & Datasets)", icon: SiKaggle, level: 75 },
      { name: "VS Code", icon: VscVscode, level: 90 },
    ]
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Core skills for building end-to-end AI solutions and full-stack AI applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="card p-6 border-l-4"
              style={{ borderLeftColor: '#2A9D8F' }}
            >
              <h3 className="section-subtitle">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-tag flex items-center gap-2 text-sm">
                    <skill.icon className="text-[#2A9D8F]" /> {/* ✅ render the icon here */}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
