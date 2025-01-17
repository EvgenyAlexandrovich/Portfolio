import React from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Works } from "./layout/sections/works/Works";
import { Contact } from "./layout/sections/contacts/Contact";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            {/* <Slogan /> */}
            <Footer />
        </div>
    );
}

export default App;
