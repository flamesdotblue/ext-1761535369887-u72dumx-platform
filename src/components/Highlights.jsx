import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Holistic Education',
    desc: 'Strong academics complemented by arts, sports, and life skills.'
  },
  {
    icon: Users,
    title: 'Caring Community',
    desc: 'Experienced teachers and a supportive, inclusive culture.'
  },
  {
    icon: BookOpen,
    title: 'Future-Ready',
    desc: 'STEM labs, digital literacy, and project-based learning.'
  }
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-md shadow-blue-600/30">
              <item.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
