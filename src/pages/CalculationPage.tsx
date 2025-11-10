import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import jsPDF from "jspdf";

const CalculationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-6">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">No Data Available</h2>
          <p className="mb-6">Please complete the experiment first.</p>
          <Button onClick={() => navigate("/experiment")}>Go to Experiment</Button>
        </Card>
      </div>
    );
  }

  const { ra, rz, workpiece } = data;

  const workpieceNames = {
    machined: "Machined Surface",
    polished: "Polished Surface",
    rough: "Rough Cast Surface"
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.text("SURFACE ROUGHNESS MEASUREMENT", 105, 20, { align: "center" });
    doc.text("BY CONTACT METHOD", 105, 28, { align: "center" });
    
    // Aim
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("AIM:", 20, 45);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    const aimText = "To measure the surface roughness of different workpiece samples using a contact-type profilometer and determine the roughness parameters Ra and Rz.";
    const splitAim = doc.splitTextToSize(aimText, 170);
    doc.text(splitAim, 20, 52);
    
    // Apparatus
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("APPARATUS REQUIRED:", 20, 70);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text("• Contact-type Profilometer (PGS 100)", 20, 77);
    doc.text("• Diamond-tipped stylus", 20, 84);
    doc.text("• Workpiece samples", 20, 91);
    doc.text("• Digital display unit", 20, 98);
    
    // Procedure
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("PROCEDURE:", 20, 115);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text("1. Clean the workpiece surface", 20, 122);
    doc.text("2. Place workpiece on holder", 20, 129);
    doc.text("3. Zero the stylus", 20, 136);
    doc.text("4. Initiate measurement", 20, 143);
    doc.text("5. Record Ra and Rz values", 20, 150);
    
    // Results
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("RESULTS:", 20, 167);
    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.text(`Workpiece: ${workpieceNames[workpiece]}`, 20, 175);
    
    // Calculations
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("MODEL CALCULATIONS:", 20, 190);
    
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text("Ra (Arithmetic Average Roughness):", 20, 198);
    doc.setFont(undefined, "bold");
    doc.text(`Ra = ${ra.toFixed(4)} \u00B5m`, 30, 205);
    
    doc.setFont(undefined, "normal");
    doc.text("The arithmetic average of absolute values of profile deviations", 30, 212);
    doc.text("from the mean line within the evaluation length.", 30, 218);
    
    doc.text("Rz (Maximum Height of Profile):", 20, 232);
    doc.setFont(undefined, "bold");
    doc.text(`Rz = ${rz.toFixed(4)} \u00B5m`, 30, 239);
    
    doc.setFont(undefined, "normal");
    doc.text("The vertical distance between the highest peak and lowest", 30, 246);
    doc.text("valley within the evaluation length.", 30, 252);
    
    // Conclusion
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("CONCLUSION:", 20, 267);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    const conclusion = `The surface roughness of the ${workpieceNames[workpiece].toLowerCase()} was successfully measured using a contact profilometer. The Ra value of ${ra.toFixed(4)} \u00B5m and Rz value of ${rz.toFixed(4)} \u00B5m indicate the surface texture characteristics of the specimen. The measurement demonstrates the effectiveness of stylus-based profilometry in quantifying surface irregularities.`;
    const splitConclusion = doc.splitTextToSize(conclusion, 170);
    doc.text(splitConclusion, 20, 274);
    
    doc.save("surface_roughness_report.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Model Calculations
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Workpiece Info */}
        <Card className="p-6 bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">Measured Workpiece</h2>
          <p className="text-xl text-foreground/90">{workpieceNames[workpiece]}</p>
        </Card>

        {/* Ra Calculation */}
        <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-secondary">Ra - Arithmetic Average Roughness</h2>
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl p-6 border border-secondary/30">
              <p className="text-lg mb-2 text-foreground/80">Formula:</p>
              <p className="text-xl font-mono text-secondary">Ra = (1/n) × Σ|yi|</p>
              <p className="text-sm text-muted-foreground mt-2">
                where yi is the vertical deviation from the mean line at point i
              </p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-6 border-2 border-secondary/50">
              <p className="text-lg mb-2 text-foreground/80">Calculated Value:</p>
              <p className="text-4xl font-bold text-secondary">Ra = {ra.toFixed(4)} μm</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Ra represents the arithmetic average of the absolute values of the profile deviations from the mean line. 
              This is the most commonly used parameter to quantify surface roughness. A lower Ra value indicates a smoother surface.
            </p>
          </div>
        </Card>

        {/* Rz Calculation */}
        <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-accent">Rz - Maximum Height of Profile</h2>
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl p-6 border border-accent/30">
              <p className="text-lg mb-2 text-foreground/80">Formula:</p>
              <p className="text-xl font-mono text-accent">Rz = Zmax - Zmin</p>
              <p className="text-sm text-muted-foreground mt-2">
                where Zmax is the highest peak and Zmin is the lowest valley
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/50">
              <p className="text-lg mb-2 text-foreground/80">Calculated Value:</p>
              <p className="text-4xl font-bold text-accent">Rz = {rz.toFixed(4)} μm</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Rz represents the vertical distance between the highest peak and the lowest valley within the evaluation length. 
              This parameter is particularly useful for detecting extreme surface features and is more sensitive to isolated peaks or valleys than Ra.
            </p>
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Button
              onClick={generatePDF}
              size="lg"
              className="relative w-full sm:w-auto text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold rounded-xl shadow-lg flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Report (PDF)
            </Button>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Button
              onClick={() => navigate("/quiz")}
              size="lg"
              className="relative w-full sm:w-auto text-lg px-10 py-6 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              Go to Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationPage;
