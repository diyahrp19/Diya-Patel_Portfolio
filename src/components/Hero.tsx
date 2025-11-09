import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Diya Patel
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Information Technology Student
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
            Ahmedabad, Gujarat
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed text-foreground">
            Passionate about building efficient, user-friendly web applications using 
            <span className="text-primary font-semibold"> MERN Stack</span> and 
            <span className="text-primary font-semibold"> Django</span>
          </p>
          <p className="text-base text-muted-foreground mt-3 italic">
            Building ideas into scalable web experiences
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="default" 
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="https://github.com/diyahrp19" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="https://www.linkedin.com/in/diyapatel19" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="mailto:diyahrp05@gmail.com">
              <Mail className="w-4 h-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
