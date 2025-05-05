'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState("/");

  useEffect(() => {
    setSelected(pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
  }, [pathname]);

  return (
    <aside className="w-72 bg-zinc-900 text-white flex flex-col items-center py-10 px-6 border-r border-zinc-800 sticky top-0 h-screen">
      {/* Avatar */}
      <div className="mb-6">
        <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center text-4xl font-bold text-zinc-300">
          EN
        </div>
      </div>
      {/* Name & Tagline */}
      <div className="mb-8 text-center">
        <div className="text-2xl font-bold">Eric Nichols</div>
        <div className="text-zinc-400 text-sm mt-1">Full Stack Developer</div>
        <div className="text-zinc-500 text-xs mt-1">Building creative solutions</div>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-4 w-full mb-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`py-2 px-4 rounded-lg text-lg font-medium transition-colors ${
              selected === link.href
                ? "bg-zinc-800 text-[#A07CFE]"
                : "hover:bg-zinc-800 text-white"
            }`}
            onClick={() => setSelected(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* Social Links */}
      <div className="flex gap-5 mt-auto mb-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#A07CFE] transition-colors text-2xl"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#A07CFE] transition-colors text-2xl"><FaLinkedin /></a>
        <a href="mailto:your@email.com" className="hover:text-[#A07CFE] transition-colors text-2xl"><FaEnvelope /></a>
      </div>
      <div className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Eric Nichols</div>
    </aside>
  );
};

export default Sidebar; 