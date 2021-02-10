/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";



function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("att-div",
`${APP_CONSTANTS.APP_PATH}/components/att-div/att-div.html`, att_div);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const att_div = { trueWebComponentMode, register }
