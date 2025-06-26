"use client"
import React from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../Components/Hero"), { ssr: false });
import { FloatingNav } from "@/Components/ui/Floatingnavbar";
import { FaHome } from 'react-icons/fa';
const Grid = dynamic(() => import('@/Components/Grid'), { ssr: false });
const RecentProjects = dynamic(() => import('@/Components/RecentProjects'), { ssr: false });
const Experience = dynamic(() => import('@/Components/Experience'), { ssr: false });
const Approach = dynamic(() => import('@/Components/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/Components/Footer'), { ssr: false });
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-2-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home',
          link: '/',
          icon: <FaHome/>}
        ]}/>
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <Footer/>
       
      </div>
    </main>
)
}