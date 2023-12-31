/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
   // const projects = [1,2,3,4,5];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 lg:mt-32  scrollbar-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          
            <div key={project._id} className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center px-20 md:px-44 h-screen mt-6">
              <motion.img
                initial={{ y: -300, opacity: 1 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt="netflix"
                className="w-1/2 h-72"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl lg:text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7Ab0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  {project?.title}
                </h4>
                <div className='flex items-center space-x-2 justify-center'>
                  {project?.technologies.map((tech) => (
                    <img
                      className="h-10 w-10 rounded-full"
                      key={tech._id}
                      src={urlFor(tech?.image).url()}
                      alt="techs"
                    />
                  ))}
                </div>
                <p className="text-base text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects