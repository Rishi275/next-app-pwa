'use client'; 

import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "../../globals.css"
import Link from 'next/link';
// Animated Component Wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const FloatingOrb = ({ color, size, position }) => {
    return (
      <motion.div
        className={`absolute rounded-full ${color} ${size}`}
        initial={{ opacity: 0 }}
        animate={{ 
          y: [0, -15, 0],
          opacity: 1
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />
    );
  };
const LeadershipPage = () => {
  const leaders = [
    {
      id: 1,
      name: "John Doe",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years driving innovation and sustainable growth across global markets.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Chief Operations Officer",
      bio: "Operational excellence expert focused on building high-performance teams and scalable processes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Chief Technology Officer",
      bio: "Tech innovator specializing in AI-driven solutions and enterprise architecture.",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const principles = [
    { icon: "🌐", title: "Vision", desc: "Charting transformative futures" },
    { icon: "🧭", title: "Integrity", desc: "Ethical compass in all actions" },
    { icon: "🚀", title: "Innovation", desc: "Boundary-pushing thinking" },
    { icon: "🤝", title: "Collaboration", desc: "Synergistic partnerships" },
    { icon: "🔄", title: "Agility", desc: "Adapting to dynamic landscapes" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-indigo-50">
      {/* Animated Background Elements */}
      <FloatingOrb 
        color="bg-purple-300/30 blur-xl" 
        size="w-64 h-64" 
        position={{ x: 10, y: 15 }} 
      />
      <FloatingOrb 
        color="bg-blue-300/20 blur-xl" 
        size="w-80 h-80" 
        position={{ x: 85, y: 70 }} 
      />

      {/* Hero Section */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Leadership
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Guiding <span className="font-semibold text-indigo-600">Your Company</span> with vision, integrity, and transformative strategy
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Our <span className="text-blue-600">Leadership</span> Principles
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Meet Our <span className="text-indigo-600">Leadership</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <AnimatedSection key={leader.id} delay={0.2 * index}>
                 <Link href={`/leader/${leader.id}`}>
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="text-blue-300 font-medium mb-3">{leader.role}</p>
                    <p className="text-white/90">{leader.bio}</p>
                  </div>
                </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Develop Your Leadership</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our executive programs and unlock your leadership potential
              </p>
              <motion.button
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;