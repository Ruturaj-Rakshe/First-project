"use client"
import React from 'react'
import dynamic from "next/dynamic";
const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div  id="recent-projects"  className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                <PinContainer title={title} href={link}>
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                        <div className='relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src='/bg.png' alt='bg-img'/>
                        </div>
                        <img src={img} alt={title} className='z-10 absolute bottom-0'/>
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl line-clamp-1 '>{title}</h1>
                    <p className='lg:text-xl lg:font-normal text-sm line-clamp-2'>
                        {des}    
                    </p>

                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon,index) => (
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index + 2}px)`,}}>
                                    <img src={icon} alt={icon} className='p-2'/>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>


            </div>
                </PinContainer>
            </div>

        ))}
      </div>
    </div>
  )
}

export default RecentProjects
