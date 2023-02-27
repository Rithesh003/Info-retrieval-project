import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Evaluation from "./components/pages/Evaluation";
// import TableWithSelection from "./components/pages/form";
// import App1 from "./components/pages/app1";
import Login from "./components/pages/Login";
import Tritr from "./components/pages/tritr";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/evaluation" element={<Evaluation />} /> */}
          {/* <Route path="/form" element={<TableWithSelection />} /> */}
          {/* <Route path="/app1" element={<App1 />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/tritr" element={<Tritr />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
