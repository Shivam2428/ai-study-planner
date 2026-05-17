import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        subject,
        topic,
        deadline,
        progress,
      });

      setSubject("");
      setTopic("");
      setDeadline("");
      setProgress(0);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Progress %"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />

      <button type="submit">Add Task</button>

    </form>
  );
}

export default TaskForm;