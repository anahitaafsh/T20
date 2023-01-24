import { useState } from "react";
import { useEffect } from "react";
import { API_BASE } from "../../configs";


const Row = (r)=>{
    console.log("TESTING")
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
    useEffect(async()=>{
        const r = await fetch(API_BASE+'/maternal');
        const tbl = await r.json();
        setResults(tbl);
    },[refresh]);

    return <>
    <div className="row p-4">
    <div className="col-12">
    <table className="table table-striped">
        <thead>
            <th>ID</th>
            <th>Age</th>
            <th>Systolic Blood Pressure</th>
            <th>Diastolic Blood Pressure</th>
            <th>Blood Sugar</th>
            <th>Body Temperature</th>
            <th>Heart Rate</th>
        </thead>
        <tbody>
            {results.map(r=>Row(r))}
        </tbody>
    </table>
    </div>
    </div>
    </>

}


//export default ResultTable;

