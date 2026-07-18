import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

 
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section
          id="about"
          className="flex h-screen items-center justify-center"
        >
          <Hero />
        </section>

        <section
                  style={{ zIndex: 1000 }}

          id="skills"
          className="  h-screen "
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="flex h-screen items-center justify-center"
        >
          Projects
        </section>

        <section
          id="contact"
          className="flex h-screen items-center justify-center"
        >
          Contact
        </section>
      </main>
    </>
  );
}