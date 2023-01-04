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
import NavBar from "./components/layout/navigation";
//import ResultTable from "./components/layout/result-table";

export const PageLayout = (props) => {
    console.log(props);
    const [refresh, setRefresh]=useState(false);

    return (
        <>
            <WelcomeHeader/>
            <EntryForm refresh={setRefresh}/>
            {/*<ResultTable refresh={refresh}/>*/}
        </>
    );
};

