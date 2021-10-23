import React from 'react';
import Navbar from '../components/Navbar/Component';
import Section from '../components/Section/Component';

import MainInfoChangeForm from '../components/MainInfoChangeForm/Component'

export default function ChangeInfo() {
    return (
        <div>
            <Navbar items={[
                {text:"Main", sectionId:"main"},
                {text:"Portfolio", sectionId:"portfolio"},
            ]}/>
            <Section id="main" title="Change Main Info" style={{
                backgroundColor: "#000",
            }}>
                <MainInfoChangeForm/>
            </Section>
            <Section id="portfolio" title="Change Portfolio" style={{
                backgroundColor: "#282828",
            }}>
                {/* <Portfolio items={[
                    {image:"images/uploaded/mystand-1.jpg", title:"Title", technologies: ["React", "Express"]},
                    {image:"images/uploaded/never-0.jpg", title:"Title", technologies: ["React", "Python"]},
                    {image:"images/uploaded/never-1.jpg", title:"Title", technologies: ["Angular / Ruby on rails"]}
                ]}/> */}
            </Section>
            <Section id="contact" title="Change Contact Info" style={{backgroundColor: "#000"}}>
                {/* <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr",
                }}>
                    <IconLink icon={github_icon} href="https://github.com/prohornikitin/business-card"/>
                    <ContactForm/>
                </div> */}
            </Section>
        </div>
    );
}