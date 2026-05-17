

import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-study-planner-backend-3nby.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;