/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

async function init() {

    let respObj = await apiman.rest(APP_CONSTANTS.NOTIF_DATA, "GET", {}, false, false);
    console.log(respObj);
    if(respObj) {
        let target = notif_tab.shadowRoot.getElementById("tab");

        var link;

        for(let i=0; i<respObj.length; i++) {
            link = `<tr><td><a href="${respObj[i].file}">${respObj[i].name}</a></tr>`;
            target.insertAdjacentHTML('beforeend',link);
        }
        
    
    }
}


function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("notif-tab",
`${APP_CONSTANTS.APP_PATH}/components/notif-tab/notif-tab.html`, notif_tab);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const notif_tab = { trueWebComponentMode, register, init }
