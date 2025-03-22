'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Crazy Garage Website",
    description: "Official website for Crazy Garage EN - Car detailing and polishing services. A modern, responsive website built with Next.js and TailwindCSS.",
    image: "/project-crazy-garage.jpg",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    status: "In Development",
    githubUrl: "https://github.com/Apexium-Dev/crazy-garage-website",
    demoUrl: "https://apexium-dev.github.io/crazy-garage-website/en",
    stats: {
      languages: {
        TypeScript: "96.1%",
        CSS: "2.0%",
        JavaScript: "1.9%"
      }
    }
  },
  {
    title: "Personal Portfolio",
    description: "A minimalist and modern personal portfolio website showcasing development skills and projects. Built with HTML5 and CSS3 for optimal performance.",
    image: "/project-portfolio.jpg",
    technologies: ["HTML5", "CSS3", "GitHub Pages"],
    status: "Completed",
    githubUrl: "https://github.com/mahmutmft/mahmutmft.github.io",
    demoUrl: "https://mahmutmft.github.io",
    stats: {
      languages: {
        HTML: "52.3%",
        CSS: "47.7%"
      }
    }
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing our innovative web development solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full min-h-[300px] group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 ${
                      project.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'
                    } text-white text-sm font-medium rounded-full`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Language Distribution
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(project.stats.languages).map(([lang, percentage]) => (
                        <div key={lang} className="flex items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300 w-24">{lang}</span>
                          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                              style={{ width: percentage }}
                            />
                          </div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View on GitHub
                      <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Live Demo
                      <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 