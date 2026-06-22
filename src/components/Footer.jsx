import React from "react";
import { Train, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const cols = [
    { title: "Quick Links", links: ["Book Train", "PNR Status", "Train Schedule", "Live Train Status", "Refund Status"] },
    { title: "Information", links: ["About Us", "Press Releases", "Press Coverage", "News & Updates", "Privacy Policy"] },
    { title: "Services", links: ["Tatkal Booking", "Tour Packages", "Lounge", "Retiring Rooms", "Catering"] },
    { title: "Help & Support", links: ["FAQ", "Contact Us", "User Guide", "Refund Rules", "Terms of Service"] },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl btn-primary-grad flex items-center justify-center">
                <Train className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-display font-extrabold text-lg">RailGo</div>
                <div className="text-[10px] tracking-widest uppercase text-slate-400">Indian Railways</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Redesigned IRCTC experience — book trains, buses, flights and hotels with a delightful interface, powered by the largest rail network in the world.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-400" /> 139 / 14646</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-400" /> care@railgo.in</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /> IRCA Building, State Entry Road, New Delhi 110055</div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{c.title}</h4>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-orange-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2025 RailGo · A redesigned IRCTC concept. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
