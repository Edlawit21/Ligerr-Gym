import "./App.css";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
