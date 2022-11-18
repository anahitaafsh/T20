import { useState } from "react";
const axios = require('axios').default;
import React from 'react';

function ProjectSteps(props) {
    const [results, setResults] = useState([]);
    // axios.get('http://localhost:4000/test').then(res=>{
    // console.log(res.data);   
    // setResults(res.data.result);
    // })
    return (
        <>
        <h6>Project Steps </h6>
            <label className="container" id="ana">Deploy to App Service
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
            
            <label className="container" id="mel">Find Dataset
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
           
            <label className="container" id="ashwin">Create frontend
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
            
            <label className="container" id="zach">Authenticate users with Azure AD
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
           
            <label className="container" id="rachel">Clean and trim data
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
           
            <label className="container" id="aayushi">Connect to IoT
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
           
            <label className="container" id="mel">Connect to Database
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
           
            <label className="container" id="ana">Continuous Deployment with Github
                <input type="checkbox"/><span className="checkmark"></span>
            </label>
            <div>
            {results.map(r => (
        <li>
          {r.age}, {r.BS}
        </li>
      ))}
            </div>
        </>
    )
}

export default ProjectSteps;