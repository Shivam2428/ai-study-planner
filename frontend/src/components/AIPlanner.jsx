import { useState } from "react";
import API from "../services/api";

function AIPlanner() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");

  const generatePlan = async () => {
    try {
      const res = await API.post("/ai/plan", {
        subject,
        hours,
      });

      setResult(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ai-box">
      <h2>AI Study Planner</h2>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours Per Day"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <button onClick={generatePlan}>Generate Plan</button>

      <div className="result-box">{result}</div>
    </div>
  );
}

export default AIPlanner;