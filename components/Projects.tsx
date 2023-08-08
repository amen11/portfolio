/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 lg:mt-32 scrollbar scrollbar-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <>
            <div className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{ y: -300, opacity: 1 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://variety.com/wp-content/uploads/2021/11/Netflix-Games-Android.jpg"
                alt="netflix"
                className="w-1/2"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl lg:text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7Ab0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  Netflix Clone
                </h4>
                <p className="text-base text-center md:text-left">
                  The "Netflix Clone App" built with Next.js and Node.js is a
                  cutting-edge web application that mirrors the user experience
                  of the renowned streaming platform. Seamlessly integrating
                  frontend and backend technologies, the app offers user
                  authentication, dynamic content browsing, personalized
                  recommendations, and smooth media playback. With a responsive
                  design catering to various devices, the app brings a curated
                  selection of movies and TV shows to users' screens.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects