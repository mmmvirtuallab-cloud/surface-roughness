import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TitlePage = () => {
  const navigate = useNavigate();

  const words = ["SURFACE", "ROUGHNESS", "MEASUREMENT", "BY", "CONTACT", "METHOD"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-6 overflow-hidden relative">
      <div className="max-w-6xl w-full space-y-16 relative z-10">
        {/* Title with words together */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-wrap justify-center gap-4">
            {words.map((word, index) => (
              <span
                key={index}
                className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-accent"
              >
                {word}
              </span>
            ))}
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Card with button */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-card/80 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-12 shadow-2xl">
              <Button
                onClick={() => navigate("/pre-experiment")}
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Virtual Lab
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center gap-3 opacity-50">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
