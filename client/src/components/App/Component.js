import React from 'react';
import Navbar from '../Navbar/Component';
import Section from '../Section/Component';
import Profile from '../Profile/Component';
import photo from '../../profile_photo.jpg'

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
            }}>
                <Profile
                    photo={photo}
                    name="Name" 
                    job="Not a web-developer"
                    about = {"This is a text about me." + " das".repeat(100)}/>
            </Section>
            <Section id="portfolio" style={{
                backgroundColor: "#222",
            }}>
                <p>{text}</p>
            </Section>
            <Section id="contact" style={{
                backgroundColor: "#000",
            }}>
                <p>{text}</p>
            </Section>
        </div>
    );
}
export default App;