import React, { useState } from 'react'
import Navbar from '../components/Navbar/Component'
import Section from '../components/Section/Component'
import AuthDialog from '../components/AuthDialog/Component'
import ProfileChangeForm from '../components/ProfileChangeForm/Component';
import PortfolioChangeForm from '../components/PortfolioChangeForm/Component';
import AuthDataChangeForm from '../components/AuthDataChangeForm/Component';


export default function ControlPanel() {
    const [authData, setAuthData] = useState(undefined)

    
    return (
    	<div>
            <AuthDialog isOpen={!authData} 
                onSuccessAuth={setAuthData}/>
            <Section id="profile" title="Изменение профиля" style={{
                backgroundColor: "#000",
            }}>
                <ProfileChangeForm authData={authData}/>
            </Section>
            <Section id="portfolio" title="Изменение портфолио" style={{
                backgroundColor: "#282828",
            }}>
                <PortfolioChangeForm authData={authData}/>
            </Section>
            <Section id="authData" title="Смена данных для входа" style={{backgroundColor: "#000"}}>
                <AuthDataChangeForm authData={authData}/>
            </Section>
        </div>
    )
}