import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PreExperimentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Virtual Profilometer Lab
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main content cards */}
        <div className="space-y-6">
          {/* Aim */}
          <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/40">
            <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </span>
              Aim of the Experiment
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed ml-13">
              To measure the surface roughness of different workpiece samples using a contact-type profilometer 
              and determine the roughness parameters Ra (Arithmetic Average Roughness) and Rz (Maximum Height of Profile).
            </p>
          </Card>

          {/* Apparatus Required */}
          <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/40">
            <h2 className="text-2xl font-bold mb-4 text-secondary flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                2
              </span>
              Apparatus Required
            </h2>
            <ul className="space-y-3 text-lg text-foreground/90 ml-13">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Contact-type Profilometer (PGS 100 or equivalent)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Diamond-tipped stylus with specified tip radius</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Workpiece samples (machined, polished, and rough cast surfaces)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Digital display unit for roughness parameters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Reference standards for calibration</span>
              </li>
            </ul>
          </Card>

          {/* Procedure */}
          <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-accent/40">
            <h2 className="text-2xl font-bold mb-4 text-accent flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                3
              </span>
              Procedure
            </h2>
            <ol className="space-y-4 text-lg text-foreground/90 ml-13">
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">1.</span>
                <span>Clean the workpiece surface thoroughly to remove any dirt, oil, or debris.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">2.</span>
                <span>Place the workpiece securely on the profilometer's workpiece holder.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">3.</span>
                <span>Lower the stylus carefully onto the surface and perform the zeroing procedure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">4.</span>
                <span>Initiate the measurement process. The stylus will traverse across the surface.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">5.</span>
                <span>Observe the surface profile being generated on the display monitor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">6.</span>
                <span>Record the Ra and Rz values displayed after the measurement is complete.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold min-w-8">7.</span>
                <span>Repeat the procedure for different workpiece samples.</span>
              </li>
            </ol>
          </Card>
        </div>

        {/* Navigation button */}
        <div className="flex justify-center pt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Button
              onClick={() => navigate("/introduction")}
              size="lg"
              className="relative text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              INTRODUCTION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreExperimentPage;
