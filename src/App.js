import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React, { useState } from "react";
import { FaHome, FaInbox, FaUser } from "react-icons/fa";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [pages, setPages] = useState([
    {
      icon: <FaHome />,
      text: "Home",
      to: "/",
    },
    {
      icon: <FaInbox />,
      text: "Projects",
      to: "/projects",
    },
    {
      icon: <FaUser />,
      text: "About Me",
      to: "/about",
    },
  ]);
  function changeActiveNavItem(item) {
    const newItems = pages.map((page, index) => ({
      ...page,
      active: index === item,
    }));
    newItems[item].active = true;

    setPages(newItems);
  }
  return (
    <>
      <Navbar items={pages} changeActiveNavItem={changeActiveNavItem} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        {/* <Route path="/alsrs" element={<ALSRS />} /> */}
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
