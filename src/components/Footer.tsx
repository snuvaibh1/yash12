import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/campione.yash#/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/watch?v=zoLP2Q0k6dE', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/919168302369', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { label: 'About', href: ' https://comfy-semolina-f3924b.netlify.app' },
    { label: 'Programs', href: ' https://comfy-semolina-f3924b.netlify.app' },
    { label: 'Results', href: ' https://comfy-semolina-f3924b.netlify.app' },
    { label: 'Contact', href: 'https://comfy-semolina-f3924b.netlify.app' },
  ];

  return (
    <footer className="bg-bg-primary border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Dumbbell className="w-8 h-8 text-primary" />
                <span className="text-2xl font-black text-text-primary">CHAMPIONS LIFESTYLE</span>
              </div>
              <p className="text-text-body text-lg leading-relaxed mb-6 max-w-md">
                Transforming bodies and minds through elite coaching. Real results, 
                proven methods, unwavering support.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-bg-tertiary rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-text-primary mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-text-muted">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>+91 91683 02369</span>
                </div>
                <div className="flex items-center space-x-3 text-text-muted">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>championlifestyle.yash@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-text-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Global Online Coaching</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-primary py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-text-muted text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © {currentYear} CHAMPIONS LIFESTYLE. All rights reserved.
            </motion.div>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 500 }}
      >
        <motion.a
          href="https://wa.me/919168302369?text=Hi! I'm interested in your elite coaching programs."
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-text-primary shadow-2xl hover:bg-green-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;