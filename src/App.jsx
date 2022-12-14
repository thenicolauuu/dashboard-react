import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./assets/scss/app.scss";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
function App() {
  const [count, setCount] = useState(0);
  library.add(fas);
  return (
    <>
      <Router>
        <div className="main-content">
          <div className="page-content">
            <Dashboard />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
