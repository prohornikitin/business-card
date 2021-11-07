import React, { useState } from 'react'
import Navbar from '../components/Navbar/Component'
import Section from '../components/Section/Component'
import AuthDialog from '../components/AuthDialog/Component'
import ProfileChangeForm from '../components/ProfileChangeForm/Component';
import PortfolioChangeForm from '../components/PortfolioChangeForm/Component';


export default function ControlPanel() {
    const [authData, setAuthData] = useState(undefined)

    
    return (
    	<div>
            <AuthDialog isOpen={!authData} 
                onSuccessAuth={setAuthData}/>
            <Navbar items={[
                {text:"Home", sectionId:"home"},
                {text:"Portfolio", sectionId:"portfolio"},
                {text:"Contact", sectionId:"contact"},
            ]}/>
            <Section id="home" title="Profile" style={{
                backgroundColor: "#000",
            }}>
                <ProfileChangeForm authData={authData}/>
            </Section>
            <Section id="portfolio" title="Portfolio" style={{
                backgroundColor: "#282828",
            }}>
                <PortfolioChangeForm authData={authData}/>
            </Section>
            <Section id="contact" title="Contact" style={{backgroundColor: "#000"}}>
                
            </Section>
        </div>
    )
}