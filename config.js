//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
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

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BrRkc5MTg3RnVtYiswSG1kTHQvbFpDaWFDSytTYXFzbWI2djNLMTNIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUEyUEhsMXpsYk9halVWYVBER21DYVN5T281bjdCeDdEQ3RLZ2c0Z3drOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TERiSjBaUDZuQWNPWVh6RlpTOHhzVWwyN1JmcExYdjlCRTNJS1RHS0VFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT3duOXBiN0VMcmhDWFozMnJKU1hSUHdoVTYrS0UvaWZlL29mUk8vakI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LY01najhSTnBTNTQ2MWlWVmVVd1ZKTEtTWXRPZG1HWnhhY2h3dUxHa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9hT3N6LzEvNGF1RFhwVEVkL1VmQWs5NHJuTmdsMk9PWERXYlZGKzNRQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dOYUNncHVxTk1ZVmN6aERGOXd0QlpFTXljNEFHWFlkUXBDWlk3cFNYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VHbWlYVEMvTEdRMStZdGlDUWJQSEptb1E4UzBjRGNRY3B2aWtHMUt3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVXWGIyMXRMSjB2MjNiY0xaWk5hdHV6VnNvUVF4TUplNkZPdzVkYzJreTZtaDZmKzRFMmNTSGc5Q2F2SXZwdUh3cVZMcTIxeWpQT2dGTktXUk5xS2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiIxTC85bExwU2sydXVmblhuQVhmTThBbFJWaTZBZHVBQ2RnZHJwdVN0RkxJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA0Mzc4ODI4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MEY3MUNCNkY5MzU5RDUyMjE0OERFRUYwNjg1MEUzNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDA5NjY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRVURnbF8yaFN1eWM4Wm5jbUNIWnd3IiwicGhvbmVJZCI6ImZiOWZjMWMzLWZiMjUtNDJiNy04ZmRmLTA0NjVmNTQ1ZmEzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ2k1VnNQZ0FRNW5CcUU5K1hldy9pU2g0UUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW9aM3BmT1BBcmRCTmY0MXJFczVOeTlibTFFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkExN1JFUThKIiwibWUiOnsiaWQiOiI5MjMwNDM3ODgyODI6MzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTm9vciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmVndXQ4REVQSEE2clFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQWpuSXFCT1FvcGhJd2FlTU9sOXZtVitKQm8wV3F1aEJYZFQzSU11M2N6WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOHF2ZWZDZFhod1A0SWNlNnlPYTkwSXdlZzBIeWhub01yZ2hsbURHZXhUaXJQWG1scVV0NldvVzhENnlYSVE4bDBDdlNHY01LaHY5TGhNb3hxN3hHQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjRad2xJdG1uR2NiNlMwOE45OStOMTIrZE5tK2RjQ2drS0ovTHo0OVZ0NXZmWHgwQjhsdFQxZWc4N1l2dmVHMGhvUmtweDhIOVBCZ3pNekRrc0JjQmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDQzNzg4MjgyOjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFJNXlLZ1RrS0tZU01HbmpEcGZiNWxmaVFhTkZxcm9RVjNVOXlETHQzTTIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0MDk2NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREFRIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
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
