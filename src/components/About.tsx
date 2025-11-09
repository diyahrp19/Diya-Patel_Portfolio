import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground">
            Passionate developer focused on creating impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

          <Card className="text-center border-2">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                Specialization
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Development
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed mb-4">
              My expertise lies in building scalable and efficient web
              applications using modern technologies like the MERN Stack
              (MongoDB, Express.js, React.js, Node.js) and Django.
            </p>
            <p className="text-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating user
              experiences that are both functional and intuitive. Currently, I'm
              focused on expanding my knowledge and skills in full-stack web.
              development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
