import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./post";
import Get from "./get";
import HomePage from "./home-page";
import Put from "./put";
import Delete from "./delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/get" element={<Get />} />
        <Route path="/put" element={<Put />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
