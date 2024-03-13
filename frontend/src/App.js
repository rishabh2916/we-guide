import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Blogs from './components/Blogs/Blogs';
import Assesment from './components/Assessment/Assesment';
import { BlogForm } from './components/Blogs/BlogForm'
import React from 'react';
import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
import { Checkout } from './components/Checkout/Checkout';
import ShowRoadmap from './components/Roadmaps/RoadmapTemplate';
import ProDashboard from './pages/weGuidePro';
import Community from './components/ProVersion/Community';
import WeGuide from './pages/weGuide';


// const path = require("node:path");
// const mongoose = require("mongoose");
// // 
// mongoose
//   .connect(
//     "mongodb+srv://rishabhrajpurohit1703:12345666@cluster0.mv2eggk.mongodb.net/minorproject?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Connected to MongoDB successfully."))
//   .catch((error) => console.error("Could not connect to MongoDB:", error));
  
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myassessment" element={<Assesment />} />
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myRoadmap" element={<ShowRoadmap />} />
        <Route path="/weGuide" element={<WeGuide />} />
        <Route path="/user/weGuidePro" element={<ProDashboard />} />
        <Route path="/proweguide/addBlog" element={<BlogForm />} />
        <Route path='/proweguide/community' element={<Community />} />
        <Route path='/myreport' element={<ShowRoadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

