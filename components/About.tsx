/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import amen from "./amenpic.jpeg";

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/295808566_2136011589890165_348670307451906775_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UMjGetmfDSsAX9UX3_m&_nc_ht=scontent.ftun15-1.fna&oh=00_AfDWPDXzBEh66rkOEzOkI0wIniiHUjzbwvyodgR5gxm-sw&oe=64D5888A"
        alt="Picture of the author"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px] mt-24"
      />
      <div className="space-y-10 px-0 md:px-10 mt-8">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7Ab0A]/50">little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          Hey there 👋, I'm Amen Allah Korchane, a forward-thinking full-stack
          web and mobile developer. My journey into the world of tech began in
          high school and has evolved through my bachelor's degree and ongoing
          engineering studies. With a passion for innovation, I've dived into
          various projects spanning web and mobile frameworks. My knack for
          UI/UX design ensures that I create not just functional, but delightful
          user experiences. Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </motion.div>
  );
}

export default About