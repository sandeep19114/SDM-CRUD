const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "SDM";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
const API_PATH = `${BACKEND}/apps/${APP_NAME}`

export const APP_CONSTANTS = {
 FRONTEND, BACKEND, APP_PATH, APP_NAME, API_PATH,
 HOME_HTML: APP_PATH + "/home.html",
 INDEX_HTML: APP_PATH + "/index.html",
 ATTENDENCE_HTML: APP_PATH + "/attendence.html",
 NOTIF_HTML: APP_PATH + "/notif.html",
 RESULT_HTML: APP_PATH + "/result.html",
 UPLOAD_HTML: APP_PATH + "/upload.html",
 SESSION_NOTE_ID: "com_monkshu_ts",

 ATT_DATA: `${BACKEND}/apis/getAtt`,
 RES_DATA: `${BACKEND}/apis/getRes`,
 NOTIF_DATA: `${BACKEND}/apis/getNotif`,
 INS_ATT_DATA: `${BACKEND}/apis/insAtt`,
 UPD_ATT_DATA: `${BACKEND}/apis/updAtt`,
 DEL_ATT_DATA: `${BACKEND}/apis/delAtt`,
 


 USERID: "id",
 USER_ROLE: "user",
 GUEST_ROLE: "guest",
 PERMISSIONS_MAP: {
 user: [APP_PATH + "/index.html",
 APP_PATH + "/home.html",
 APP_PATH + "/attendence.html",
 APP_PATH + "/notif.html",
 APP_PATH + "/result.html",
 APP_PATH + "/upload.html",
$$.MONKSHU_CONSTANTS.ERROR_THTML],

 guest: [APP_PATH + "/index.html",
 APP_PATH + "/home.html",
 APP_PATH + "/attendence.html",
 APP_PATH + "/notif.html",
 APP_PATH + "/result.html",
 APP_PATH + "/upload.html",
$$.MONKSHU_CONSTANTS.ERROR_THTML]
 },
 API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
 KEY_HEADER: "X-API-Key"
}