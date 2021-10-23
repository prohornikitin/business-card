import React from 'react';
import Navbar from '../components/Navbar/Component';
import Section from '../components/Section/Component';
import Profile from '../components/Profile/Component';
import Portfolio from '../components/Portfolio/Component';
import photo from '../profile_photo.jpg'
import ContactForm from '../components/ContactForm/Component';
import IconLink from '../components/IconLink/Component';
import github_icon from '../icons/github.png'

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
                <Profile
                    photo={photo}
                    name="Name" 
                    job="Not a web-developer"
                    about = {"This is a text about me." + " das".repeat(100)}/>
            </Section>
            <Section id="portfolio" title="Portfolio" style={{
                backgroundColor: "#282828",
            }}>
                <Portfolio items={[
                    {image:"images/uploaded/mystand-1.jpg", title:"Title", technologies: ["React", "Express"]},
                    {image:"images/uploaded/never-0.jpg", title:"Title", technologies: ["React", "Python"]},
                    {image:"images/uploaded/never-1.jpg", title:"Title", technologies: ["Angular / Ruby on rails"]}
                ]}/>
            </Section>
            <Section id="contact" title="Contact" style={{backgroundColor: "#000"}}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr",
                }}>
                    <IconLink icon={github_icon} href="https://github.com/prohornikitin/business-card"/>
                    <ContactForm/>
                </div>
            </Section>
        </div>
    );
}