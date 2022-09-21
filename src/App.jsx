/** @format */
import React, { useState } from "react";
import { Home } from "./pages/home/Home";
// import NavBar from "./components/nav/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Create from "./pages/create/Create";
import BlogDetails from "./components/blogdetails/BlogDetails";
import NotFound from "./components/404/NotFound";
import Input from "./components/searchbar/SearchBar";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
    // [cate, setCate] = useState(searchParams.get("categories"));

  const [show_head, setShow_head] = useState(true);

  return (
    <Router>
      <React.StrictMode>
        <div className="app">
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/posts/*" element={<Home />} />
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
