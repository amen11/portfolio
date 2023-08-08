/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
}

function ContactMe({}: Props) {
 const {
   register,
   handleSubmit,
 } = useForm<Inputs>();
 const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:akorchane11@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}. ${FormData.message}`
 };

  return (
    <div className="h-screen relative flex flex-col text-center max-w-7xl px-5 md:px-10 justify-center md:justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:static  md:top-auto md:mb-5">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-20 md:mt-0 md:ml-10">
        <h4 className="text-2xl font-semibold text-center md:text-left">
          I have got just what you need.{" "}
          <span className="decoration-[#F7Ab0A]/50 underline">Let's Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <PhoneIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+216 29529872</p>
          </div>
          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">akorchane11@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <MapIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">102 rue du four, 7021 Bizerte</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input 
            {...register('name')}
              placeholder="Name"
              className="ContactInput mb-2 md:mb-0"
              type="text"
            />
            <input {...register('email')} placeholder="Email" className="ContactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="ContactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="ContactInput" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 md:py-5 px-5 rounded-md text-black font-bold text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe