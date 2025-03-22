'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4"
          >
            About <span className="text-blue-600 dark:text-blue-400">Apexium Dev</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Empowering the next generation of web developers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Who We Are
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are a passionate collective of student developers dedicated to creating exceptional web experiences. Our team combines academic excellence with practical development skills to deliver innovative solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 dark:bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Innovation First</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">We stay ahead of the curve with cutting-edge technologies and development practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 dark:bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Student-Led Excellence</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Our unique perspective as students brings fresh ideas and boundless creativity to every project.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Abstract geometric design */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff33_1px,transparent_1px),linear-gradient(150deg,#ffffff33_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-9xl font-bold opacity-20 select-none">
                  AD
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute inset-0">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-lg"
                />
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-full"
                />
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-white/20 rounded-lg rotate-45"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To bridge the gap between academic learning and professional web development, while providing exceptional digital solutions that help local businesses thrive in the modern digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 