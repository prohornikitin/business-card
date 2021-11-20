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
                {text:"Обо мне", sectionId:"home"},
                {text:"Портофлио", sectionId:"portfolio"},
                {text:"Контакты", sectionId:"contact"},
            ]}/>
            <Section id="home" style={{
                backgroundColor: "#000",
            }}>
                <Profile fetchUrl="/api/profile"/>
            </Section>
            <Section id="portfolio" title="Портфолио" style={{
                backgroundColor: "#282828",
            }}>
                <Portfolio fetchUrl="/api/portfolio"/>
            </Section>
            <Section id="contact" title="Контакты" style={{backgroundColor: "#000"}}>
                <ContactForm/>
            </Section>
        </div>
    );
}