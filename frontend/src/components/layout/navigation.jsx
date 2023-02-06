import { useState } from "react";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { msalConfig, b2cPolicies, loginRequest } from "../msal/authConfig"
import { Navbar, Button, Dropdown, DropdownButton, Nav} from "react-bootstrap";
import React from 'react';

function NavBar(props) {
    const NavigationBar = () => {
        /**
         * useMsal is hook that returns the PublicClientApplication instance, 
         * an array of all accounts currently signed in and an inProgress value 
         * that tells you what msal is currently doing. For more, visit:
         * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
         */
        const { instance } = useMsal();
        
        const handleLogin = () => {
            instance.loginPopup(loginRequest)
                .catch((error) => console.log(error))
        }

        const handleGithub = () => {
            window.location.replace('https://github.com/anahitaafsh/t20');
        };

        const handleHome = () => {
            window.location.replace('/');
        };
    
        return (
            <>        
                <AuthenticatedTemplate>
                    <div className="navLinks">
                        <Button variant="primary" onClick={handleHome} style={{margin: '10px;'}}>Home</Button>
                        <Button variant="secondary" onClick={handleGithub} style={{margin: '10px;'}}>Github</Button>
                    </div>
                    <div className="ml-auto">
                        <Button variant="info" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto">Edit Profile</Button>
                        <DropdownButton variant="warning" className="ml-auto" drop="left" title="Sign Out">
                            <Dropdown.Item as="button" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })}>Sign out using Popup</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>Sign out using Redirect</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="navLinks">
                        <Button variant="primary" onClick={handleHome} style={{margin: '10px;'}}>Home</Button>
                        <Button variant="secondary" onClick={handleGithub} style={{margin: '10px;'}}>Github</Button>
                    </div>
                    <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
                        <Dropdown.Item as="button" onClick={handleLogin}>Sign in using Popup</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => instance.loginRedirect(loginRequest)}>Sign in using Redirect</Dropdown.Item>
                    </DropdownButton>
                </UnauthenticatedTemplate>
            </>
        );
    };

    return (
        <>
            <Navbar bg="#01A6F0" variant="dark" style={{backgroundColor: '#01A6F0', color:'#01A6F0'}}>
                <a className="navbar-brand" href="/">2022 Aspire T20 Project</a>
                <NavigationBar />
            </Navbar>
        </>
    )
}

export default NavBar;