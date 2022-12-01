import React  , {useState}from 'react';
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
 
import "./App.css";
 import AboutReact from "./pages/AboutReact"
import About from "./pages/About"
import ContactMe from "./pages/ContactMe"
import Project from './component/Project';
 
export const UserNameContext = React.createContext();

function App() {
 
 return (
        <section id="SkillSet" className='App'>
        
            <AboutReact /> 
          </section>
 );
}

export default App;




 