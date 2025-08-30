import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-dark-200/50 to-dark-300/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 font-orbitron">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-primary text-xl mt-1">
                  <RiMailLine />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:priya937027@gmail.com" className="text-light-200 hover:text-primary transition-colors">
                    priya937027@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-primary text-xl mt-1">
                  <RiPhoneLine />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919370275325" className="text-light-200 hover:text-primary transition-colors">
                    +91 9370275325
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-primary text-xl mt-1">
                  <RiMapPinLine />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-light-200">Pune, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary hover:text-dark-300 transition-colors">
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary hover:text-dark-300 transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary hover:text-dark-300 transition-colors">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 font-orbitron">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-200/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark-200/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-200/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;