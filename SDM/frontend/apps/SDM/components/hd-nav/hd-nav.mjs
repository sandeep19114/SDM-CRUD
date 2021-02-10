/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

const move = (k)=> {
    if(k == 1)
        router.loadPage(APP_CONSTANTS.ATTENDENCE_HTML);
    if(k == 2)
        router.loadPage(APP_CONSTANTS.RESULT_HTML);
    if(k == 3)
        router.loadPage(APP_CONSTANTS.NOTIF_HTML);
    if(k == 4)
        router.loadPage(APP_CONSTANTS.UPLOAD_HTML);
}

function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("hd-nav",
`${APP_CONSTANTS.APP_PATH}/components/hd-nav/hd-nav.html`, hd_nav);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const hd_nav = { trueWebComponentMode, register, move }
