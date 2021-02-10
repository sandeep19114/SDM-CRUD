//const express = require("../../3p/node_modules/express");
//const Router = express.Router();
const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);
const conn = require('../3p/conn')

// exports.doService = async (jsonReq) =>{
// Router.get("/", (req, res) => {
//         conn.query("select * from attendence", (err, rows, fields) => {
//             if(!err) {
//                 res.send(rows);
//             }
//             else 
//                 res.send(err);
//         })
        
//     })
// }


exports.doService =  (jsonReq) =>{
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    return new Promise((resolve, reject) => {
        try {
            //console.log(jsonReq.roll);
            conn.query(`select * from attendence where roll='${jsonReq.roll}' and year='${jsonReq.clas}'`, (err, rows, fields) => {
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
const validateRequest = jsonReq => (jsonReq && jsonReq.roll && jsonReq.clas);