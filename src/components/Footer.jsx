import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-blue-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600/90 text-white flex items-center justify-center font-bold shadow">
              SV
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Somer Ville Public School</p>
              <p className="text-xs text-slate-600">Excellence in Learning</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">123 Learning Avenue, Knowledge City, 100100</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a className="hover:text-blue-700" href="#programs">Programs</a></li>
            <li><a className="hover:text-blue-700" href="#admissions">Admissions</a></li>
            <li><a className="hover:text-blue-700" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <p className="mt-2 text-sm text-slate-600">Mon-Fri: 8:00 AM - 4:00 PM</p>
          <a href="tel:+10000000000" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
            <Phone size={16} /> +1 (000) 000-0000
          </a>
        </div>
      </div>
      <div className="border-t border-blue-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Somer Ville Public School. All rights reserved.
      </div>
    </footer>
  );
}
