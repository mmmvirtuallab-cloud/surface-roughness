import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const ConclusionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50" />
              <CheckCircle2 className="relative w-24 h-24 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Experiment Conclusion
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main conclusion card */}
        <Card className="p-8 md:p-12 bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-primary">Summary and Key Learnings</h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Through this virtual laboratory experiment, we have successfully explored the fundamental principles 
              and practical applications of contact-type profilometry for surface roughness measurement.
            </p>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Key Takeaways:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Measurement Technique",
                    desc: "Understanding how a diamond-tipped stylus physically traces surface contours to quantify roughness parameters with micrometer precision."
                  },
                  {
                    title: "Roughness Parameters",
                    desc: "Mastered the interpretation of Ra (arithmetic average) and Rz (maximum height) values, the two most important surface characterization metrics."
                  },
                  {
                    title: "Practical Application",
                    desc: "Learned the systematic procedure for conducting surface roughness measurements, from specimen preparation to data recording."
                  },
                  {
                    title: "Surface Characterization",
                    desc: "Observed how different manufacturing processes (machining, polishing, casting) produce distinct surface textures with varying roughness values."
                  },
                  {
                    title: "Industrial Relevance",
                    desc: "Recognized the critical importance of surface roughness in engineering applications, affecting wear resistance, friction, sealing, and aesthetic quality."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6 bg-muted/30 border border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-accent mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">
                        {index + 1}
                      </span>
                      {item.title}
                    </h4>
                    <p className="ml-10 text-foreground/80">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Final Remarks</h3>
              <p>
                Surface roughness measurement by contact method using a profilometer is an essential quality control 
                technique in modern manufacturing. The experiment demonstrated that precise control and measurement 
                of surface texture directly impacts product performance, longevity, and functionality. This knowledge 
                forms a foundation for advanced metrology studies and real-world engineering applications.
              </p>
            </div>

            <p className="text-center text-xl font-semibold text-foreground/90 mt-8">
              Congratulations on successfully completing the virtual profilometer laboratory experiment! 🎓
            </p>
          </div>
        </Card>

        {/* Restart button */}
        <div className="flex justify-center pt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="relative text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              Restart Experiment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionPage;
