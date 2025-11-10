import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profilometerMain from "@/assets/profilometer-main.png";
import profilometerStylus from "@/assets/profilometer-stylus.png";

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Introduction to Profilometer
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main content */}
        <Card className="p-8 md:p-12 bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
          <div className="space-y-8">
            {/* Introduction text */}
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                A <strong className="text-primary">profilometer</strong> is a precision measuring instrument used to measure 
                the surface profile of a material to quantify its roughness. Surface roughness is a critical parameter in 
                manufacturing and engineering, affecting the functionality, wear resistance, and aesthetic quality of components.
              </p>
              
              <p>
                The <strong className="text-secondary">contact-type profilometer</strong> operates by physically tracing 
                the surface with a diamond-tipped stylus. As the stylus moves across the surface, it follows the contours 
                of the peaks and valleys, converting the vertical displacement into electrical signals that are processed 
                to generate a surface profile and calculate roughness parameters.
              </p>
            </div>

            {/* Images grid */}
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-muted/50 rounded-2xl p-4 border-2 border-primary/30">
                    <img 
                      src={profilometerMain} 
                      alt="Contact Profilometer PGS 100" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground font-medium">
                  Contact Profilometer (PGS 100)
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-muted/50 rounded-2xl p-4 border-2 border-secondary/30">
                    <img 
                      src={profilometerStylus} 
                      alt="Diamond-tipped stylus mechanism" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground font-medium">
                  Diamond-tipped Stylus Mechanism
                </p>
              </div>
            </div>

            {/* Stylus information */}
            <Card className="p-6 bg-primary/5 border-primary/30">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                The Stylus: Heart of the Profilometer
              </h3>
              <div className="space-y-3 text-foreground/90">
                <p>
                  The <strong>stylus</strong> is the most critical component of a contact profilometer. It consists of:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Diamond tip:</strong> Extremely hard and wear-resistant, with a precisely controlled radius 
                    (typically 2-10 μm) to trace even the finest surface features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Transducer:</strong> Converts the vertical movement of the stylus into electrical signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Precise mechanics:</strong> Ensures consistent contact force and accurate tracking of surface irregularities</span>
                  </li>
                </ul>
                <p className="mt-4">
                  The stylus must maintain a constant, light contact force to avoid damaging the surface while ensuring 
                  accurate measurements. Modern profilometers can measure roughness values down to nanometer scale.
                </p>
              </div>
            </Card>

            {/* Key parameters */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-secondary/5 border-secondary/30">
                <h4 className="text-lg font-bold text-secondary mb-3">Ra - Arithmetic Average</h4>
                <p className="text-foreground/90">
                  The arithmetic average of the absolute values of the profile deviations from the mean line. 
                  Most commonly used roughness parameter.
                </p>
              </Card>
              <Card className="p-6 bg-accent/5 border-accent/30">
                <h4 className="text-lg font-bold text-accent mb-3">Rz - Maximum Height</h4>
                <p className="text-foreground/90">
                  The vertical distance between the highest peak and the lowest valley within the evaluation length.
                </p>
              </Card>
            </div>
          </div>
        </Card>

        {/* Navigation button */}
        <div className="flex justify-center pt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Button
              onClick={() => navigate("/experiment")}
              size="lg"
              className="relative text-lg px-10 py-6 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              Start Experiment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
