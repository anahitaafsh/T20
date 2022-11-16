import { useState } from "react";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { msalConfig, b2cPolicies } from "../msal/authConfig"
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
    
        return (
            <>        
                <AuthenticatedTemplate>
                    <div class="navLinks">
                        <Button variant="secondary" onClick="location.href='https://github.com/anahitaafsh/t20'">Github</Button>
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
                    <div class="navLinks">
                        <Button variant="secondary" onClick="location.href='https://github.com/anahitaafsh/t20'">Github</Button>
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
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">2022 Aspire T20 Project</a>
                <Nav.Item><Nav.Link href = "/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href = "https://github.com/anahitaafsh/t20">GitHub</Nav.Link></Nav.Item>
                {/* <NavigationBar /> */}
            </Navbar>
        </>
    )
}

export default NavBar;