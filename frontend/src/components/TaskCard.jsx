function TaskCard({ task }) {
  const progressColor =
    task.progress < 40
      ? "#ef4444"
      : task.progress < 80
      ? "#facc15"
      : "#22c55e";

  return (
    <div className="task-card">
      <div className="card-top">
        <h3>{task.subject}</h3>

        <span className="status">{task.status}</span>
      </div>

      <p>
        <strong>Topic:</strong> {task.topic}
      </p>

      <p>
        <strong>Deadline:</strong> {task.deadline}
      </p>

      <div className="progress-section">
        <div className="progress-header">
          <span>Progress</span>

          <span>{task.progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${task.progress}%`,
              background: progressColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;