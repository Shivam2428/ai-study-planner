import { useState } from "react";
import API from "../services/api";

function DoubtSolver() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const solveDoubt = async () => {
    try {
      const res = await API.post("/ai/doubt", {
        question,
      });

      setAnswer(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ai-box">
      <h2>AI Doubt Solver</h2>

      <textarea
        rows="5"
        placeholder="Ask your doubt..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={solveDoubt}>Solve Doubt</button>

      <div className="result-box">{answer}</div>
    </div>
  );
}

export default DoubtSolver;