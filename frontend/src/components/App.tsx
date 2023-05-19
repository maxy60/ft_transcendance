import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function App() {
  const authStatus = useSelector((state: RootState) => state.auth.status); // Select the authentication status from the store

  return (
    <Router>
      <div className="App">
        {/* Render uniquement Nabvbar et les autres routes si l'user s'est log in */}
        {authStatus === "logged_in" && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              {/* Autres routes */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
