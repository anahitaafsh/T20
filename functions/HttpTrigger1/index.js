const {getAnomaly, getRiskLevel} = require('./aml-api');

module.exports = async function (context, req) {
    const express = require('express');
    const bodyParser = require('body-parser')
    const sql = require('mssql');
    const cors = require('cors');
    const app = express();
    const {getAnomaly, getRiskLevel} = require('./aml-api');
    app.use(bodyParser.json());
    app.use(cors());

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
    const result = await sql.query(`select * from maternal`);
    context.res = {
        body: result.recordset
    };
    context.log("error");

    // context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}