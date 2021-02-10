/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

var validate = () => {
    var roll = att_form.shadowRoot.getElementById("roll").value;
    var clas = att_form.shadowRoot.getElementById("year").value + '-' + att_form.shadowRoot.getElementById("sem").value;
    let cp = true;

    let pat = /[0-9]{5}[a-zA-Z]{1}[0-9]{4}/gi;
    if(!(pat.test(roll))) {
        alert("Enter valid roll no.");
        cp = false;
    }
    if(!((clas[0]  == 'I') && (clas[clas.length - 1] == 'I'))) {
        alert("Enter valid class");
        cp = false;
    }
    if(cp) {
        getAttData(roll, clas);
    }
}


var getAttData = async(roll, clas) => {
    //console.log({roll})
    let respObj = await apiman.rest(APP_CONSTANTS.ATT_DATA, "POST", {roll, clas}, false, false);
    console.log(respObj);
    if(respObj.length == 1) {
        let target = document.querySelector("att-div").shadowRoot.querySelector("#aft");
        target.style.display = "block";
        target.querySelector("#iname").innerHTML = respObj[0].name;
        target.querySelector("#iroll").innerHTML = respObj[0].roll;
        target.querySelector("#iyear").innerHTML = respObj[0].year;
        target.querySelector("#iatt").innerHTML = respObj[0].clsatt;
        target.querySelector("#itot").innerHTML = respObj[0].total;
        target.querySelector("#iper").innerHTML = respObj[0].percentage;
    
    }
    else {
        alert("Please enter valid data");
        router.reload();
    }
}

var callBlur = (k) => {
    let roll = att_form.shadowRoot.getElementById("roll").value;
    let clas1 = att_form.shadowRoot.getElementById("year").value;
    let clas2 = att_form.shadowRoot.getElementById("sem").value; 
    if((k == 1) && (roll == ""))
    att_form.shadowRoot.getElementById("roll").style.borderColor = "#ff0000";
    if((k == 2) && (clas1 == "Year")) 
    att_form.shadowRoot.getElementById("year").style.borderColor = "#ff0000"; 
    if((k == 3) && (clas2 == "Sem"))
    att_form.shadowRoot.getElementById("sem").style.borderColor = "#ff0000";
}

const callFocus = (k) => {
    if(k == 1)
        att_form.shadowRoot.getElementById("roll").style.borderColor = "";
    if(k == 2)
        att_form.shadowRoot.getElementById("year").style.borderColor = "";
    if(k == 3)
        att_form.shadowRoot.getElementById("sem").style.borderColor = "";
}



function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("att-form",
`${APP_CONSTANTS.APP_PATH}/components/att-form/att-form.html`, att_form);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const att_form = { trueWebComponentMode, register, validate, callBlur, callFocus}
