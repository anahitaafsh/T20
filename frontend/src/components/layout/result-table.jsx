import { useState } from "react";
import { useEffect } from "react";
import { API_BASE } from "../../configs";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const Row = (r)=>{
    return <tr>
        <td>{r.id}</td>
        <td>{r.age}</td>
        <td>{r.systolicBP}</td>
        <td>{r.diastolicBP}</td>
        <td>{r.BS}</td>
        <td>{r.bodyTemp}</td>
        <td>{r.heartRate}</td>
    </tr>
}

const ResultTable = (props)=>{
    const [results, setResults] = useState([]);
    const refresh = props.refresh
    console.log("ENTERRESULTTABLE")
    useEffect(async()=>{
        const r = await fetch(API_BASE+'/maternal');
        const tbl = await r.json();
        setResults(tbl);
    },[refresh]);
    const id = [results.length]
    const bs = [results.length]
    const sysBP = [results.length]
    const diasBP = [results.length]
    const bodyTemps = [results.length]

    for(var i = 0; i < results.length; i++) {
        id[i] = results[i].id
        bs[i] = results[i].BS
        sysBP[i] = results[i].systolicBP
        diasBP[i] = results[i].diastolicBP
        bodyTemps[i] = results[i].bodyTemp
    }
    console.log("Blood Sugar Array")
    console.log(bs)

    //Blood Sugar
    const bloodSugarData = {
        labels: id,
        datasets: [{
            data: bs,
            backgroundColor: 'transparent',
            fill: 'false',
            borderColor: '#36A2EB',
        }],
    };
    
    //SystolicBP
    const systolicBPData = {
        labels: id,
        datasets: [{
            data: sysBP,
            backgroundColor: 'transparent',
            fill: 'false',
            borderColor: 'Ff0000',
        }],
    };

    //DiastolicBP
    const diastolicBPData = {
        labels: id,
        datasets: [{
            data: diasBP,
            backgroundColor: 'transparent',
            fill: 'false',
            borderColor: 'rgb(54, 162, 235)',
        }],
    };

    //Body Temp
    const bodyTempData = {
        labels: id,
        datasets: [{
            data: bodyTemps,
            backgroundColor: 'transparent',
            fill: 'false',
            borderColor: 'FFA500',
        }],
    };

    const options={};

    

    return <>
    <div className="row p-4" style={{width: '1000px'}}>
    <div className="col-12">
    <table className="table table-striped">
        <thead>
            <th>ID</th>
            <th>Age</th>
            <th>Systolic BP</th>
            <th>Diastolic BP</th>
            <th>Blood Sugar</th>
            <th>Body Temp (F)</th>
            <th>Heart Rate</th>
        </thead>
        <tbody>
            {results.map(r=>Row(r))}
        </tbody>
    </table>
    </div>
    </div>
    
    <div style = {{width: '1200px', height: '800px', marginLeft: '20px'}}>
        <h3>Blood Sugar</h3>
        <Line data = {bloodSugarData} options = {options}></Line>

        <h3>Systolic Blood Pressure</h3>
        <Line data = {systolicBPData} options = {options}></Line>

        <h3>Diastolic Blood Pressure</h3>
        <Line data = {diastolicBPData} options = {options}></Line>

        <h3>Body Temperature</h3>
        <Line data = {bodyTempData} options = {options}></Line>
    </div>
    </>

}


export default ResultTable;

