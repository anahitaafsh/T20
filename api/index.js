const express = require('express');
const bodyParser = require('body-parser')
const sql = require('mssql');
const cors = require('cors');
const app = express();
const {getAnomaly, getRiskLevel} = require('./aml-api');
app.use(bodyParser.json());
app.use(cors());


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
    .then(x=>console.log('endpoint connected'))
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
    //console.log(req.body);
    const {age, systolicBP, diastolicBP, BS, bodyTemp, heartRate} = req.body
    try{
        const qry = `insert into Test values
        ('${age}','${systolicBP}','${diastolicBP}', '${BS}', '${bodyTemp}', '${heartRate}')`;
        console.log(qry);
        const result = await sql.query(qry);
        res.json({result})
    }
    catch(e){
        console.error('error happend');
        res.json({error:e}).status(500);
    }
});


app.post('/predict', async(req,res)=>{
    // const input = req.body;
    const input = req.body
    for (let key in input)
        input[key]=parseFloat(input[key])

    console.log(input);
    
    //const risk_level = await getRiskLevel(input);
    const anomaly_hr = await getAnomaly('heartRate', input.heartRate);
    const anomaly_bs = await getAnomaly('BS', input.BS);
    const anomaly_sbp = await getAnomaly('Systolic BP', input.systolicBP);
    const anomaly_dbp = await getAnomaly('Diastolic BP', input.diastolicBP);
    const anomaly_bodyTemp = await getAnomaly('Body Temp', input.bodyTemp)
    //const anomaly_age = await getAnomaly('age', input.age);
    const riskLevel = await getRiskLevel(input);
    //....

    //alternative: parallel fetch
    // const results = await Promise.all([
    //     getRiskLevel(input), 
    //     getAnomalyHr(input.heartRate),
    //     //...
    // ]);
    // const risk_level = results[0];
    // const anomaly_hr = results[1];

    const qry = `INSERT INTO [Test] VALUES 
    (${input.age},...., ${anomaly_hr}, ${anomaly_bs}, ${anomaly_sbp}, ${anomaly_dbp}, ${anomaly_bodyTemp})`
    res.json({
        riskLevel,
        anomaly_hr, 
        anomaly_bs,
        anomaly_sbp,
        anomaly_dbp,
        anomaly_bodyTemp,
        //anomaly_age,
        //...
    });
    //await sql.query(qry);
    return;
})



app.listen(4000, ()=>{
    console.log('app started')
})