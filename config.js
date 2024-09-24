//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VadP2Cu59PwbTfRnE11i";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VadP2Cu59PwbTfRnE11i";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://whatsapp.com/channel/0029VadP2Cu59PwbTfRnE11i";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "3584573989452";
global.owner = process.env.OWNER_NUMBER || "3584573989452";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhxNklFeUJpWnEveTJsc2JWM0hNSGQ1NlA5aU45eE9Tc0lHOVBqbUpVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xPUmx5TEZIMXhzVk5jK2piaVFJbGJ6Q2NVNkpNUWtPSWk5V21nMXIxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSFltWXBvWWdlcmtnNVV0Y0hmUUJkYmpVTGRaK1JQb08wR1VaYk9NTzM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUm55S29jTmRUSTgyaTlRbVQ1ZnB5WXRUTHd6UkptWGs4c2xkNmVLNEJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGS1IxNTJGVU9MdENqbDhDZDNIY1ZLZ3Z4N3o3ZHM1cW5YUkJER3RJR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik55M2NqaTZEemRiODRFM25tMkpYdXpFSElYbndORW1UczZmVDhVbEdzeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1AyQXMwOWZCYWRmUmpRcUg2K1FoUnRqamJySDNSQTZxeFBWMlcySkVWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVU4d2NldFVwUDM5L210enZZcDRoaTNNUFdPT085Zlp6Wi9rSFdrVUpnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgraDRPV3U4Q0tGZkNNZTZIRHhXUUQ2VEl0bkRYdXFCVHBsalZKeVBsaWtYZUJIZCtINUl5aXA2VXFhci81R214VnkzNSsrVUg3eEgzU1M4NlV2ZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiI2VmtzdFJKWmpGaXpyMERrY2o4VHRPK2tyTXNMdU1Gak1KSm9ScTM2Um9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM1ODQ1NzM5ODk0NTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUJDRDcyRDNDNkVCNzBDMzUwOUNFQzZBMDYyMDYwMDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzIwMTEwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMzU4NDU3Mzk4OTQ1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwREEwQTlDNDVERjg5MzFBQTQ5MjQ4M0ExRDY3NkM4OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MjAxMTAxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxS2ZHLVBfclQyLXVnWjRvcktpWVJnIiwicGhvbmVJZCI6IjUyNzFkMGIwLWI1OTktNGFkNy05Mzk5LTE0N2RjMmFmYTIwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0clRkajl2MjVqVnhKZExWdUcyWnBad0l1V3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHRpMldmc3pKNDZGRU5jQXhsZnE1TFVKektVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU0UjNNWkJIIiwibWUiOnsiaWQiOiIzNTg0NTczOTg5NDUyOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+luvCfmK3wn5KUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYi9qZFFIRUw3K3k3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCcnlMQjZ1RTd4SXFlQlFxdGNVQ2czd3ZEVFM1VENMcnpHTXlHTXJVV1ZrPSIsImFjY291bnRTaWduYXR1cmUiOiJWRXRzUkdMcTBveXhraHRuTmN2cmFTL0pTcGtKQXk2MStMUkxLTWJxbGFidGpNYzNtMDlmV2JzNW9Wa1RjczY0a0VzQU9FaDdzejBDT2NLUWFuUzBCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ3h1cGRCVGdBOE1TaXoxZ05wd0V0RTVqNktrMGlPK3BMWHMxV2NCa2ZlZ3h5R3dGMTA5WTduSHVOUmdnRnk4WkZFMDYrZ2tWTGVSbkphSTRpYXI4QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNTg0NTczOTg5NDUyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWE4aXdlcmhPOFNLbmdVS3JYRkFvTjhMdzAwdVV3aTY4eGpNaGpLMUZsWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzIwMTA5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBVHkifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐘𝐀𝐍-𝐗𝐃😍",
  author: process.env.PACK_AUTHER || "𝐀𝐘𝐘𝐀𝐍",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐀𝐘𝐀𝐍-𝐗𝐃",
  ownername: process.env.OWNER_NAME || "𝐀𝐘𝐀𝐍",
  errorChat: process.env.ERROR_CHAT || "3584573989452",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "AYYAN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
