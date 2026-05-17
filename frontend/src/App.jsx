import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Doubts from "./pages/Doubts";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/planner" element={<Planner />} />

        <Route path="/doubts" element={<Doubts />} />
      </Routes>
    </div>
  );
}

export default App;