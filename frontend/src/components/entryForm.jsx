import { useState } from "react";
import React from 'react';
const axios = require('axios').default;
import '../styles/entryForm.css';
import { useEffect } from "react";

function EntryForm(props) {
    //Variables for the form
    const [age, setAge] = useState('');
    const [systolicBP, setSystolicBP] = useState('');
    const [diastolicBP, setDiastolicBP] = useState('');
    const [bs, setBS] = useState('');
    const [bodyTemp, setBodyTemp] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [apiResult, setApiResult ] = useState({riskLevel:null, anomaly_hr:null})
    // const [riskLevel, setRiskLevel] = useState('');

    useEffect(()=>{}, []);
  
    
    const handleAgeChange = (e) => {
        if(isNaN(age)){
            alert('Please enter a numerical value');
        } else {
            setAge(e.target.value);
        }
    }
    
    const handleSystolicBPChange = (e) => {
        if(isNaN(systolicBP)){
            alert('Please enter a numerical value');
        } else {
            setSystolicBP(e.target.value);
        }
    }
   
    const handleDiastolicBPChange = (e) => {
        if(isNaN(diastolicBP)){
            alert('Please enter a numerical value');
        } else {
            setDiastolicBP(e.target.value);
        }
    }
    
    const handleBSChange = (e) => {
        if(isNaN(bs)){
            alert('Please enter a numerical value');
        } else {
            setBS(e.target.value);
        }
    }
   
    const handleBodyTempChange = (e) => {
        if(isNaN(bodyTemp)){
            alert('Please enter a numerical value');
        } else {
            setBodyTemp(e.target.value);
        }
    }
   
    const handleHeartRateChange = (e) => {
        if(isNaN(heartRate)){
            alert('Please enter a numerical value');
        } else {
            setHeartRate(e.target.value);
        }
    }
    
    // const handleRiskLevelChange = (e) => {
    //     if(isNaN(riskLevel)){
    //         alert('Please enter a numerical value');
    //     } else {
    //         setRiskLevel(e.target.value);
    //     }
    // }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('An entry was submitted with the Age: ' + age +', SystolicBP: ' + systolicBP + ', DiastolicBP: ' +
        diastolicBP + ", Blood Sugar: " + bs + ", Body Temperature: " + bodyTemp + ", Heart Rate: " + heartRate);
        const response = await axios.post('http://localhost:4000/predict', 
            {
                age:age, 
                systolicBP, 
                diastolicBP, 
                BS:bs, 
                bodyTemp, 
                heartRate, 
                // riskLevel
        });
        console.log(response);
        setApiResult({riskLevel: response.riskLevel, anomaly_hr: response.anomaly_hr});
        console.log({apiResult, setApiResult});
    }

    return (
        <>
        <form id="entryForm" onSubmit={(e) => {handleSubmit(e)}}>
        <h6>Health Data Submission Form</h6><br/>
            <br/><label>
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
            { apiResult.anomaly_hr==-1 && <span >! anomaly</span> }

            {/* <br/><label>
            RiskLevel:
            </label><br/>
            <input type="text" value={riskLevel} required onChange={(e) => {handleRiskLevelChange(e)}} /><br/>
            {} */}

            <br/><input id="submitBtn" type="submit" value="Submit"/>
        </form>
        </>
    )
}

export default EntryForm;