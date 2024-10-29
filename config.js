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
global.allowJids = process.env.ALLOW_JID || "16042107295@s.whatsapp.net";
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
global.sudo = process.env.SUDO || "1 (604) 210-7295";
global.owner = process.env.OWNER_NUMBER || "1 (604) 210-7295";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xIenVqbm5pUDU1TWp0ODhrYTh4Z1h6bERzWVg1dk02WENCSWFTbnlsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXhQQWVRbkpnMkJ4SWU2NmpHS2ZuYS9LU2owQjNFZU9WWkRZNVpzb1poND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRUJUWElaYWNRMFRPVjZFM2xqdmcrdTd4cXhvNHo3NktaOWx0S0h1OG5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpd0gyWjJwS0RqVzBZOTBpQ2ZjZjFrZXBLeGF4RlhRZGd4NmFwRjNScDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IMC9TRSt3OFRRQWoyVUlrcDNaWmNRa3JZWnQvL3lXdDJtRUxEMUYzR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhweUMrY3ZQZHRSSVJFTHhISlpiN0MzVG9JWGM3Z3YyOW1RK09CNEZjUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFzcGV3VHNFbUUyeGpnbFJjTlZZeko5alhRbkpHREExem9JMDA0dzNucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjJjejBiaWRkeTNvMk0rYzVHbUk2cjkxS3lOUnhYYmNCMXY1c21Zd3JBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRmL2d0ZjhWVU41RjA2NGZEQ1UvNGdwMTF4YXB6amg0cmF4Zm5UVjNGSU9UVnMrRXYyUEZXaUdhM3NUdmJiMEpKM0xJbEt2Rm5ORWd0cmlBVFo4MWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJWUTd5dzExa1FSQW9MUXlNTjEzSUpnREhwTTUva3orZnJuZWJ4dkIvWkpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2SW02UGpXblF5dTVRei1zUjNMSG9RIiwicGhvbmVJZCI6IjJiYjc0OTkyLTAzMzgtNDRjYi05NzI1LTBmYTUwNzAwY2E4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eG5ET1VjaFJLVVplQmZhTmh6aU5hQ1NZeU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN29EQThObDJQY0VqOVNYeVpTOVgzWkZDRzRBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IksySlZXWjk2IiwibWUiOnsiaWQiOiI0NjcyNjQxNDc1NToyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNSG1rb1VDRVB1UmhMa0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLS29UdUtBekRSWnlEbld2QTg3SGJ5SU9WSnVRVVVpYk5RSWloNWZlMUg0PSIsImFjY291bnRTaWduYXR1cmUiOiJHMzJIeVRKem9sOVFVcFZZRVpuNFEzazh1Q2I1N1BkcHJnUHEwRlYwZEpVbmo2SDZBV0h5M2l0Z3lvazJGcHRncTh6TjVIOTBoNk55Q2I3MkZRY2NEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWtWMDhtUWZDZFJLQ3VER1FITVV6M3gyQURBZ25SdVhtWGdCclg0bzI5ZlNyWVlnemRzbTdhRmgvVUc1cVNPdDRMMkRkSEZ3RVRDeFYzVG42ZG9FZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NjcyNjQxNDc1NToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNpcUU3aWdNdzBXY2c1MXJ3UE94MjhpRGxTYmtGRkltelVDSW9lWDN0UisifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyMTgyNDl9";
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
  errorChat: process.env.ERROR_CHAT || "1 (604) 210-7295",
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
