"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShinyText from './ShinyText';
import Theme from "./Theme";
import { useTheme } from "next-themes";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex h-16 w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-border/80 bg-card/95 px-6 backdrop-blur-xl shadow-sm">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center text-xl font-bold tracking-widest text-foreground">
          <Image 
            className="opacity-70 hover:opacity-100 transition-opacity" 
            src="/man2.png" 
            alt="logo" 
            width={60} 
            height={60} 
          />
          <ShinyText
            text="Akram Hany"
            speed={2}
            className="text-sm font-bold font-sans text-foreground"
            delay={0}
            color="currentColor"
            shineColor={resolvedTheme === "dark" ? "#FFFFFF40" : "#00000030"}
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={true}
            disabled={false}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="relative text-lg px-4 py-2 font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* BUTTONS CONTAINER */}
        <div className="flex gap-4 items-center">
          {/* CV BUTTON */}
          <button className="flex text-sm items-center gap-2 rounded-full border border-border bg-card hover:bg-card/80 px-5 py-2.5 text-foreground transition-all active:scale-95">
            <Download size={14} />
            CV
          </button>

          {/* Theme Button */}
          <Theme />
        </div>
      </nav>
    </header>
  );
}