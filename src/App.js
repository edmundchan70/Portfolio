import React  , {useState}from 'react';
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
 
import "./App.css";
 
import About from "./pages/About"
 
import Project from './component/Project';
 
export const UserNameContext = React.createContext();

function App() {
 
 return (
        <section id="SkillSet" className='App'>
          
            <Sidebar />
            <Home />
            <About />
            <Project />
      
          </section>
 );
}

export default App;
