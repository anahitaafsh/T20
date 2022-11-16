/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import { Navbar, Button, Dropdown, DropdownButton, Nav} from "react-bootstrap";
import { useState } from "react";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest, b2cPolicies } from "./components/msal/authConfig";
import IdTokenClaims from "./components/msal/idTokenClaims";

import EntryForm from "./components/entryForm";
import WelcomeHeader from "./components/layout/welcomeHeader";
import ProjectSteps from "./components/layout/projectSteps";
import NavBar from "./components/layout/navigation";

export const PageLayout = (props) => {
    console.log(props);

    return (
        <>
            <WelcomeHeader/>
            <EntryForm/>
            <ProjectSteps/>
        </>
    );
};

