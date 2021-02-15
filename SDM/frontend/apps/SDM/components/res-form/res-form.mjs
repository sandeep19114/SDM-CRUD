/* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

var validate = () => {
    let roll = res_form.shadowRoot.getElementById("roll").value;
    let clas = res_form.shadowRoot.getElementById("year").value + '-' + res_form.shadowRoot.getElementById("sem").value;
    let date = res_form.shadowRoot.getElementById("dob").value;
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
    if(date.length < 4) {
        alert("Enter valid date");
        cp = false;
    }
    if(cp)
        getResData(roll, clas, date);
}

var getResData = async(roll, clas, date) => {
    let respObj = await apiman.rest(APP_CONSTANTS.RES_DATA, "POST", {roll, clas, date}, false, false);
    console.log(respObj);
    if(respObj.length == 1) {
        let target = document.querySelector("res-div").shadowRoot.querySelector("#aft");
        target.style.display = "block";
        target.querySelector("#iname").innerHTML = respObj[0].name;
        target.querySelector("#iroll").innerHTML = respObj[0].roll;
        target.querySelector("#iyear").innerHTML = respObj[0].year;
        target.querySelector("#istat").innerHTML = respObj[0].status;
        //target.querySelector("#iimg").src = URL.createObjectURL(respObj[0].img);
        
    }
    else {
        alert("Please enter valid data");
        router.reload();
    }
}

var callBlur = (k) => {
    let roll = res_form.shadowRoot.getElementById("roll").value;
    let clas1 = res_form.shadowRoot.getElementById("year").value;
    let clas2 = res_form.shadowRoot.getElementById("sem").value; 
    let date = res_form.shadowRoot.getElementById("dob").value; 

    if((k == 1) && (roll == "")) 
        res_form.shadowRoot.getElementById("roll").style.borderColor = "#ff0000"; 
    if((k == 2) && (clas1 == "Year")) 
        res_form.shadowRoot.getElementById("year").style.borderColor = "#ff0000"; 
    if((k == 3) && (clas2 == "Sem"))
       res_form.shadowRoot.getElementById("sem").style.borderColor = "#ff0000";
    if((k == 4) && (date == ""))
        res_form.shadowRoot.getElementById("dob").style.borderColor = "#ff0000";
}

var callFocus = (k) => {
    if(k == 1)
        res_form.shadowRoot.getElementById("roll").style.borderColor = "";
    if(k == 2)
        res_form.shadowRoot.getElementById("year").style.borderColor = "";
    if(k == 3)
        res_form.shadowRoot.getElementById("sem").style.borderColor = "";
    if(k == 4)
        res_form.shadowRoot.getElementById("dob").style.borderColor = "";
}

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("res-form",
   `${APP_CONSTANTS.APP_PATH}/components/res-form/res-form.html`, res_form);
   }

const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const res_form = { trueWebComponentMode, register, callFocus, callBlur, validate }
   