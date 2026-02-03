import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Code2 } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  leetcode: Code2,
};

const socialLinks = [
  {
    id: 1,
    platform: 'GitHub',
    icon: 'github',
    url: 'https://github.com/ZainabNisa',
    color: 'from-gray-700 to-gray-900',
    colorDark: 'dark:from-gray-600 dark:to-gray-800',
    isEmail: false,
  },
  {
    id: 2,
    platform: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/zainab-nisa-j-32b87b275/',
    color: 'from-blue-600 to-blue-800',
    colorDark: 'dark:from-blue-500 dark:to-blue-700',
    isEmail: false,
  },
  {
    id: 3,
    platform: 'LeetCode',
    icon: 'leetcode',
    url: 'https://leetcode.com/u/zainabnisa2009/',
    color: 'from-yellow-600 to-orange-600',
    colorDark: 'dark:from-yellow-500 dark:to-orange-500',
    isEmail: false,
  },
  {
    id: 4,
    platform: 'Email',
    icon: 'mail',
    url: 'zainabnisa2009@gmail.com',
    color: 'from-purple-600 to-pink-600',
    colorDark: 'dark:from-purple-500 dark:to-pink-500',
    isEmail: true,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailClick = (email: string) => {
    // Open Gmail compose with pre-filled email
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3f7e6998-a910-4434-90bb-83c3508daee9',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
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
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"
          />
          <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              Let's Connect
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any platform!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon.toLowerCase() as keyof typeof iconMap] || Mail;
                
                if (link.isEmail) {
                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => handleEmailClick(link.url)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="w-full flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-lg transition-all group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 bg-gradient-to-br ${link.color} ${link.colorDark} rounded-xl shadow-md`}
                      >
                        <Icon size={24} className="text-white" />
                      </motion.div>
                      <div className="flex-1 text-left">
                        <span className="text-lg font-semibold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                          {link.platform}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {link.url}
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="text-gray-400 dark:text-gray-600"
                      >
                        →
                      </motion.div>
                    </motion.button>
                  );
                }
                
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-lg transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 bg-gradient-to-br ${link.color} ${link.colorDark} rounded-xl shadow-md`}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.platform}
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="text-gray-400 dark:text-gray-600"
                    >
                      →
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via email directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="Tell me about your project or idea..."
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">
                    Failed to send message. Please try again or email directly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};