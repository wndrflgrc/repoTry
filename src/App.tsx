import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Department from "./components/Department";
import Employees from "./components/Employees";
import Leave from "./components/Leave";
import Evaluation from "./components/Evaluation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="departments" element={<Department />} />
          <Route path="employees" element={<Employees />} />
          <Route path="leave" element={<Leave />} />
          <Route path="evaluation-analysis" element={<Evaluation />} />
        </Route>
      </Routes>
    </Router>
  );
}
