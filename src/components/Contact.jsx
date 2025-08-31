import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-xl mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:priya937027@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    priya937027@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-xl mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a href="tel:+919370275325" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 9370275325
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-xl mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Pune, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
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