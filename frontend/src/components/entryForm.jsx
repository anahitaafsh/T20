import { useState } from "react";
import React from 'react';
const axios = require('axios').default;
import '../styles/entryForm.css';
import { useEffect } from "react";
export const breakline = '\u000A';

function EntryForm(props) {
    //Variables for the form
    const [age, setAge] = useState('');
    const [systolicBP, setSystolicBP] = useState('');
    const [diastolicBP, setDiastolicBP] = useState('');
    const [bs, setBS] = useState('');
    const [bodyTemp, setBodyTemp] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [apiResult, setApiResult] = useState({
        anomaly_bodyTemp: null,
        anomaly_bs: null,
        anomaly_dbp: null,
        anomaly_hr: null,
        anomaly_sbp: null,
        riskLevel: null,
    });
    console.log(apiResult);
    // const [riskLevel, setRiskLevel] = useState('');



    const handleAgeChange = (e) => {
        if (isNaN(age)) {
            alert('Please enter a numerical value');
        } else {
            setAge(e.target.value);
        }
    }

    const handleSystolicBPChange = (e) => {
        if (isNaN(systolicBP)) {
            alert('Please enter a numerical value');
        } else {
            setSystolicBP(e.target.value);
        }
    }

    const handleDiastolicBPChange = (e) => {
        if (isNaN(diastolicBP)) {
            alert('Please enter a numerical value');
        } else {
            setDiastolicBP(e.target.value);
        }
    }

    const handleBSChange = (e) => {
        if (isNaN(bs)) {
            alert('Please enter a numerical value');
        } else {
            setBS(e.target.value);
        }
    }

    const handleBodyTempChange = (e) => {
        if (isNaN(bodyTemp)) {
            alert('Please enter a numerical value');
        } else {
            setBodyTemp(e.target.value);
        }
    }

    const handleHeartRateChange = (e) => {
        if (isNaN(heartRate)) {
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
        console.log('An entry was submitted with the Age: ' + age + ', SystolicBP: ' + systolicBP + ', DiastolicBP: ' +
            diastolicBP + ", Blood Sugar: " + bs + ", Body Temperature: " + bodyTemp + ", Heart Rate: " + heartRate);
            const response = await axios.post('https://functionapit20.azurewebsites.net/api/t20post?',
            // const response = await axios.post('https://apit20.azurewebsites.net/predict',
            {
                age: age,
                systolicBP,
                diastolicBP,
                BS: bs,
                bodyTemp,
                heartRate,
                // riskLevel
            });
        console.log(response.data);
        setApiResult(response.data);
        props.refresh(prev=>!prev);
    }

    return (
        <>
            <form id="entryForm" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Age </span>
                            </div>
                            <input type="text" className="form-control" value={age} required onChange={(e) => { handleAgeChange(e) }}  />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Systolic Blood Pressure</span>
                            </div>
                            <input type="text" className = "form-control" value={systolicBP} required onChange={(e) => { handleSystolicBPChange(e) }} />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-prepend ">
                                <span className="input-group-text">Diastolic Blood Pressure</span>
                            </div>
                            <input type="text" className = "form-control" value={diastolicBP} required onChange={(e) => { handleDiastolicBPChange(e) }} />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Blood Sugar</span>
                            </div>
                            <input type="text" className = "form-control" value={bs} required onChange={(e) => { handleBSChange(e) }} />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Body Temperature</span>
                            </div>
                            <input type="text" className = "form-control" value={bodyTemp} required onChange={(e) => { handleBodyTempChange(e) }} />
                            {apiResult.anomaly_sbp == -1 && <div className="feedback-invalid">!!</div>}
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Heart Rate</span>
                            </div>
                            <input type="text" className = "form-control" value={heartRate} required onChange={(e) => { handleHeartRateChange(e) }} />
                        </div>
                    </div>
                    
                </div>

                {/*<h6>Health Data Submission Form{breakline}</h6><br />*/}

{/*
                <br /><label>
                    RiskLevel:
                </label><br />
                {apiResult.riskLevel}<br />
    */}
                <input id="submitBtn" type="submit" value="Submit" />
            </form>

            <div id="result">
                <h7>Click on "Submit". You will see your result.</h7>
            </div>

            <div id="result2">
                <h8>{apiResult.riskLevel}</h8>
            </div>

            
        </>
    )
}

export default EntryForm;