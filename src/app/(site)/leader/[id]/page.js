'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import "@/app/globals.css"
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

function getLeaderData(id) {
  return leaders.find((leader) => leader.id === parseInt(id));
}

export default function LeaderPage({ params }) {
  const resolvedParams = use(params); // ✅ unwrap promise properly
  const leader = getLeaderData(resolvedParams.id);

  if (!leader) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Leader Not Found</h1>
          <p className="text-gray-600 mt-2">No leader exists with ID: {resolvedParams.id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full md:w-1/3 h-80 object-cover"
          />
          <div className="p-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{leader.name}</h2>
            <p className="text-blue-600 font-medium text-xl mt-1">{leader.role}</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
