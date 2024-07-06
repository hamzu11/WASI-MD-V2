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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923263409442";
global.owner = process.env.OWNER_NUMBER || "923263409442";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEIwVmJDSW9sZkZHM0tCZ0VxME53cDJsbWR3VjA5TUtwMVRKZXErMzFrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL05TejVNU1FKbUdXWnBFbTF6dlM1VWlWRUszZFRqWnRTVklGZUxObzMzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRENISk9OWFhrTEFTVld1cUVYVUtGTmE1cnpxcW9DdmRWcjdsaG0xcVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoMmpTZnNGSzRVUTdCcXkxTzMzWlU3OTJyVTRVUzM2czBJeXlNKy9vUkVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMdDBPVDMvRkJwNHYvWG8rWUQxZUU1OVNnK09ZLytiVGdsNTZnQnI1V1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9yNlJBQWdTaHZ1d1pCSU1HVjFoQW9UTDd3eEtKd3Rac2ZwbnFCYkpOSFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0o1Y0tDYm5lWWxkQWRhWnRFQjRUVG5MVWVBTzlDRyt5cmdPZ1NieWwwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDhxWUw3Rk5xa2NIV3BMb1luNWErOTlERUd4a01mMTlya2NGUzV3WWZtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpRemRHbW5oZmhyTzJ6OXpOTHlJK1NxdG91Y1JPM3pLVUVLdUY4dFBqNE5FUXdKOStKZmpsc1o0UmtRZmVpK0lBODhkTk9GTkQrWU9wMFN0aXJXcGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiI1K2cwdkNTc2t2aDhGV1pRNVdSTlk0WThKV05CZFdvNFhXdm14aVpEbmIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzNjU1MTg1NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTE4MUE0NzY5REQ4QUFFRTQxRUQ1RENFOTBFRTZFNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMjQxMDQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMzY1NTE4NTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzEwRUJGODE5M0E2ODkxMTc2Mzg1NEUwMTkyQUNFQTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDI0MTA0OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS2hxNGZwSmtTcXV5UzBqWllLVm96USIsInBob25lSWQiOiIzNTkwNWMyNS1mMTYyLTQxYzYtYjdjZC0xNjllYTYwZDhlNTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHF4YUFJdFZuaE5PdFpjZGcxcTY0aGFqTGdnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkRVBYQXVzWmdmS3kwdVByNWhKY0FpZVZicz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5MVo5WU4zVyIsIm1lIjp7ImlkIjoiOTIzMTM2NTUxODU0OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi77i74pWmzLXMtc2HzL/Mv8y/zL/ilaTilIBIQU1aQSDimZrvuLvilabMtcy1zYfMv8y/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQem01Y2dFRUltWG83UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNbVpmQ0VKb1VzSS9lQzIxTWFpUHkvaGdWWWxPdEFzMjhheXNBSWJaUmpVPSIsImFjY291bnRTaWduYXR1cmUiOiJsQ1I5SkcvUzJzS2V6cEpuSERab1FGNCsxeCtuNjk4bGJsK2tvQS9oWGFEdXVTYnRxbXJ6NHRUaDJaU3VQdk12dmFXVVR6QWkwWmVNQ3BlUy9vQ1BEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjMwMGhTK0Vzb2x3ZElxTnB2RSs1OEFkYWlQRWlCOXR6SUtLRGxQOTdNMUM2MFZ1NTZHcis2UFhKRG11REU0aEl1RmcyS2w1T3ZiTU9IaE42M0FDamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzY1NTE4NTQ6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSm1Yd2hDYUZMQ1AzZ3R0VEdvajh2NFlGV0pUclFMTnZHc3JBQ0cyVVkxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjQxMDQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQzWCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-🦋⃟≛⃝ GJunaid❤️ ≛⃝❤️࿐😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "🦋⃟≛⃝ GJunaid❤️ ≛⃝❤️࿐",
  ownername: process.env.OWNER_NAME || "",
  errorChat: process.env.ERROR_CHAT || "92326340994",
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
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
