import { useEffect, useState } from "react";

import API from "../services/api";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.progress >= 80
  ).length;

  return (
    <div className="dashboard">

      <div className="stats-container">

        <div className="stat-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

      </div>

      <TaskForm fetchTasks={fetchTasks} />

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;