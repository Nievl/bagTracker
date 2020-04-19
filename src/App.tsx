import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./css/font-awesome.css";
import "./css/index.scss";

function App() {
  return (
    <>
      <header>
        <div>
          <h3>Баг трекер</h3>
        </div>
      </header>
      <Dashboard />
      <footer>&copy; 2019, Levin</footer>
    </>
  );
}

export default App;
