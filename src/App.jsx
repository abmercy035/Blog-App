/** @format */
import React, { useState } from "react";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Input from "./components/SearchBar";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const [searchFor, setSearchFor] = useState(""),
    handleSearch = (e) => {
      setSearchFor(e.target.value);
    };
  
  return (
    <Router>
      <React.StrictMode>
        <div className="app">
          <Header />
          <Input handleInput={handleSearch} />

          <div className="content">
            <Routes>
              <Route exact path="/" element={
                <Home searchFor={searchFor} />
              } />
              <Route exact path="/posts/:id" element={<BlogDetails />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;
