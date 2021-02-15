//const express = require("../../3p/node_modules/express");
//const Router = express.Router();
const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);
const conn = require('../3p/conn')


exports.doService =  (jsonReq) =>{
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    return new Promise((resolve, reject) => {
        try {
            //console.log(jsonReq.roll);
            conn.query(`update attendence set name = '${jsonReq.name}', year = '${jsonReq.year}', clsatt = ${jsonReq.clsatt}, total = ${jsonReq.total}, percentage = ${jsonReq.percentage} where roll = '${jsonReq.roll}'`, (err, rows, fields) => {
                if(!err) {
                    return resolve(rows);
                }
                else 
                    return resolve(err);
            })
        } catch (error) {
               return false;
        }
    });
}
const validateRequest = jsonReq => (jsonReq && jsonReq.roll && jsonReq.name && jsonReq.year && jsonReq.clsatt && jsonReq.total && jsonReq.percentage);