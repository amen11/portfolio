/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
  experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-fit md:w-fit xl:w-[600px] xl:h-[450px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-10 h-10 rounded-full md:w-18 md:h-18 xl:w-[80px] xl:h-[80px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-3 md:px-10">
        <h4 className="text-md md:text-lg font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-md md:text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
            key={technology._id}
            className='h-10 w-10 rounded-full'
            alt='techs'
            src={urlFor(technology?.image).url()}
             />
          ))}
          {/* Add more images here */}
        </div>
        <p className="uppercase py-2 md:py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present": new Date(experience.dateEnded).toDateString()}
        </p>
{/*         <ul className="list-disc space-y-2 ml-4 md:ml-5 text-sm md:text-md h-80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          
          {/* Add more li elements here */}
{/*         </ul> */} */}
      </div>
    </article>
  );
}
 
export default ExperienceCard
