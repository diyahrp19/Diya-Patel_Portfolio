import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Calm, unified backdrop: near-white canvas, three soft brand glows,
          and a faint dot grid that fades out toward the bottom of the page. */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float-slow absolute -top-24 left-[-8%] h-[34rem] w-[34rem] rounded-full bg-blue-400/10 blur-3xl"></div>
          <div className="animate-float-medium absolute top-1/3 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-3xl"></div>
          <div className="animate-float-fast absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-400/10 blur-3xl"></div>
        </div>
        {/* Subtle dot texture, masked so it gently fades down the page. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground) / 0.09) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 75%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 75%)",
          }}
        ></div>
      </div>

      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
