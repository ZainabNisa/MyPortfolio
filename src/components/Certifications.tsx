import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issue_date: string;
  category: string;
  credential_url: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Java Basics',
    issuer: 'Infosys',
    issue_date: '2025-06-01',
    category: 'Programming & CS',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 2,
    title: 'Problem Solving Through Programming in C',
    issuer: 'C Programming',
    issue_date: '2025-12-01',
    category: 'Programming & CS',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 3,
    title: 'C# Basics',
    issuer: 'Microsoft / Udemy',
    issue_date: '2025-05-01',
    category: 'Programming & CS',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 4,
    title: 'What is Generative AI',
    issuer: 'Microsoft',
    issue_date: '2024-11-01',
    category: 'AI / ML',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 5,
    title: 'Prepare Data for ML APIs',
    issuer: 'Google Cloud',
    issue_date: '2024-12-01',
    category: 'AI / ML',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 6,
    title: 'CCNA',
    issuer: 'Cisco',
    issue_date: '2025-01-01',
    category: 'Networking',
    credential_url: 'YOUR_DRIVE_LINK',
  },
  {
    id: 7,
    title: 'Microsoft Learn Achievements',
    issuer: 'Microsoft',
    issue_date: '2024-2025',
    category: 'Cloud',
    credential_url: 'YOUR_DRIVE_FOLDER_LINK',
  },
];

const formatDate = (dateString: string) => {
  if (dateString.includes('-')) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
  return dateString;
};

const categoryColors: Record<string, {
  gradient: string;
  gradientDark: string;
  accent: string;
  accentDark: string;
  iconBg: string;
  iconBgDark: string;
  iconColor: string;
  iconColorDark: string;
  border: string;
  borderDark: string;
  glow: string;
}> = {
  'Programming & CS': {
    gradient: 'from-blue-500/5 via-cyan-500/5 to-blue-500/5',
    gradientDark: 'dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-blue-500/10',
    accent: 'text-blue-600',
    accentDark: 'dark:text-blue-400',
    iconBg: 'bg-blue-100',
    iconBgDark: 'dark:bg-blue-950/50',
    iconColor: 'text-blue-600',
    iconColorDark: 'dark:text-blue-400',
    border: 'border-blue-200',
    borderDark: 'dark:border-blue-800',
    glow: 'shadow-blue-500/20 dark:shadow-blue-500/10',
  },
  'AI / ML': {
    gradient: 'from-purple-500/5 via-pink-500/5 to-purple-500/5',
    gradientDark: 'dark:from-purple-500/10 dark:via-pink-500/10 dark:to-purple-500/10',
    accent: 'text-purple-600',
    accentDark: 'dark:text-purple-400',
    iconBg: 'bg-purple-100',
    iconBgDark: 'dark:bg-purple-950/50',
    iconColor: 'text-purple-600',
    iconColorDark: 'dark:text-purple-400',
    border: 'border-purple-200',
    borderDark: 'dark:border-purple-800',
    glow: 'shadow-purple-500/20 dark:shadow-purple-500/10',
  },
  'Networking': {
    gradient: 'from-emerald-500/5 via-teal-500/5 to-emerald-500/5',
    gradientDark: 'dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-emerald-500/10',
    accent: 'text-emerald-600',
    accentDark: 'dark:text-emerald-400',
    iconBg: 'bg-emerald-100',
    iconBgDark: 'dark:bg-emerald-950/50',
    iconColor: 'text-emerald-600',
    iconColorDark: 'dark:text-emerald-400',
    border: 'border-emerald-200',
    borderDark: 'dark:border-emerald-800',
    glow: 'shadow-emerald-500/20 dark:shadow-emerald-500/10',
  },
  'Cloud': {
    gradient: 'from-orange-500/5 via-amber-500/5 to-orange-500/5',
    gradientDark: 'dark:from-orange-500/10 dark:via-amber-500/10 dark:to-orange-500/10',
    accent: 'text-orange-600',
    accentDark: 'dark:text-orange-400',
    iconBg: 'bg-orange-100',
    iconBgDark: 'dark:bg-orange-950/50',
    iconColor: 'text-orange-600',
    iconColorDark: 'dark:text-orange-400',
    border: 'border-orange-200',
    borderDark: 'dark:border-orange-800',
    glow: 'shadow-orange-500/20 dark:shadow-orange-500/10',
  },
};

export const Certifications = () => {
  const grouped = certifications.reduce((acc: Record<string, Certification[]>, cert) => {
    acc[cert.category] = acc[cert.category] || [];
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <section id="certifications" className="py-32 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
          </motion.div>
          <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.keys(grouped).map((category, catIndex) => {
            const colors = categoryColors[category] || categoryColors['Programming & CS'];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 + 0.2 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <motion.div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${colors.gradient.replace('/5', '')} ${colors.gradientDark.replace('dark:', '').replace('/10', '')}`}
                    whileInView={{ scaleX: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: catIndex * 0.1 + 0.3 }}
                  />
                  <h3 className={`text-2xl font-bold ${colors.accent} ${colors.accentDark}`}>
                    {category}
                  </h3>
                  <motion.div
                    className={`flex-1 h-px bg-gradient-to-r ${colors.border} ${colors.borderDark}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: catIndex * 0.1 + 0.4 }}
                  />
                </motion.div>

                {/* Certification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {grouped[category].map((cert, certIndex) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: catIndex * 0.1 + certIndex * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`relative bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 ${colors.border} ${colors.borderDark} 
                        bg-gradient-to-br ${colors.gradient} ${colors.gradientDark}
                        hover:shadow-xl ${colors.glow} transition-all duration-300 group overflow-hidden`}
                    >
                      {/* Animated background gradient on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient.replace('/5', '/10')} ${colors.gradientDark.replace('/10', '/20')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 ${colors.iconBg} ${colors.iconBgDark} rounded-xl shadow-sm`}
                        >
                          <Award className={`w-6 h-6 ${colors.iconColor} ${colors.iconColorDark}`} />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <motion.h4
                            className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors"
                          >
                            {cert.title}
                          </motion.h4>

                          {/* Issuer */}
                          <div className={`text-base font-semibold ${colors.accent} ${colors.accentDark} mb-3`}>
                            {cert.issuer}
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{formatDate(cert.issue_date)}</span>
                          </div>

                          {/* View Certificate Link */}
                          <motion.a
                            href={cert.credential_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.accent} ${colors.accentDark} hover:underline underline-offset-4`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                          </motion.a>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <motion.div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient.replace('/5', '/20')} ${colors.gradientDark.replace('/10', '/30')} rounded-bl-full opacity-50`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: certIndex * 0.1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Count Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full text-white font-bold text-lg shadow-lg"
          >
            <Award className="w-6 h-6" />
            <span>{certifications.length} Certifications Earned</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};