import React from "react";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="nav_menu">
          <Navbar />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
