import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  github_url?: string;
  category: string;
  color: string;
}

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "User Management REST API",
      description: "Comprehensive user management API with V1 and V2 versioning supporting 15+ endpoints. Implemented CRUD operations, soft/hard delete, email duplicate checking and user restore functionality. Configured MySQL database connection, managed dependencies and handled exceptions with custom error responses. Utilized Spring Beans for dependency injection and implemented content negotiation for flexible API responses.",
      image_url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
      tech_stack: ["Spring Boot", "MySQL", "Maven"],
      github_url: "https://github.com/ZainabNisa/InfosysSpringBoardAssignment",
      category: "Backend",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Secure REST API with JWT",
      description: "Scalable REST API with full CRUD operations and JWT-based authentication for user management. Secured 5+ API endpoints with JWT token validation using Spring Security filters. Designed clean layered architecture (Controller–Service–Repository) ensuring modularity and maintainability. Achieved 100% endpoint coverage through comprehensive testing with Postman.",
      image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tech_stack: ["Spring Boot", "JWT", "MySQL"],
      github_url: "https://github.com/ZainabNisa/springboot-mysql-backend",
      category: "Backend",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Gastric Cancer Detection System",
      description: "AI-powered medical diagnostic system that classifies H&E-stained gastric histopathology images into Normal or Gastric Cancer using EfficientNet-B3. Integrates Grad-CAM explainability to highlight critical regions influencing predictions, ensuring transparency and trust in medical decision-making.",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech_stack: ["Python", "TensorFlow", "FastAPI", "React", "OpenCV"],
      github_url: "https://github.com/ZainabNisa/Gastric-Cancer-Detection",
      category: "AI/ML",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "BiasBuster – Fairness-Aware AI",
      description: "Fairness-aware machine learning system that analyzes pension data to detect and mitigate algorithmic bias using ethical AI principles. Evaluates fairness metrics and applies corrective techniques to ensure unbiased decision-making across different demographic groups.",
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      github_url: "https://github.com/ZainabNisa/BIAS-BUSTER--AI-POWERED-JUSTICE-IN-PENSION-ALLOCATION",
      category: "AI/ML",
      color: "from-orange-500 to-red-500"
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 
                                     dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                                     relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 
                     rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Consistent with other sections */}
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`group relative overflow-hidden cursor-pointer
                  ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
                  ${index === 0 ? 'lg:row-span-2' : ''}`}
                style={{
                  borderRadius: index === 0 ? '3rem' : 
                              index === 1 ? '2rem 2rem 2rem 4rem' : 
                              index === 2 ? '4rem 2rem 2rem 2rem' : 
                              '2rem 4rem 2rem 2rem'
                }}
                onClick={() => setSelectedId(project.id)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 p-[2px] rounded-[inherit]">
                  <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${project.color} 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[2px] rounded-[inherit] bg-white dark:bg-gray-900" />
                </div>

                {/* Content Container */}
                <div className="relative h-full rounded-[inherit] overflow-hidden 
                              bg-gradient-to-br from-white to-gray-50 
                              dark:from-gray-900 dark:to-gray-800
                              border-2 border-gray-200 dark:border-gray-700">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredId === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                                   mix-blend-multiply opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Floating Category Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4 z-10"
                  >
                    <div className="px-3 py-1.5 rounded-full backdrop-blur-xl 
                                  bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
                      <span className="text-xs font-bold text-white tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Decorative Corner Shape */}
                  <motion.div
                    animate={{
                      rotate: hoveredId === project.id ? 45 : 0,
                      scale: hoveredId === project.id ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${project.color} 
                              opacity-30 blur-2xl`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <motion.div
                      animate={{
                        y: hoveredId === project.id ? -10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm text-white/80 mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech_stack.slice(0, 3).map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="px-3 py-1 text-xs font-semibold rounded-full 
                                     backdrop-blur-md bg-white/20 text-white
                                     border border-white/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.tech_stack.length > 3 && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full 
                                         backdrop-blur-md bg-white/20 text-white
                                         border border-white/30">
                            +{project.tech_stack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full
                                   bg-white text-gray-900 font-semibold text-sm
                                   hover:shadow-lg transition-shadow"
                        >
                          View Details
                          <ArrowUpRight size={16} />
                        </motion.button>

                        {project.github_url && (
                          <motion.a
                            href={project.github_url}
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 rounded-full backdrop-blur-md 
                                     bg-white/20 hover:bg-white/30 text-white
                                     border border-white/30 transition-colors"
                            aria-label="View code"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    animate={{
                      x: hoveredId === project.id ? '100%' : '-100%',
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             skew-x-12 pointer-events-none"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
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
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full 
                         max-h-[90vh] overflow-hidden shadow-2xl"
              >
                {/* Modal Header with Image */}
                <div className="relative h-80">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} 
                                 mix-blend-multiply opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 p-3 rounded-full 
                             bg-white/20 backdrop-blur-md hover:bg-white/30 
                             text-white transition-colors border border-white/30"
                  >
                    <X size={20} />
                  </motion.button>

                  {/* Modal Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1.5 rounded-full mb-3
                                  backdrop-blur-xl bg-white/20 border border-white/30">
                      <span className="text-xs font-bold text-white tracking-wider">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body - Scrollable */}
                <div className="p-8 max-h-[calc(90vh-320px)] overflow-y-auto">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-50 mb-4 
                                 uppercase tracking-wider flex items-center gap-2">
                      <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech_stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-4 py-2 rounded-xl font-medium text-sm
                                   bg-gradient-to-br from-gray-100 to-gray-50
                                   dark:from-gray-800 dark:to-gray-700
                                   text-gray-900 dark:text-gray-50
                                   border-2 border-gray-200 dark:border-gray-600
                                   hover:border-gray-300 dark:hover:border-gray-500
                                   transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  {selectedProject.github_url && (
                    <motion.a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                               bg-gradient-to-r ${selectedProject.color}
                               text-white font-bold text-lg shadow-lg
                               hover:shadow-xl transition-shadow`}
                    >
                      <Github size={24} />
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