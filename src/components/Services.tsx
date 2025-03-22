'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CodeBracketIcon, DevicePhoneMobileIcon, RocketLaunchIcon, CursorArrowRaysIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

type ServiceColor = 'blue' | 'purple' | 'green' | 'pink' | 'red' | 'orange';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: ServiceColor;
}

const services: Service[] = [
  {
    title: 'Custom Web Development',
    description: 'Tailored websites built with cutting-edge technologies to meet your specific business needs.',
    icon: CodeBracketIcon,
    color: 'blue'
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first designs that look and work perfectly across all devices and screen sizes.',
    icon: DevicePhoneMobileIcon,
    color: 'purple'
  },
  {
    title: 'Performance Optimization',
    description: 'Speed optimization and performance tuning to ensure your website loads quickly and efficiently.',
    icon: RocketLaunchIcon,
    color: 'green'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.',
    icon: CursorArrowRaysIcon,
    color: 'pink'
  },
  {
    title: 'Security Implementation',
    description: 'Robust security measures to protect your website and user data.',
    icon: ShieldCheckIcon,
    color: 'red'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your website running smoothly.',
    icon: ArrowPathIcon,
    color: 'orange'
  }
];

const colorVariants: Record<ServiceColor, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500',
  orange: 'bg-orange-500'
};

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive web development solutions for your digital success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className={`absolute inset-x-0 -top-px h-0.5 ${colorVariants[service.color]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`w-12 h-12 ${colorVariants[service.color]} rounded-lg p-3 mb-6`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <div className={`absolute inset-x-0 -bottom-px h-0.5 ${colorVariants[service.color]} transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Started
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 