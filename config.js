const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Heatless-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1MeE8zaTErdGNTS0RpRnR3blZWdjAvQUNyUDhDQ1o5bUV2cjdKQWxudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlIyeVFSVnhzSStINHlaanErWmJzUnI5ZElrYXBCUFNVSUllTWVvNWpTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTTh6U3krTXFVaDFFS2RucWVaVlEvNnFjZTdpQnBTYkkyZ3VxVEthNUdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdit5aUdEbTIyUFBzM0QwRGliZEdHd0x1QVN3RVRMVHdoMk1LT2M5eGtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJUWVybmMwbndIbUt3amxCZkozWE5SVzFHM3IrU3ZPZlVidXh6Q2JuMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldjVkYxQkMvU3FjMDk4aWpZQi9kR0pScVE5c1czaDRQTFUrMlB5VEljUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdsbUUvTXdkWEN1WTZ6TlBCZkdxZTd5azZSL3R1U3RCcndOdEM3eEQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2l4N3JaV0lyZzBJa2tGeE81MlExZ3VoSEJzUkFuRjhoMEVQRThnREFYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BSFFZN3YzaGZkeUI1elRlMWtZZG9QVW5RZmVBZnZMeGNBOTJKc0FCMXZqQ1NWLzcrb0hrYU9wRStHL3dSSDVIZFVxTERDMy9hMzZEN2NzaHVmWkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJlWVJPNG1FakN5WjQyN2NHb3dZL3ZjS1EzdE54eWhBcC9ET0M5Vy9hOGtNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTUwNjg2ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjlBNENBQTNEN0E0RDVEM0Y4QjJDMDM1Njk1REIyQjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjA3ODQ4OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNTA2ODY4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERUZGQ0Y0MDVCOUJFNzhFNDc2QTM0QTkwNjRERjU5QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDc4NDg4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJYWkdXOEhESCIsIm1lIjp7ImlkIjoiMjM0OTExNTA2ODY4OToxNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyNTc2NTUwOTU5MTI0NDoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmV3M4Z0ZFSkxEcnNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhFRDlLMWtHQmJxS2xZUldGQmJZSWtRaGRSTlp4YklOdXl2M2hZYlU2QlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikx1SGNXa0FDVnIzNDZDdVRiMkpOZ25hTGlMMktxMWdVYUZaWCtidlU4YkZkZ21WT2J6WmVtbnBCelJ5eUlQME9lM3huVVBkUHlqcDlmU2ZjdUp3ZkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVTkNIcnY0dWpPcFpETy9VanB3M1hPSWduNHRaV3g0dWtKRXg4ZVpGNGErSzdKK0NnM01JU1IzRWZxbTJqSTlJR1lwdTZkNlQrZys0bGZRcEdQZjlBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMTUwNjg2ODk6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnhBL1N0WkJnVzZpcFdFVmhRVzJDSkVJWFVUV2NXeURic3I5NFdHMU9nVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDc4NDg1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt2WCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Heatless-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.kordai.biz.id/serve/HlEHZd6pgErX.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Heatless-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Heatless-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349039409985",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Heatless-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Heatless-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.kordai.biz.id/serve/HlEHZd6pgErX.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
