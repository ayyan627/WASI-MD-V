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
global.github = process.env.GITHUB || "https://github.com/TXAYYAN";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NZMGxLb2ZSVS9VUkZDMFRVV1BYQVMwNU43RzlmVzA5WDZUd2o1TWNHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUF0M1JRRWo3bisxNk96YU00SWZVSmJJTnZyeHp6R0gxeU9ySktOZjFCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR0ViYkdsdDRnaDA3dDZ5bS81VlduZisySFhic3NWUmFmNU9zdGRJMEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1K1VpVGpqZTB1dXZxUG15YnZTWU1aQnRPN2wxMDJXbDI4OHdQZTBmMVIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCN0tEUWNxdHhiRE56ZUVKczZDZ2FZa2FUYnF3dklWOU9oOHhNa1pBRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRyZjJBVG1wM1c2N1dFdEhhQjdOWjg4bHRIWnFpTnhhZG1Pci9CMVJYVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0x6c0lVUVJpRVFTbVUyQlAyaFZXMFFaMGxHNnl1aEdQWTM4blFVNkNWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGFHM1lQeHJwdHN3N21FWTdoM2hEdzVFRTNYTnA1cE80YU44UnFhdkNBZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk2OWY1YjVVcWxQRi9iZnlhUlByNkRxNE9xZ1JsMTFzTGxvYk94bmFJTXFEQVhWQkdUaU9aZk5Jelc1QjU1VmdqZFdYd0NuNnV4bjF2TytGSDZlZ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJsQUFBSVgrYTFsMTB0TUlsem9VMDNsNWFJSmNiWHBWNklqaFJlSlM3WENJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJELTFuVmN0NVRXaWc1VVlnNUVvd2JBIiwicGhvbmVJZCI6IjdlYWM3NmUxLWIzYzktNGY1YS1hMDkxLWZkOGNiZWMwNDZlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUdUlQWm81UER1dFBHdVB4blIrc0x5eDUwQnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFYMkltSDEweTYyY0dSYndkci8vU3ZudXg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhSMTRaMTJFIiwibWUiOnsiaWQiOiIzNTg0NTczOTg5NTQyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Ly64Y2o4ri9IPCdkIog4ri9IPCdkIgg4ri9IPCdkI0g4ri9IPCdkIYg4ri94Y2o4Ly7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcVN2TWtIRUxPVTI3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0NGpYd2IxcWtHWDJlbHhYMHFxNzhJOEdyS2hMeUNpMFV5dENaN0sxSmhRPSIsImFjY291bnRTaWduYXR1cmUiOiJUdDhlMTJxQzNkZ2VDQ0Z3UVRtTS9vN0hhaTRYZWdYeGlVdGN3SE83YmR2ZVg4by9LWlFKMjZQSzQ5U2VtN2x1elEvYzZuNEVBdW9ENlFzT3dUZDlBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNEdHZ1FSQkI0bGhlUXc2ZTA3clVhVDd4dWhubjV5bU5FZGhrbXlHL2NGSEVJMHNmU2RnWW5SM0xid08vR1RNWHk2Z1ZxZFhmT3IvWnFmdXZ3ZEZJaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNTg0NTczOTg5NTQyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZU9JMThHOWFwQmw5bnBjVjlLcXUvQ1BCcXlvUzhnb3RGTXJRbWV5dFNZVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQ0OTY2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFclAifQ==";
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
