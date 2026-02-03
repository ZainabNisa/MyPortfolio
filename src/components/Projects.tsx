import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  demo_url?: string;
  github_url?: string;
  colors: {
    gradient: string;
    gradientDark: string;
    accent: string;
    accentDark: string;
    border: string;
    borderDark: string;
  };
}

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Gastric Cancer Detection System",
      description: "An AI-powered medical diagnostic system that classifies H&E-stained gastric histopathology images into Normal or Gastric Cancer using EfficientNet-B3. The system integrates Grad-CAM explainability to highlight critical regions influencing predictions, ensuring transparency and trust in medical decision-making.",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      tech_stack: ["Python", "TensorFlow/Keras", "FastAPI", "React.js", "OpenCV"],
      demo_url: "#",
      github_url: "#",
      colors: {
        gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/5",
        gradientDark: "from-blue-500/15 via-cyan-500/15 to-blue-500/10",
        accent: "bg-blue-500 hover:bg-blue-600",
        accentDark: "dark:bg-blue-600 dark:hover:bg-blue-700",
        border: "border-blue-300 hover:border-blue-500",
        borderDark: "dark:border-blue-700 dark:hover:border-blue-500"
      }
    },
    {
      id: 2,
      title: "Community User Management System",
      description: "A secure and scalable Spring Boot REST API for community user management, implementing JWT-based authentication and authorization. The system supports full CRUD operations with a clean layered architecture for long-term maintainability.",
      image_url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=800&fit=crop",
      tech_stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      demo_url: "#",
      github_url: "#",
      colors: {
        gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/5",
        gradientDark: "from-purple-500/15 via-pink-500/15 to-purple-500/10",
        accent: "bg-purple-500 hover:bg-purple-600",
        accentDark: "dark:bg-purple-600 dark:hover:bg-purple-700",
        border: "border-purple-300 hover:border-purple-500",
        borderDark: "dark:border-purple-700 dark:hover:border-purple-500"
      }
    },
    {
      id: 3,
      title: "BiasBuster – Fairness-Aware AI System",
      description: "A fairness-aware machine learning system that analyzes pension data to detect and mitigate algorithmic bias using ethical AI principles. The system evaluates fairness metrics and applies corrective techniques to ensure unbiased decision-making.",
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      demo_url: "#",
      github_url: "#",
      colors: {
        gradient: "from-emerald-500/10 via-teal-500/10 to-emerald-500/5",
        gradientDark: "from-emerald-500/15 via-teal-500/15 to-emerald-500/10",
        accent: "bg-emerald-500 hover:bg-emerald-600",
        accentDark: "dark:bg-emerald-600 dark:hover:bg-emerald-700",
        border: "border-emerald-300 hover:border-emerald-500",
        borderDark: "dark:border-emerald-700 dark:hover:border-emerald-500"
      }
    }
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToProject(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToProject(currentIndex + 1);
    }
  };

  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const projectWidth = container.scrollWidth / projects.length;
      container.scrollTo({
        left: projectWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container && !isDragging) {
      const scrollPosition = container.scrollLeft;
      const projectWidth = container.scrollWidth / projects.length;
      const newIndex = Math.round(scrollPosition / projectWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const getProgressColor = (index: number) => {
    const colors = [
      'bg-blue-500 dark:bg-blue-600',
      'bg-purple-500 dark:bg-purple-600',
      'bg-emerald-500 dark:bg-emerald-600'
    ];
    return colors[index] || 'bg-gray-900 dark:bg-gray-50';
  };

  return (
    <section id="projects" className="py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
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
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto mb-6"
          />
          <h2 className="text-6xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A selection of recent work
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            drag="x"
            dragConstraints={scrollContainerRef}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-shrink-0 w-full lg:w-[calc(50%-24px)] snap-center rounded-2xl p-8 bg-gradient-to-br ${project.colors.gradient} dark:${project.colors.gradientDark}`}
              >
                {/* Project Index with color */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className={`text-lg font-bold ${
                    index === 0 ? 'text-blue-500 dark:text-blue-400' :
                    index === 1 ? 'text-purple-500 dark:text-purple-400' :
                    'text-emerald-500 dark:text-emerald-400'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`h-px ${
                      index === 0 ? 'bg-blue-400 dark:bg-blue-500' :
                      index === 1 ? 'bg-purple-400 dark:bg-purple-500' :
                      'bg-emerald-400 dark:bg-emerald-500'
                    }`}
                  />
                </motion.div>

                {/* Project Image with colored overlay */}
                <motion.div
                  className="w-full mb-8 overflow-hidden relative group rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      index === 0 ? 'from-blue-900/30' :
                      index === 1 ? 'from-purple-900/30' :
                      'from-emerald-900/30'
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
                  />
                  <motion.img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-[450px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Project Content */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl font-semibold text-gray-900 dark:text-gray-50 mb-6"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Tech Stack with colored borders */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tech_stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className={`px-4 py-2 text-sm border ${project.colors.border} ${project.colors.borderDark} text-gray-700 dark:text-gray-300 rounded-full cursor-default transition-colors`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links with colored buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4 text-sm mb-6"
                  >
                    {project.demo_url && (
                      <motion.a
                        href={project.demo_url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 ${project.colors.accent} ${project.colors.accentDark} text-white font-medium rounded-lg transition-colors`}
                      >
                        <ExternalLink size={16} />
                        View Demo
                      </motion.a>
                    )}
                    {project.github_url && (
                      <motion.a
                        href={project.github_url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 border-2 ${project.colors.border} ${project.colors.borderDark} text-gray-900 dark:text-gray-50 font-medium rounded-lg transition-colors`}
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    )}
                  </motion.div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline underline-offset-4 relative"
                  >
                    <motion.span
                      animate={expandedId === project.id ? {} : { opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {expandedId === project.id ? '↑ Hide Details' : '↓ View Details'}
                    </motion.span>
                  </motion.button>

                  {/* Expanded Description */}
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          {project.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>

          {/* Progress Indicators with colors */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-3 mt-8"
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToProject(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? `w-8 ${getProgressColor(index)}`
                    : 'w-2 bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};