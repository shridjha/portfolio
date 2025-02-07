"use client"

import { motion } from "framer-motion"
import { Video, Clapperboard, MonitorPlay, Instagram, Mic, Sparkles, Film } from "lucide-react";

import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  
     {
    icon: Video,
    name: "Video Editing",
    tech: "Premiere Pro, DaVinci Resolve",
    description: "Crafting high-quality videos with seamless transitions, color grading, and motion graphics.",
    color: "text-blue-500",
  },
  {
    icon: Clapperboard,
    name: "Cinematography",
    tech: "DSLR, Mirrorless, Lighting",
    description: "Capturing cinematic visuals with professional framing, lighting, and camera techniques.",
    color: "text-green-500",
  },
  {
    icon: MonitorPlay,
    name: "YouTube Content Creation",
    tech: "Scripting, Editing, SEO",
    description: "Producing engaging and high-quality YouTube videos with optimized storytelling and editing.",
    color: "text-purple-500",
  },
  {
    icon: Instagram,
    name: "Social Media Content",
    tech: "Reels, Shorts, Trends",
    description: "Creating short-form video content optimized for social media engagement and reach.",
    color: "text-yellow-500",
  },
  {
    icon: Mic,
    name: "Sound Design",
    tech: "Adobe Audition, Foley",
    description: "Enhancing video quality with professional sound effects, mixing, and background scores.",
    color: "text-orange-500",
  },
  {
    icon: Sparkles,
    name: "Motion Graphics",
    tech: "After Effects, Animation",
    description: "Adding dynamic visual effects, animations, and typography for engaging video storytelling.",
    color: "text-pink-500",
  },
  {
    icon: Film,
    name: "Color Grading",
    tech: "DaVinci Resolve, LUTs",
    description: "Applying cinematic color tones and corrections to enhance the mood and feel of videos.",
    color: "text-red-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

