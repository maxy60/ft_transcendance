import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function App() {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  return (
    <Router>
      <div className="App">
        {/* Render Navbar uniquement si l'user s'est log in */}
        {authStatus === "logged_in" && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Autres routes, qui devraient être protégées si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
