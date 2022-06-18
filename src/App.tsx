import React from 'react';
import {ContactSection, ProjectsSection, WelcomeSection} from "./Sections";
import './App.css';
import Header from "./Components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <WelcomeSection/>
                <ProjectsSection/>
                <ContactSection/>
            </div>

        </div>
    );
}

export default App;
