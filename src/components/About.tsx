import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Passionate developer focused on creating impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="text-center border-2">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Education</h3>
              <p className="text-sm text-muted-foreground">
                Information Technology Student At LJ University
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Ahmedabad, Gujarat
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 sm:col-span-2 md:col-span-1">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                Specialization
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Development, Python Programming, Django
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed mb-4 text-sm sm:text-base">
              My expertise lies in building scalable and efficient web
              applications using modern technologies like the MERN Stack
              (MongoDB, Express.js, React.js, Node.js) and Django.
            </p>
            <p className="text-foreground leading-relaxed text-sm sm:text-base">
              I believe in writing clean, maintainable code and creating user
              experiences that are both functional and intuitive. Currently, I'm
              focused on expanding my knowledge and skills in full-stack web
              development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
