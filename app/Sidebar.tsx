'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSidebarStore } from "../store/sidebarStore";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState("/");
  const { open, setOpen, toggle } = useSidebarStore();

  useEffect(() => {
    if (pathname.includes('/projects')) {
      setSelected('/projects');
    } else {
      setSelected(pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    }
    setOpen(false); // close sidebar on route change
  }, [pathname]);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded bg-zinc-900 text-white border border-zinc-800 focus:outline-none"
        onClick={toggle}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Sidebar drawer for mobile, static for md+ */}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-screen w-72 bg-zinc-900 text-white flex flex-col items-center py-10 px-6 border-r border-zinc-800
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        style={{ boxShadow: open ? "0 0 0 100vw rgba(0,0,0,0.5)" : undefined }}
      >
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
      {/* Overlay for mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 