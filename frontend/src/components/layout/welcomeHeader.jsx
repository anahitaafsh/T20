import { useState } from "react";
import React from 'react';

function WelcomeHeader(props) {
    return (
        <>
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
        </>
    )
}

export default WelcomeHeader;