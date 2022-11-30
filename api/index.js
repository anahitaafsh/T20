const express = require('express');
const bodyParser = require('body-parser')
const sql = require('mssql');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const axios = require('axios').default;

// const sp_tenant_id = '16b3c013-d300-468d-ac64-7eda0820b6d3';
// const sp_client_id = '3c052c87-077c-49ab-9a33-49ce629a8641';
// const sp_sclient_ecret = 'UEq8Q~C4hQvNXA-DMZf9NgGYxAVVc3QqHTMccane';
const sql_config = {
    server:'t20-sql.database.windows.net',
    port: 1433,
    database:'t20-db',
    //Persist Security Info=False;
    user:'maternal',
    password:'ABCt20!!',
    options:{
        encrypt: true,
        trustServerCertificate: false,
    }
    //;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
}
sql.connect(sql_config)
    .then(x=>console.log('sql connected'))
    .catch(err=>console.error(err));

app.use((req, res, next)=>{
    console.log(req.url);
    next();
})

app.get('/',(req,res)=>{
    res.json({'message':'hello'})
});

app.get('/test',async (req,res)=>{
    const result = await sql.query(`select * from Test`);
    res.json({result: result.recordset})
});

app.get('/test/:age',async (req,res)=>{
    //let userId = '5; drop table User'
    // ORM - object realtion mapping
    const result = await sql.query(`select * from Test where age='${req.params.age}'`);
    res.json({'message':'welcome user '+ req.params.userId, result})
});


app.get('/predict',async (req,res)=>{
    //let userId = '5; drop table User'
    // ORM - object realtion mapping
    const result = await sql.query(`select * from Test`);
    res.json({result: result.recordset})
});

//Test pushing data entries
app.post('/test',async (req,res)=>{
    //let userId = '5; drop table User'
    // ORM - object realtion mapping
    console.log(req.body);
    const {age, systolicBP, diastolicBP, BS, bodyTemp, heartRate, riskLevel} = req.body
    try{
        const qry = `insert into Test values
        ('${age}','${systolicBP}','${diastolicBP}', '${BS}', '${bodyTemp}', '${heartRate}', '${riskLevel}')`;
        console.log(qry);
        const result = await sql.query(qry);
        res.json({result})
    }
    catch(e){
        console.error(e);
        res.json({error:e})
    }
});



const endpoint_risklevel = 'https://maternal-base01.centralus.inference.ml.azure.com/score';
const key_risklevel = 'S3hpEaDu5MyduAkj5Afvwnj7ivaeKxEG';
const endpoint_hr = 'http://a8acc6a6-5bc3-4548-acda-c4d70182217e.centralus.azurecontainer.io/score';
const key_hr = '';
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


// async function getRiskLevel(input) {
//     const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key_risklevel, 'azureml-model-deployment': 'default' }
//     const inputArray = input // convert json to array
//     const data = getData([
//         inputArray,
//     ]);
//     try {
//         const res = await axios.post(endpoint_risklevel, data, { headers });
//         console.log(res.status);
//         console.log(res.data);
//         return res.data[0];
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

async function getAnomalyHr(input_hr) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key_hr, 'azureml-model-deployment': 'default' }
    const inputArray = input // convert json to array
    const data = getData([
        inputArray,
    ]);
    try {
        const res = await axios.post(endpoint_hr, data, { headers });
        console.log(res.status);
        console.log(res.data);
        return res.data[0];
    }
    catch (e) {
        console.log(e);
    }
}


app.post('/predict', async(req,res)=>{
    const input = req.body;
    //const risk_level = await getRiskLevel(input);
    const anomaly_hr = await getAnomalyHr(input.heartRate);
    //....

    //alternative: parallel fetch
    // const results = await Promise.all([
    //     getRiskLevel(input), 
    //     getAnomalyHr(input.heartRate),
    //     //...
    // ]);
    // const risk_level = results[0];
    // const anomaly_hr = results[1];

    const qry = `INSERT INTO [tbl] VALUES 
    (${input.age},...., ${anomaly_hr}, ...)`
    res.json({
        //risk_level,
        anomaly_hr, 
        //...
    });
    await sql.query(qry);
    return;
})



app.listen(4000, ()=>{
    console.log('app started')
})