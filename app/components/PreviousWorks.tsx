"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Video {
  id: string
  title: string
  thumbnailUrl: string
  videoUrl: string
  type: "youtube" | "instagram"
}

const videos: Video[] = [
  {
    id: "1",
    title: "Cinematic hostel 3",
    thumbnailUrl: "/thumb.png?height=200&width=300",
    videoUrl: "https://www.youtube.com/embed/r5_M3LU2dM8",
    type: "youtube",
  },
  {
    id: "2",
    title: "Murder Mystery Promotional",
    thumbnailUrl: "/muder.png?height=200&width=300",
    videoUrl: "https://www.instagram.com/reel/DApzRTVOrj2/embed",
    type: "instagram",
  },
  {
    id: "3",
    title: "Maggie Promotional",
    thumbnailUrl: "/tvc.png?height=200&width=300",
    videoUrl: "https://www.instagram.com/p/C8rajktvvQi/embed",
    type: "instagram",
  },
  {
    id: "4",
    title: "TVF Cinematic Promotional",
    thumbnailUrl: "/tvf.png?height=200&width=300",
    videoUrl: "https://www.instagram.com/p/C4SObzxv7eM/embed",
    type: "instagram",
  },
  {
    id: "5",
    title: "Utkrist Cinematic Promotional",
    thumbnailUrl: "/Utkrist.png?height=200&width=300",
    videoUrl: "https://www.instagram.com/p/DBWRxCUSp3-/embed",
    type: "instagram",
  },
  {
    id: "6",
    title: "Commercial Spot",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    videoUrl: "https://www.instagram.com/reel/C3UBhx5RNKM/embed",
    type: "instagram",
  },
]

export default function PreviousWorks() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <section
      id="previous-works"
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Previous Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnailUrl || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
            <div className="aspect-video mb-4">
              {selectedVideo.type === "youtube" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{selectedVideo.title}</h3>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

