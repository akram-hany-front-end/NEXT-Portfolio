"use client";
import { Download, Moon } from "lucide-react";
import { MoonStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShinyText from './ShinyText';

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex h-16 w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center text-xl font-bold tracking-widest text-white">
          <Image className="opacity-20 transition-0.3s hover:opacity-85" src="/man2.png" alt="logo" width={60} height={60}  />
          <ShinyText

  text="Akram Hany"

  speed={2}

  className="text-sm font-bold font-sans"

  delay={0}

  color="#b5b5b3"

  shineColor="#FFFFFF40"

  spread={120}

  direction="left"

  yoyo={true}

  pauseOnHover={true}

  disabled={false}

/>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center j gap-8 md:flex">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="relative text-lg p-2 px-4 py-2 font-md text-zinc-300 transition-colors duration-300 hover:text-white/60 "
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* BUTTONS CONTAINER */}
        <div className="flex gap-4 items-center">  
            {/* CV BUTTON */}
            <button className="flex text-sm  items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 px-4 py-2 text-white transition hover:bg-white/10 ">
            <Download size={14} />
            CV
          </button>
          {/* Theme Button */}
          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10">
            <Moon size={18} />
          </button>

        </div>
      </nav>
    </header>
  );
}
