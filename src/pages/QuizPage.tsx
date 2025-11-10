import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of a profilometer?",
      options: [
        "To measure surface roughness and texture",
        "To measure temperature variations",
        "To measure electrical conductivity",
        "To measure chemical composition"
      ],
      correctAnswer: "To measure surface roughness and texture"
    },
    {
      question: "What material is typically used for the stylus tip in a contact profilometer?",
      options: [
        "Diamond",
        "Plastic",
        "Copper",
        "Aluminum"
      ],
      correctAnswer: "Diamond"
    },
    {
      question: "What does Ra represent in surface roughness measurement?",
      options: [
        "Arithmetic average of surface roughness",
        "Maximum peak height",
        "Total scanning distance",
        "Surface hardness value"
      ],
      correctAnswer: "Arithmetic average of surface roughness"
    },
    {
      question: "What does Rz measure in surface profile analysis?",
      options: [
        "Maximum height of the profile",
        "Average valley depth",
        "Surface temperature",
        "Material density"
      ],
      correctAnswer: "Maximum height of the profile"
    },
    {
      question: "Why is surface roughness measurement important in manufacturing?",
      options: [
        "It affects product quality, performance, and functionality",
        "It determines the color of the product",
        "It measures the weight of components",
        "It calculates production costs"
      ],
      correctAnswer: "It affects product quality, performance, and functionality"
    }
  ];

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const isAnswered = answers[currentQuestion]?.trim() !== "" && answers[currentQuestion] !== undefined;
  const allAnswered = questions.every((_, index) => answers[index]?.trim() !== "" && answers[index] !== undefined);

  if (showResults) {
    const answeredCount = Object.keys(answers).filter(key => answers[key]?.trim() !== "").length;
    const correctCount = questions.filter((q, index) => answers[index] === q.correctAnswer).length;
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12 flex items-center justify-center">
        <Card className="p-12 max-w-3xl w-full bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-2xl text-center space-y-8">
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-foreground">{percentage}%</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Quiz Complete!
            </h2>
            <p className="text-2xl text-foreground/90">
              You scored <span className="font-bold text-primary">{correctCount}</span> out of{" "}
              <span className="font-bold text-secondary">{questions.length}</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Answered: {answeredCount} | Correct: {correctCount} | Percentage: {percentage}%
            </p>
            
            <div className="mt-8 space-y-4 text-left">
              <h3 className="text-xl font-semibold mb-4">Answer Review:</h3>
              {questions.map((q, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === q.correctAnswer;
                const isAnswered = userAnswer && userAnswer.trim() !== "";
                
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-2 ${
                      !isAnswered 
                        ? "bg-muted/30 border-muted" 
                        : isCorrect 
                          ? "bg-green-500/10 border-green-500/50" 
                          : "bg-red-500/10 border-red-500/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-medium text-sm text-muted-foreground flex-1">
                        Q{index + 1}: {q.question}
                      </p>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        !isAnswered 
                          ? "bg-muted text-muted-foreground" 
                          : isCorrect 
                            ? "bg-green-500 text-white" 
                            : "bg-red-500 text-white"
                      }`}>
                        {!isAnswered ? "Not Answered" : isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Your Answer:</p>
                        <p className={`text-sm ${!isAnswered ? "text-muted-foreground" : isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                          {userAnswer || "No answer provided"}
                        </p>
                      </div>
                      {!isCorrect && isAnswered && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">Correct Answer:</p>
                          <p className="text-sm text-green-600 dark:text-green-400">{q.correctAnswer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <Button
              onClick={() => navigate("/conclusion")}
              size="lg"
              className="relative w-full text-lg px-10 py-6 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              Go to Conclusion
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Knowledge Assessment
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-lg text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <Card className="p-8 md:p-12 bg-card/60 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/90">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            <Label className="text-lg">Select your answer:</Label>
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={(value) => handleAnswerChange(currentQuestion, value)}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-all cursor-pointer"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary"
          >
            Previous
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <div className="relative group flex-1 sm:flex-initial">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered}
                size="lg"
                className="relative w-full text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold"
              >
                Submit Quiz
              </Button>
            </div>
          ) : (
            <div className="relative group flex-1 sm:flex-initial">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                size="lg"
                className="relative w-full text-lg px-8 py-6 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary-foreground font-bold"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;