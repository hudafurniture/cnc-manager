// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
