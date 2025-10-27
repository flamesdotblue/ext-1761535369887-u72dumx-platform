import React from 'react';
import Spline from '@splinetool/react-spline';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600/90 shadow-lg shadow-blue-600/30 ring-2 ring-white/70 flex items-center justify-center text-white font-bold">
              SV
            </div>
            <div className="leading-tight">
              <p className="text-xs tracking-wide text-slate-600">Somer Ville Public School</p>
              <h1 className="text-lg font-semibold text-slate-900">Excellence in Learning</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programs" className="text-slate-700 hover:text-blue-700">Programs</a>
            <a href="#admissions" className="text-slate-700 hover:text-blue-700">Admissions</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700">
              <Phone size={16} /> Call
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Nurturing curious minds in a modern, caring environment
          </h2>
          <p className="mt-4 text-slate-700 md:text-lg">
            At Somer Ville Public School, we blend strong academics, creativity, and character-building to help every student thrive.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#admissions" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700">
              Apply for Admissions
            </a>
            <a href="#programs" className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-5 py-3 text-blue-700 hover:bg-blue-50">
              Explore Programs
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center sm:max-w-md">
            <div className="rounded-lg bg-white/80 p-3 shadow-sm">
              <p className="text-2xl font-bold text-blue-700">1:15</p>
              <p className="text-xs text-slate-600">Teacher-Student</p>
            </div>
            <div className="rounded-lg bg-white/80 p-3 shadow-sm">
              <p className="text-2xl font-bold text-blue-700">100%</p>
              <p className="text-xs text-slate-600">Smart Classrooms</p>
            </div>
            <div className="rounded-lg bg-white/80 p-3 shadow-sm">
              <p className="text-2xl font-bold text-blue-700">2000+</p>
              <p className="text-xs text-slate-600">Alumni</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="pointer-events-none rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur-sm shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop"
              alt="Students learning in a modern classroom"
              className="h-64 w-full rounded-xl object-cover sm:h-80"
            />
            <div className="mt-3 text-center text-sm text-slate-600">
              A joyful place to learn, grow, and belong.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
