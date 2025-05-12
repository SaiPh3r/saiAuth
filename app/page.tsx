'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaLock, FaRocket } from 'react-icons/fa';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to SAIAuth
      </motion.h1>

      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Seamless, Secure, and Scalable Authentication for Modern Apps
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaUserShield className="text-4xl mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold">User Security</h2>
          <p className="text-gray-400">Ensure user data protection with state-of-the-art security protocols.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaLock className="text-4xl mb-4 text-green-500" />
          <h2 className="text-xl font-semibold">Data Encryption</h2>
          <p className="text-gray-400">Advanced encryption algorithms for maximum data integrity.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaRocket className="text-4xl mb-4 text-red-500" />
          <h2 className="text-xl font-semibold">Fast Authentication</h2>
          <p className="text-gray-400">Quick and reliable authentication for your users.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
