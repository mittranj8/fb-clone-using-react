import React from "react";
import "./App.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_body">
        <Sidebar />
        {/* FB Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
