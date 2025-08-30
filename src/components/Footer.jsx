import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 px-6 border-t border-dark-200/20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-light-200 mb-2">
          © {new Date().getFullYear()} Priyanka Gaikwad. All rights reserved.
        </p>
        <p className="text-light-300 text-sm">
          Built with <span className="text-accent">❤️</span> using React & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;