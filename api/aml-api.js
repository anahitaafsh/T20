const axios = require('axios').default;

const ENDPOINT={
    riskLevel:'https://maternal-base01.centralus.inference.ml.azure.com/score',
    age:'', 
    systolicBP:'', 
    diastolicBP:'', 
    BS:'http://877cafc8-2a81-4229-a1ac-9f0b6b42bc64.centralus.azurecontainer.io/score', 
    bodyTemp:'', 
    heartRate:'http://a8acc6a6-5bc3-4548-acda-c4d70182217e.centralus.azurecontainer.io/score', 
}
const AUTH_KEY={
    riskLevel: 'S3hpEaDu5MyduAkj5Afvwnj7ivaeKxEG',
    age:'', 
    systolicBP:'', 
    diastolicBP:'', 
    BS:'', 
    bodyTemp:'', 
    heartRate:'', 
}


async function getAnomaly(metricName, value ) {
    const authKey = AUTH_KEY[metricName];
    const endpoint = ENDPOINT[metricName];

    const headers = { 
        'Content-Type': 'application/json',
        'Authorization': authKey?'Bearer ' + authKey: undefined,
        'azureml-model-deployment': 'default' 
    }
    
    const data = {data:[[value]] };
    try {
        const res = await axios.post(endpoint, data, { headers });
        return res.data[0];
    }
    catch (e) {
        console.log(`error happened in getAnomaly:${metricName}`);
        return null;
    }
}


function getData(data) {
    const index = Array.from({ length: data.length });
    const ans = {
        "input_data": {
            "columns": ["Age", "SystolicBP", "DiastolicBP", "BS", "BodyTemp", "HeartRate"],
            index, data
        }
    }
    return ans;
}

async function getRiskLevel({age, systolicBP, diastolicBP, BS, bodyTemp, heartRate}) {
    const metricName = 'riskLevel';
    const authKey = AUTH_KEY[metricName];
    const endpoint = ENDPOINT[metricName];
    const headers = { 
        'Content-Type': 'application/json', 
        'Authorization':  authKey?'Bearer ' + authKey: undefined,
        'azureml-model-deployment': 'default' 
    }
    const inputArray = [age, systolicBP, diastolicBP, BS, bodyTemp, heartRate] // convert json to array
    const data = getData([
        inputArray,
    ]);
    try {
        const res = await axios.post(endpoint, data, { headers });
        // console.log(res.status);
        // console.log(res.data);
        return res.data[0];
    }
    catch (e) {
        console.log('error happened in getRiskLevel');
    }
}

module.exports = {
    getAnomaly, getRiskLevel
}