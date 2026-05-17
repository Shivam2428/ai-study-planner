const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();


// ✅ CORS FIX FOR ALL DEVICES
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// ✅ JSON PARSER
app.use(express.json());


// ✅ ROUTES
app.use("/api/tasks", require("./routes/taskRoutes"));

app.use("/api/ai", require("./routes/aiRoutes"));


// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("AI Study Planner API Running");
});


// ✅ PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});