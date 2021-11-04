import React from 'react';
import Navbar from '../components/Navbar/Component';
import Section from '../components/Section/Component';
import Profile from '../components/Profile/Component';
import Portfolio from '../components/Portfolio/Container/Component';
import ContactForm from '../components/ContactForm/Component';


export default function Index() {
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
            }}>
                <Profile fetchUrl="/api/profile"/>
                    {/* photo={photo}
                    name="Name" 
                    job="Not a web-developer"
                    about = {"This is a text about me." + " das".repeat(100)}/> */}
            </Section>
            <Section id="portfolio" title="Portfolio" style={{
                backgroundColor: "#282828",
            }}>
                <Portfolio fetchUrl="/api/portfolio"/>
            </Section>
            <Section id="contact" title="Contact" style={{backgroundColor: "#000"}}>
                <ContactForm/>
            </Section>
        </div>
    );
}