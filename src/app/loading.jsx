"use client";

import React from 'react';
import { ProjectGridSkeleton } from '@/components/Skeletons';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-primary selection:text-black">
      {/* Skeleton Navbar */}
      <div className="fixed top-0 w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-white/5 h-16 animate-pulse">
        <div className="max-w-7xl mx-auto h-full flex items-center px-8">
           <div className="w-32 h-6 bg-white/10 rounded"></div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 pt-40 space-y-24">
        {/* Skeleton Hero */}
        <section className="flex flex-col md:flex-row gap-16 animate-pulse">
          <div className="flex-1 space-y-8">
            <div className="w-48 h-10 bg-white/5 rounded-full"></div>
            <div className="w-full h-20 bg-white/10 rounded-xl"></div>
            <div className="w-3/4 h-6 bg-white/5 rounded"></div>
            <div className="flex gap-4">
               <div className="w-40 h-14 bg-white/10 rounded-lg"></div>
               <div className="w-40 h-14 bg-white/5 rounded-lg"></div>
            </div>
          </div>
          <div className="flex-1">
             <div className="w-full aspect-square bg-white/5 rounded-[2rem]"></div>
          </div>
        </section>

        {/* Skeleton Projects Section */}
        <section className="space-y-12">
          <div className="w-64 h-12 bg-white/10 rounded"></div>
          <ProjectGridSkeleton />
        </section>
      </main>
    </div>
  );
}
