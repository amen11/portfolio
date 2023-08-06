import React from 'react'
import Image from 'next/image';
import amen from './amenpic.jpeg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is Amen !","Web Developer","Mobile Developer", "UI/UX Designer"],
        loop: true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
 <Image
      src={amen}
      alt="Picture of the author"
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
    /> 
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#f7ABBA" />
        </h1>
        
        </div>       
    </div>
  )
}

export default Hero