import React from 'react';

const programs = [
  {
    name: 'Primary (Grades 1-5)',
    desc: 'Foundational literacy, numeracy, and explorations through play and projects.',
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Middle School (Grades 6-8)',
    desc: 'Concept mastery in Math, Science, Languages with hands-on labs and clubs.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'High School (Grades 9-12)',
    desc: 'Advanced curriculum, career guidance, and competitive exam support.',
    image: 'https://images.unsplash.com/photo-1657550650283-2fba3a0123fa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIaWdoJTIwU2Nob29sJTIwJTI4R3JhZGVzJTIwOS0xMiUyOXxlbnwwfDB8fHwxNzYxNTM1NDMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Programs</h2>
          <p className="mt-2 text-slate-600">Age-appropriate curricula fostering curiosity, confidence, and competence.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="admissions" className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-lg">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Admissions Open</h3>
              <p className="text-blue-50">Apply now for the upcoming academic session. Scholarships available for meritorious students.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-blue-700 shadow-md hover:bg-blue-50">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
