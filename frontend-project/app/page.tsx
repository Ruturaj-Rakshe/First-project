"use client"
import React from "react";
import Hero from "@/Components/Hero";
import Grid from '@/Components/Grid';
import RecentProjects from "@/Components/RecentProjects";
import Experience from '@/Components/Experience';
import Approach from '@/Components/Approach'
import Footer from '@/Components/Footer'
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-2-7xl w-full">
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