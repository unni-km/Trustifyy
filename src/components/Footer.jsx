import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 text-white py-6 mt-12">
      <motion.p
        className="text-center text-sm font-medium"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} My Insurance Co. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;
