import { useState } from "react";
import React from 'react';

function ProjectSteps(props) {
    return (
        <>
        <h6>Project Steps </h6>
            <label class="container" id="ana">Deploy to App Service
                <input type="checkbox"/><span class="checkmark"></span>
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
                <input type="checkbox"/><span class="checkmark"></span>
            </label>
        </>
    )
}

export default ProjectSteps;