import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/pong"
            element={<> {/* Votre composant Pong ici */} </>}
          />
          <Route
            path="/profile"
            element={<> {/* Votre composant Profile ici */} </>}
          />
          <Route
            path="/intro"
            element={<> {/* Votre composant Intro ici */} </>}
          />
          <Route
            path="/channels"
            element={<> {/* Votre composant Channels ici */} </>}
          />
          <Route
            path="/contacts"
            element={<> {/* Votre composant Contacts ici */} </>}
          />
          <Route
            path="/signout"
            element={<> {/* Logique de déconnexion ici */} </>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
