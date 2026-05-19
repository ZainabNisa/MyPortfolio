import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, X, Clock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  bullets: string[];
  image_url: string;
  tech_stack: string[];
  github_url?: string;
  inProgress?: boolean;
  category: string;
  color: string;
}

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Gastric Cancer Detection System",
      shortTitle: "Gastric Cancer Detection",
      description:
        "AI-powered medical diagnostic system that classifies H&E-stained gastric histopathology images into Normal or Gastric Cancer using EfficientNet-B3. Integrates Grad-CAM explainability to highlight critical regions influencing predictions.",
      bullets: [
        "Built an end-to-end image processing and classification pipeline handling 3,000+ medical images, improving data quality by 30%.",
        "Trained a TensorFlow-based deep learning model achieving 93.8% accuracy, improving early detection reliability.",
        "Deployed the model using FastAPI, achieving sub-120ms inference latency and supporting real-time predictions.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech_stack: ["Python", "TensorFlow", "FastAPI", "React", "OpenCV"],
      github_url: "https://github.com/ZainabNisa/Gastric-Cancer-Detection",
      category: "AI/ML",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      title: "Secure REST API with JWT Authentication",
      shortTitle: "Secure REST API",
      description:
        "Production-grade REST API with full CRUD operations and JWT-based authentication for user management. Secured 10+ endpoints with role-based access control using Spring Security filters and a clean layered architecture.",
      bullets: [
        "Architected a production-grade REST API with layered architecture, improving code maintainability by 40%.",
        "Implemented JWT-based authentication, securing 10+ endpoints with role-based access control.",
        "Achieved 100% API test coverage using Postman, ensuring robust and error-free endpoint performance.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tech_stack: ["Java", "Spring Boot", "Spring Security", "MySQL"],
      github_url: "https://github.com/ZainabNisa/springboot-mysql-backend",
      category: "Backend",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Explainable Multi-Agent KG-IR System for Agriculture",
      shortTitle: "KG-IR Agriculture System",
      description:
        "Multi-agent AI system combining a knowledge graph, multilingual NLP, and real-time KG visualization to deliver structured agricultural insights. Supports 3 languages and features 9 collaborative agents for high-accuracy query resolution.",
      bullets: [
        "Designed and deployed a multi-agent AI system with 9 agents, improving query resolution accuracy by 35%.",
        "Built a multilingual NLP pipeline supporting 3 languages, increasing accessibility for diverse users.",
        "Developed a scalable platform with real-time KG visualization, reducing decision-making time by 25%.",
        "Modeled a knowledge graph with 2.9K+ nodes and 8.2K+ relationships, enabling structured agricultural insights.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      tech_stack: ["Python", "Neo4j", "mBERT", "FAISS", "Qwen2.5 LLM", "React"],
      github_url: "https://github.com/ZainabNisa/Explainable-Multi-agent-knowledge-graph-for-agricultural-decision-support",
      category: "AI/ML",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "Intelligent Banking Fraud Detection System",
      shortTitle: "Banking Fraud Detection",
      description:
        "Java-based digital banking fraud detection simulation engine that processes transactions in real time, detects anomalies using rule-based concepts, and surfaces alerts through a live dashboard.",
      bullets: [
        "Developed a fraud detection engine processing 1,000+ transactions, detecting anomalies with rule-based concepts.",
        "Built a real-time dashboard, reducing fraud monitoring time by 30%.",
      ],
      image_url:
        "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop",
      tech_stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github_url:
        "https://github.com/ZainabNisa/-Java-Based-Digital-Banking-Fraud-Detection-Simulation-Engine-By-Zainab-Nisa-J",
      category: "Backend",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"
          />
          <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Exploring the intersection of design, code, and innovation
          </p>
        </motion.div>

        {/* Projects — vertical resume-style list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 90 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 
                         hover:border-transparent transition-all duration-300"
              onClick={() => setSelectedId(project.id)}
            >
              {/* Gradient border glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ margin: '-2px' }} />

              <div className="relative flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                {/* Left: image strip */}
                <div className="relative md:w-56 lg:w-72 shrink-0 h-44 md:h-auto overflow-hidden">
                  <motion.img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === project.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-55`} />
                  {/* Shine sweep */}
                  <motion.div
                    animate={{ x: hoveredId === project.id ? '200%' : '-200%' }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                  />
                </div>

                {/* Right: content */}
                <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                  {/* Top row */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 leading-snug">
                          {project.title}
                        </h3>
                        {project.inProgress && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                                           bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-700">
                            <Clock size={11} />
                            In Progress
                          </span>
                        )}
                      </div>
                      <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Bullet points — resume style */}
                    <ul className="mt-3 space-y-1.5">
                      {project.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.06 }}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color}`} />
                          <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d[\d,.%+]+[a-zA-Z%+]*|\b(?:sub-\d+ms|EfficientNet-B3|Grad-CAM|JWT|CRUD|REST)\b)/g, '<strong>$1</strong>') }} />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom row: tech + actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg 
                                     bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                                     border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.color} shadow-md hover:shadow-lg transition-shadow`}
                      >
                        Details
                        <ArrowUpRight size={14} />
                      </motion.button>

                      {project.github_url && (
                        <motion.a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 
                                     hover:border-gray-400 dark:hover:border-gray-500
                                     text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100
                                     transition-colors"
                          aria-label="View code on GitHub"
                        >
                          <Github size={17} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 80 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 80 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                {/* Modal image header */}
                <div className="relative h-64">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} mix-blend-multiply opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute top-5 right-5 p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30"
                  >
                    <X size={18} />
                  </motion.button>

                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${selectedProject.color}`}>
                          {selectedProject.category}
                        </span>
                        {selectedProject.inProgress && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400/30 text-amber-200 border border-amber-400/40">
                            <Clock size={10} /> In Progress
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Modal body */}
                <div className="p-7 max-h-[calc(90vh-256px)] overflow-y-auto space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Bullet highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                      <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${selectedProject.color}`} />
                          <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d[\d,.%+]+[a-zA-Z%+]*|\b(?:sub-\d+ms|EfficientNet-B3|Grad-CAM|JWT|CRUD|REST)\b)/g, '<strong class="text-gray-900 dark:text-gray-100">$1</strong>') }} />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                      <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tech_stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-3.5 py-1.5 rounded-xl text-sm font-medium
                                     bg-gray-100 dark:bg-gray-800
                                     text-gray-900 dark:text-gray-50
                                     border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {selectedProject.github_url && (
                    <motion.a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r ${selectedProject.color} text-white font-bold text-base shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      <Github size={20} />
                      View Source Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
