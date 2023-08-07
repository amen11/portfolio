/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] xl:w-[600px] xl:h-[450px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-10 h-10 rounded-full md:w-18 md:h-18 xl:w-[80px] xl:h-[80px] object-cover object-center"
        src="https://img.freepik.com/free-icon/mac-os_318-10374.jpg"
        alt=""
      />
      <div className="px-3 md:px-10">
        <h4 className="text-md md:text-lg font-light">Intern</h4>
        <p className="font-bold text-md md:text-lg mt-1">Fenix Future Dev</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-7 w-7 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
            alt=""
          />
          {/* Add more images here */}
        </div>
        <p className="uppercase py-2 md:py-3 text-gray-300">
          Started ... - Ended ...
        </p>
        <ul className="list-disc space-y-2 ml-4 md:ml-5 text-sm md:text-md">
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          {/* Add more li elements here */}
        </ul>
      </div>
    </article>
  );
}
 
export default ExperienceCard