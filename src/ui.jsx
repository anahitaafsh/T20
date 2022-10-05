/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import { Navbar, Button, Dropdown, DropdownButton} from "react-bootstrap";

import { loginRequest, b2cPolicies } from "./authConfig";

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
                <div className="ml-auto">
                    <Button variant="info" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto">Edit Profile</Button>
                    <DropdownButton variant="warning" className="ml-auto" drop="left" title="Sign Out">
                        <Dropdown.Item as="button" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })}>Sign out using Popup</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>Sign out using Redirect</Dropdown.Item>
                    </DropdownButton>
                </div>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
                    <Dropdown.Item as="button" onClick={handleLogin}>Sign in using Popup</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => instance.loginRedirect(loginRequest)}>Sign in using Redirect</Dropdown.Item>
                </DropdownButton>
            </UnauthenticatedTemplate>
        </>
    );
};

export const PageLayout = (props) => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">2022 Aspire T20 Project</a>
                <NavigationBar />
            </Navbar>
            <br />
            <h5><center>Welcome to the 2022 Aspire T20 Project!</center></h5>
            <br />
            <div id="names">
                <p>by </p>
                <p id="aayushi">Aayushi</p>
                <p id="ana">Anahita</p>
                <p id="ashwin">Ashwin </p>
                <p id="mel">Melody  </p>
                <p id="rachel">Rachel </p>
                <p>and </p>
                <p id="zach">Zach</p>
            </div>
            {props.children}
            <br />
            
            <h5>Project Steps </h5>
                <label class="container" id="ana">Deploy to App Service
                    <input type="checkbox" defaultChecked/><span class="checkmark"></span>
                </label>
                <label class="container" id="mel">Find Dataset
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="ashwin">Create frontend
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="zach">Authenticate users with Azure AD
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="rachel">Clean and trim data
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="aayushi">Connect to IoT
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="mel">Connect to Database
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="ana">Continuous Deployment with Github
                    <input type="checkbox" defaultChecked/><span class="checkmark"></span>
                </label>
        </>
    );
};

export const IdTokenClaims = (props) => {
    return (
        <div id="token-div">
            <p><strong>Audience: </strong> {props.idTokenClaims.aud}</p>
            <p><strong>Issuer: </strong> {props.idTokenClaims.iss}</p>
            <p><strong>OID: </strong> {props.idTokenClaims.oid}</p>
            <p><strong>UPN: </strong> {props.idTokenClaims.preferred_username}</p>
        </div>
    );
}