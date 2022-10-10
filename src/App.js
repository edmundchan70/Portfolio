import React  , {useState}from 'react';
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./App.css";
import ContactMe from "./pages/ContactMe"
import About from "./pages/About"
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom';
import Project from './component/Project';
import SkillSet from "./pages/SkillSet"
export const UserNameContext = React.createContext();

function App() {
 
 return (
        <section id="SkillSet" className='App'>
          
            <Sidebar />
            <Home />
            <About />
            <Project />
            <ContactMe />
          </section>
 );
}

export default App;
