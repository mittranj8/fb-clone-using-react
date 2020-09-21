import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* App Body */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* FB Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
