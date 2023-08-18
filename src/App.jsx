import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablePage from "./pages/TablePage";
import "./App.css"; // Make sure to include your styles

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablePage />} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
