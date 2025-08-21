'use client';

import { motion } from 'framer-motion';

const recommendations = [
  {
    text: "I am delighted to write this recommendation letter for Simran Kumari, a dedicated and highly motivated student under my mentorship. I have had the privilege of teaching her in the field of Data Science and supervising her Final Year Project (FYP) on Generative Al-Based Image Manipulation Detection, a research-intensive topic exploring advanced deep learning techniques for forensic image analysis. Simran has consistently exhibited a strong grasp of complex concepts in data science and artificial intelligence. Her analytical thinking, problem-solving abilities, and commitment to academic excellence distinguish her from her peers. Throughout our collaboration, she has demonstrated exceptional technical proficiency, particularly in deep learning frameworks, computer vision models, and dataset management. Currently, we are working on a research paper based on her FYP, where her contributions have been instrumental. I enthusiastically support Simran Kumari's application for admission and scholarship opportunities in your esteemed Master's program. Her deep intellectual curiosity, steadfast determination, and outstanding research capabilities equip her to excel in a challenging and innovation-driven academic setting. I am confident that she will make significant contributions to your institution.",
    author: "Prof. Dr. Sher Muhammad Daudpota",
    position: "Dean, Faculty of Science & Information Technology",
    contact: "sher@iba-suk.edu.pk",
    link: "https://drive.google.com/file/d/1fs0s8P-3cN19tzQ2GmSs6I0DFsV3jEfT/view?usp=sharing"
  },
  {
    text: "I am pleased to write this letter in strong support of Ms. Simran Kumari for your esteemed program. As her instructor for Programming Fundamentals, Deep Learning, and Robotics at the Institute of Business Administration Sukkur, I have had the privilege of observing her intellectual curiosity, strong analytical skills, and unwavering dedication to learning. Simran is an exceptionally bright student who consistently demonstrates outstanding problem-solving abilities. She is not only quick to grasp complex technical concepts but also proactively explores topics beyond the curriculum, showcasing a deep and intuitive understanding of advanced subjects. Her ability to apply theoretical knowledge to practical scenarios, coupled with her enthusiasm for research and innovation, sets her apart from her peers. Beyond her technical expertise, Simran exhibits a strong work ethic, determination, and a passion for continuous growth. Her inquisitive nature and drive to excel make her a perfect candidate for this program. Given the right opportunity, I am confident that she will make significant contributions to the field and achieve remarkable success. I strongly recommend Ms. Simran Kumari for admission to your program. Please feel free to contact me if require any further information.",
    author: "Prof. Dr. Muhammad Asif Khan",
    position: "Assistant Professor, Department of Computer Science, Sukkur IBA University.",
    contact: "asif.khan@iba-suk.edu.pk",
    link: "https://drive.google.com/file/d/1tWkzZyTGmVJYOKwFppgmoeDdlMLyxviz/view?usp=sharing"
  }
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Recommendations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional endorsements from professors and mentors who have witnessed my academic journey,
            technical abilities, and professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="recommendation-card border-l-4"
              style={{ borderLeftColor: '#2A9D8F' }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-4xl text-[#2A9D8F] opacity-20">&ldquo;</div>
                <p className="recommendation-text flex-grow">{recommendation.text}</p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="recommendation-author">{recommendation.author}</p>
                  <p className="recommendation-position">{recommendation.position}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{recommendation.contact}</p>
                  {recommendation.link && (
                    <a 
                      href={recommendation.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-[#2A9D8F] hover:underline"
                    >
                      View Full Recommendation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
