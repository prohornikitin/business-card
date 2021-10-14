import React from 'react';
import Navbar from '../Navbar/Component';
import Section from '../Section/Component';


function App() {
    let text = "";
    for(let i=0; i<1000;++i){
        text += "DAS "
    }
    return (
        <div>
            <Navbar items={[
                {text:"Home", sectionId:"home"},
                {text:"Portfolio", sectionId:"portfolio"},
                {text:"Contact", sectionId:"contact"},
            ]}/>
            <Section id="home" style={{
                backgroundColor: "#000",
                color: "#FFF"
            }}>
                <p>{text}</p>
            </Section>
            <Section id="portfolio" style={{
                backgroundColor: "#222",
                color: "#FFF"
            }}>
                <p>{text}</p>
            </Section>
            <Section id="contact" style={{
                backgroundColor: "#000",
                color: "#FFF"
            }}>
                <p>{text}</p>
            </Section>
        </div>
    );
}
export default App;