/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

var insert = async() => {
    let roll = upload_form.shadowRoot.getElementById("roll").value;
    let name = upload_form.shadowRoot.getElementById("name").value;
    let year = upload_form.shadowRoot.getElementById("year").value;
    let clsatt = upload_form.shadowRoot.getElementById("clsatt").value;
    let total = upload_form.shadowRoot.getElementById("tot").value;
    let percentage = (clsatt/total)*100;
    
    let respObj = await apiman.rest(APP_CONSTANTS.INS_ATT_DATA, "POST", {roll, name, year, clsatt, total, percentage}, false, false);
    console.log(respObj);
    if(respObj.affectedRows > 0) {
        alert("Data inserted");
        router.reload();
    } 
     
}

var update = async() => {
    let roll = upload_form.shadowRoot.getElementById("roll").value;
    let name = upload_form.shadowRoot.getElementById("name").value;
    let year = upload_form.shadowRoot.getElementById("year").value;
    let clsatt = upload_form.shadowRoot.getElementById("clsatt").value;
    let total = upload_form.shadowRoot.getElementById("tot").value;
    let percentage = (clsatt/total)*100;

    let respObj = await apiman.rest(APP_CONSTANTS.UPD_ATT_DATA, "POST", {roll, name, year, clsatt, total, percentage}, false, false);
    console.log(respObj);
    if(respObj.affectedRows > 0) {
        alert("Data Updated");
        router.reload();
    }
     
}

var dele = async() => {
    let roll = upload_form.shadowRoot.getElementById("roll").value;

    let respObj = await apiman.rest(APP_CONSTANTS.DEL_ATT_DATA, "POST", {roll}, false, false);
    console.log(respObj);
    if(respObj) {
        alert("Data Deleted");
        router.reload();
    }
}

function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("upload-form",
`${APP_CONSTANTS.APP_PATH}/components/upload-form/upload-form.html`, upload_form);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const upload_form = { trueWebComponentMode, register, insert, update, dele}
