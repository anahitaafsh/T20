import { useState } from "react";
import React from 'react';
import '../styles/entryForm.css';

function EntryForm(props) {
    //Variables for the form
    const [age, setAge] = useState('');
    const [systolicBP, setSystolicBP] = useState('');
    const [diastolicBP, setDiastolicBP] = useState('');
    const [bs, setBS] = useState('');
    const [bodyTemp, setBodyTemp] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    
    const handleSystolicBPChange = (e) => {
        setSystolicBP(e.target.value);
    }
   
    const handleDiastolicBPChange = (e) => {
        setDiastolicBP(e.target.value);
    }
    
    const handleBSChange = (e) => {
        setBS(e.target.value);
    }
   
    const handleBodyTempChange = (e) => {
        setBodyTemp(e.target.value);
    }
   
    const handleHeartRateChange = (e) => {
        setHeartRate(e.target.value);
    }
    
    const handleRiskLevelChange = (e) => {
        setRiskLevel(e.target.value);
    }
   
    const handleSubmit = (e) => {
        alert('An entry was submitted with the Age:' + age +', SystolicBP: ' + systolicBP + ', DiastolicBP' +
        diastolicBP + ", Blood Sugar: " + bs + ", Body Temperature: " + bodyTemp + ", Heart Rate: " + heartRate + 
        ", and Risk Level: " + riskLevel);
    }

    return (
        <form id="entryForm" onSubmit={(e) => {handleSubmit(e)}}>
            <label>
            Age:
            </label><br/>
            <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
            {}

            <br/><label>
            SystolicBP:
            </label><br/>
            <input type="text" value={systolicBP} required onChange={(e) => {handleSystolicBPChange(e)}} /><br/>
            {}

            <br/><label>
            DiastolicBP:
            </label><br/>
            <input type="text" value={diastolicBP} required onChange={(e) => {handleDiastolicBPChange(e)}} /><br/>
            {}

            <br/><label>
            BS:
            </label><br/>
            <input type="text" value={bs} required onChange={(e) => {handleBSChange(e)}} /><br/>
            {}

            <br/><label>
            BodyTemp:
            </label><br/>
            <input type="text" value={bodyTemp} required onChange={(e) => {handleBodyTempChange(e)}} /><br/>
            {}

            <br/><label>
            HeartRate:
            </label><br/>
            <input type="text" value={heartRate} required onChange={(e) => {handleHeartRateChange(e)}} /><br/>
            {}

            <br/><label>
            RiskLevel:
            </label><br/>
            <input type="text" value={riskLevel} required onChange={(e) => {handleRiskLevelChange(e)}} /><br/>
            {}

            <br/><input id="submitBtn" type="submit" value="Submit"/>
        </form>
    )
}

export default EntryForm;