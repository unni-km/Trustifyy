import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12 border-t border-gray-700">
      <motion.p
        className="text-center text-sm font-medium"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} <span className="text-red-400">My Insurance Co.</span> All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;
