import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilometerExperiment from "@/components/ProfilometerExperiment";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const ExperimentPage = () => {
  const [experimentData, setExperimentData] = useState<{ ra: number; rz: number; workpiece: string } | null>(null);
  const [currentStep, setCurrentStep] = useState<string>("select");
  const navigate = useNavigate();

  const instructions = {
    select: "Select a workpiece from the options below",
    zero: "Click 'Zero Stylus' to calibrate the measurement at the corner edge",
    scan: "Click 'Start Measurement' to scan the surface",
    complete: "Measurement complete! View your results below"
  };

  const handleComplete = (data: { ra: number; rz: number; workpiece: string }) => {
    setExperimentData(data);
  };

  const handleNavigateToCalculation = () => {
    if (experimentData) {
      navigate("/calculation", { state: { data: experimentData } });
    }
  };

  return (
    <div className="relative">
      <Alert className="mx-8 mt-6 mb-4 border-primary/30 bg-primary/5">
        <Info className="h-5 w-5 text-primary" />
        <AlertDescription className="ml-2">
          <strong className="font-semibold">Next Step:</strong> 
          <span className="ml-2">{instructions[currentStep]}</span>
        </AlertDescription>
      </Alert>
      <ProfilometerExperiment onComplete={handleComplete} onStepChange={setCurrentStep} />
      {experimentData && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button 
            onClick={handleNavigateToCalculation}
            size="lg"
            className="shadow-lg"
          >
            Go to Calculation
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExperimentPage;
