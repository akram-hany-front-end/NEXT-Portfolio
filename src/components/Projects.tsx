"use client";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";
import ShinyText from "./ShinyText";
import { useTheme } from "next-themes";
const projects = [
  {
    id: 1,
    src: "/pro1.png",
    name: "E-commerce",
    desc: "A modern mobile e-commerce application that provides a seamless shopping experience with product browsing, secure authentication, cart management, and online checkout",
    url: "https://next-e-commerce-rouge.vercel.app/",
  },
  {
    id: 2,
    src: "/pro2.png",
        name: "Hotel-Management-System",

    desc: "A hotel management system that streamlines room reservations, guest management, check-ins, check-outs, and booking operations through an intuitive and efficient interface.",
    url: "https://next-hotel-system.vercel.app/dashboard/home",
  },
  {
    id: 3,
    src: "/pro3.png",
        name: "Blog-Posts",

    desc: "A modern blog platform where users can create, edit, publish, and manage articles through a clean and responsive interface",
    url: "https://next-blog-omega-ruddy.vercel.app/",
  },
  {
    id: 4,
    src: "/pro4.png",
        name: "School-Management-System",

    desc: "A comprehensive school management system that simplifies student, teacher, class, and academic administration through an intuitive dashboard.",
    url: "/",
  },
  {
    id: 5,
    src: "/pro5.png",
        name: "Personal-Portfolio",

    desc: "A modern and responsive portfolio website showcasing my projects, technical skills, and professional experience with smooth animations and an intuitive user interface",
    url: "/",
  },
];
export default function Projects() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="projects"
      className="min-h-screen relative flex flex-col items-center gap-8  justify-center overflow-hidden py-20 bg-background text-foreground"
    >
      <ShinyText
        text="My Projects"
        speed={2}
        className="text-4xl font-bold font-sans text-foreground"
        delay={0}
        color="currentColor"
        shineColor={resolvedTheme === "dark" ? "#FFFFFF40" : "#00000030"}
        spread={120}
        direction="left"
        yoyo={true}
        pauseOnHover={true}
        disabled={false}
      />

      <div className="flex flex-row items-center gap-3 flex-wrap justify-center overflow-scroll">
        {projects.map((project) => (
          <SpotlightCard
            key={project.id}
            className="custom-spotlight-card  w-100 flex flex-col items-center"
            spotlightColor={
              resolvedTheme === "dark" ? "#FFFFFF40" : "#00000030"
            }
          >
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={project.src}
                alt="Project Image"
                width={300}
                height={200}
                className="rounded-xl"
              />
              <span className="text-xl font-semibold text-foreground">
                {project.name}
              </span>
              <p className="text-[14px] font-normal text-muted-foreground w-[350px] break-words line-clamp-2 overflow-scroll ">

              {project.desc}

              </p>
              <Link
                className="text-sm text-black hover:underline  self-end"
                href={project.url}
              >
                Browse Project
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
