"use client";

import React from 'react';

export const CardSkeleton = () => (
  <div className="card bg-neutral/50 border border-white/5 rounded-xl overflow-hidden shadow-xl animate-pulse">
    <div className="h-48 bg-white/5"></div>
    <div className="card-body p-8 space-y-4">
      <div className="h-6 bg-white/10 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-white/5 rounded w-full"></div>
        <div className="h-4 bg-white/5 rounded w-5/6"></div>
      </div>
      <div className="flex gap-2 py-2">
        <div className="h-5 bg-white/5 rounded-full w-16"></div>
        <div className="h-5 bg-white/5 rounded-full w-16"></div>
      </div>
      <div className="h-12 bg-white/10 rounded-lg w-full"></div>
    </div>
  </div>
);

export const ProjectGridSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {[...Array(3)].map((_, i) => <CardSkeleton key={i} />)}
  </div>
);

export const DetailSkeleton = () => (
  <div className="min-h-screen bg-[#050505] animate-pulse">
    <div className="h-[70vh] bg-white/5"></div>
    <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-16">
      <div className="md:col-span-8 space-y-12">
        <div className="h-8 bg-white/10 rounded w-1/2"></div>
        <div className="space-y-4">
          <div className="h-4 bg-white/5 rounded w-full"></div>
          <div className="h-4 bg-white/5 rounded w-full"></div>
          <div className="h-4 bg-white/5 rounded w-3/4"></div>
        </div>
      </div>
      <div className="md:col-span-4 space-y-8">
        <div className="h-64 bg-white/5 rounded-3xl"></div>
      </div>
    </div>
  </div>
);
