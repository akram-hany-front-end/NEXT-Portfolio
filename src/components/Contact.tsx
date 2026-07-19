"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import ShinyText from "./ShinyText";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/akram-hany-front-end",
    label: "GitHub",
    className: "hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] dark:hover:text-white",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/201026458206?text=Hi%20Akram,%20I%20found%20your%20portfolio.",
    label: "WhatsApp",
    className: "hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:akramhanyahmed@gmail.com",
    label: "Email",
    className: "hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.45)]",
  },
  {
    icon: <FaPhoneAlt />,
    href: "tel:+201026458206",
    label: "Phone",
    className: "hover:text-sky-500 hover:border-sky-500/50 hover:bg-sky-500/10 hover:shadow-[0_0_30px_rgba(14,165,233,0.45)]",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/akram-hany-545b3b339/",
    label: "LinkedIn",
    className: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_30px_rgba(10,102,194,0.45)]",
  },
];

export default function Contact() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 bg-background text-foreground"
    >
      {/* HEADER */}
      <ShinyText
        text="My Contacts"
        speed={2}
        className="text-4xl font-bold text-foreground"
        delay={0}
        color="currentColor"
        shineColor={resolvedTheme === "dark" ? "#FFFFFF40" : "#00000030"}
        spread={120}
        direction="left"
        yoyo
        pauseOnHover
        disabled={false}
      />

      {/* ICONS */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {socials.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`
              group
              flex h-16 w-16 items-center justify-center
              rounded-full
              border border-border
              bg-card/80
              text-3xl text-muted-foreground
              backdrop-blur-md
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:scale-110
              active:scale-95
              ${item.className}
            `}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  );
}