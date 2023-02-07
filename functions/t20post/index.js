module.exports = async function (context, res, req) {
    const express = require('express');
    const bodyParser = require('body-parser')
    const sql = require('mssql');
    const cors = require('cors');
    const app = express();
    const {getAnomaly, getRiskLevel} = require('./aml-api');

    const sql_config = {
        server:'t20-sql.database.windows.net',
        port: 1433,
        database:'t20-db',
        //Persist Security Info=False;
        user:'maternal',
        password:'ABCt20!!',
        options:{
            // encrypt: true,
            trustServerCertificate: false,
        }
        //;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
    }
    sql.connect(sql_config)
        .then(x=>console.log('endpoint connected'))
        .catch(err=>console.error(err));   
    const temp = sql.connect(sql_config);

    const input = context.req.body
    for (let key in input)
        input[key]=parseFloat(input[key])

    context.log(input);

    const anomaly_hr = await getAnomaly('heartRate', input.heartRate);
    const anomaly_bs = await getAnomaly('BS', input.BS);
    const anomaly_sbp = await getAnomaly('systolicBP', input.systolicBP);
    const anomaly_dbp = await getAnomaly('diastolicBP', input.diastolicBP);
    const anomaly_bodyTemp = await getAnomaly('bodyTemp', input.bodyTemp)
    const riskLevel = await getRiskLevel(input);

    context.res.json({
        riskLevel,
        anomaly_hr, 
        anomaly_bs,
        anomaly_sbp,
        anomaly_dbp,
        anomaly_bodyTemp,
        //anomaly_age,
        //...
    });
    const qry = `INSERT INTO [maternal](
        age, bs, systolicBP, diastolicBP, BodyTemp, heartRate, 
        anomaly_sbp, anomaly_dbp, anomaly_bs, anomaly_bt, anomaly_hr,
        riskLevel
    )  VALUES 
    (${input.age}, ${input.BS}, ${input.systolicBP}, ${input.diastolicBP}, ${input.bodyTemp}, ${input.heartRate},
    ${anomaly_sbp}, ${anomaly_dbp},${anomaly_bs}, ${anomaly_bodyTemp}, ${anomaly_hr}, '${riskLevel}')`;
    console.log(qry);
    await sql.query(qry);
    return;
    // const result = await sql.query(`select * from maternal`);
    // context.res = {
    //     body: result.recordset
    // };
    // context.log("error");
}