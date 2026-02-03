import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

type ExperienceType = {
  id: number;
  position: string;
  company: string;
  start_date: string;
  end_date?: string;
  location?: string;
  description: string;
  colors: {
    accent: string;
    accentLight: string;
    accentDark: string;
    gradient: string;
    gradientDark: string;
    border: string;
    iconBg: string;
    iconBgDark: string;
    iconColor: string;
    iconColorDark: string;
  };
};

const experiences: ExperienceType[] = [
  {
    id: 1,
    position: 'Java Developer Intern',
    company: 'Infosys Springboard',
    start_date: '2025-12-01',
    location: 'Remote',
    description:
      'Developing Java-based applications following enterprise coding standards. Working with Spring Boot to build scalable backend solutions and REST APIs.',
    colors: {
      accent: 'text-blue-600',
      accentLight: 'bg-blue-50',
      accentDark: 'dark:text-blue-400 dark:bg-blue-950/30',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      gradientDark: 'dark:from-blue-500/15 dark:to-cyan-500/15',
      border: 'border-blue-500',
      iconBg: 'bg-blue-50',
      iconBgDark: 'dark:bg-blue-950/50',
      iconColor: 'text-blue-600',
      iconColorDark: 'dark:text-blue-400',
    },
  },
  {
    id: 2,
    position: 'Web Developer Intern',
    company: 'Empower Guiding Center',
    start_date: '2024-02-01',
    end_date: '2024-03-01',
    description:
      'Developed a responsive restaurant web application using HTML, CSS, and JavaScript, improving usability across mobile and desktop devices.',
    colors: {
      accent: 'text-purple-600',
      accentLight: 'bg-purple-50',
      accentDark: 'dark:text-purple-400 dark:bg-purple-950/30',
      gradient: 'from-purple-500/10 to-pink-500/10',
      gradientDark: 'dark:from-purple-500/15 dark:to-pink-500/15',
      border: 'border-purple-500',
      iconBg: 'bg-purple-50',
      iconBgDark: 'dark:bg-purple-950/50',
      iconColor: 'text-purple-600',
      iconColorDark: 'dark:text-purple-400',
    },
  },
];

export const Experience = () => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });

  return (
    <section
      id="experience"
      className="py-32 px-4 bg-white dark:bg-gray-900 font-inter overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
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
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional journey and growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20"
              >
                {/* Timeline dot with icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-0 top-6 w-16 h-16 rounded-full ${exp.colors.iconBg} ${exp.colors.iconBgDark} border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg`}
                >
                  <Briefcase className={`w-7 h-7 ${exp.colors.iconColor} ${exp.colors.iconColorDark}`} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br ${exp.colors.gradient} ${exp.colors.gradientDark} backdrop-blur-sm rounded-2xl p-8 border-l-4 ${exp.colors.border} dark:${exp.colors.border} shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-gray-800/50`}
                >
                  {/* Position */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2"
                  >
                    {exp.position}
                  </motion.h3>

                  {/* Company */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    className={`text-lg font-semibold ${exp.colors.accent} ${exp.colors.accentDark} mb-4`}
                  >
                    {exp.company}
                  </motion.div>

                  {/* Date and Location */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="flex flex-wrap gap-4 mb-5 text-sm"
                  >
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">
                        {formatDate(exp.start_date)} –{' '}
                        {exp.end_date ? formatDate(exp.end_date) : (
                          <span className={`font-semibold ${exp.colors.accent} ${exp.colors.accentDark}`}>Present</span>
                        )}
                      </span>
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                    className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};