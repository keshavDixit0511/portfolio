import React from 'react'
import { Spotlight } from './UI/Spotlight'
import { TextGenerateEffect } from './UI/TextGenerateEffect'
import MagicButton from './UI/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { Vortex } from './UI/Vortex'

const Hero = () => {
    const vortexProps = {
        particleCount: 1000,
        rangeY: 100,
        baseHue: 220,
        baseSpeed: 0.0,
        rangeSpeed: 1.5,
        baseRadius: 1,
        rangeRadius: 2,
        backgroundColor: "#00000101",
      };
  return (
    <div className='pb-20 pt-36 relative'>
        <div className='absolute -top-10 w-full'>
            <Vortex {...vortexProps} containerClassName="hero-vortex">
            {/* Optional children components */}
            </Vortex>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2>
                <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Transforming Concepts into seamless User Experience'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi I&apos;m, a Next.js Developer based in AgraI&apos;</p>

                    <a href="#about">
                        <MagicButton 
                        title='Show my Work'
                        icon={<FaLocationArrow/>}
                        position='right'
                        />
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
