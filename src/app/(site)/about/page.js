import Image from 'next/image'
import Link from 'next/link'
import "../../globals.css"

export const metadata = {
  title: 'About Us | Your Company Name',
  description: 'Learn about our mission, values, and the team behind our innovative solutions.',
  keywords: 'about us, company story, team, mission, values, experience',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Passionate about creating exceptional digital experiences that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2019, we started with a simple mission: to help businesses 
                  thrive in the digital world through innovative technology solutions. 
                  What began as a small team of passionate developers has grown into a 
                  full-service digital agency.
                </p>
                <p>
                  We believe that great technology should be accessible, user-friendly, 
                  and purpose-driven. Every project we take on is an opportunity to 
                  create something meaningful that adds real value to people's lives.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses transform their 
                  digital presence and achieve their goals through cutting-edge web 
                  applications, mobile solutions, and strategic consulting.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600 mb-4">Projects Completed</div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-gray-600 mb-4">Client Satisfaction</div>
                    <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              "To empower businesses with innovative digital solutions that drive growth, 
              enhance user experiences, and create lasting value in an ever-evolving 
              technological landscape."
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl text-white">{member.avatar}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data for the components
const values = [
  {
    icon: '🎯',
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring transparent communication and shared success.'
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
  }
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech industry, passionate about digital transformation.',
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Technical expert specializing in modern web technologies and scalable architecture.',
    avatar: '👩‍💻'
  },
  {
    name: 'Mike Chen',
    role: 'Lead Designer',
    bio: 'Creative designer focused on user experience and beautiful, functional interfaces.',
    avatar: '👨‍🎨'
  },
  {
    name: 'Emma Davis',
    role: 'Project Manager',
    bio: 'Organized professional ensuring projects are delivered on time and exceed expectations.',
    avatar: '👩‍💼'
  }
]

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '🚀' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' }
]