const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_10_28_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTFsMXB0MEY5TWJSbzlDSWs5VnYycTFSZmJPaTFOR1gxNGttbkhTMlZFMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM5NjI1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4QzQ5OEI5NTc1NjA3OUQyMDFBOTI3NEJGQ0U0OTJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU5NDUwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkbk1sc01TZFRHaUFuMTdWTklsZGR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE4ZDAyOGJjLTRkYzEtNDRlYi1hY2RkLTdiZWUzMmQxZDI1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDE1OSxcbiAgICAgIDY3LFxuICAgICAgNjksXG4gICAgICAzNSxcbiAgICAgIDI1MSxcbiAgICAgIDE4MyxcbiAgICAgIDI4LFxuICAgICAgMjQzLFxuICAgICAgNDEsXG4gICAgICAxNzAsXG4gICAgICA4OSxcbiAgICAgIDE2MixcbiAgICAgIDIwLFxuICAgICAgMTg5LFxuICAgICAgMjMxLFxuICAgICAgOTEsXG4gICAgICA3NyxcbiAgICAgIDExMSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDYzLFxuICAgICAgMTMyLFxuICAgICAgMjcsXG4gICAgICA2NCxcbiAgICAgIDU3LFxuICAgICAgMzEsXG4gICAgICAyMzksXG4gICAgICAxNTUsXG4gICAgICAxMDQsXG4gICAgICAxMDUsXG4gICAgICAyNSxcbiAgICAgIDIwOSxcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgNTAsXG4gICAgICAxMDksXG4gICAgICAxNDYsXG4gICAgICAxOTYsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlBXRlMxSzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzk2MjUyNToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJvbWVvXCIsXG4gICAgXCJsaWRcIjogXCIyNDUxMzU2Nzc4ODIzNzY6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStsdHFrREVNSHBzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoY3VZUmV1WHFWVmd6algySC9FZUZDYTVIY1RockZsRHk2UzJMV1pkbFdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhNOFJiNUozSk03TTVXYU9nUjdWZzhGK2ZucmI4cWFmcXNiQmpqY2ZPaFhheEIxa1dpelQ5eUwxK0ZXNzJObitZaHg1MlJqQnJDVlByQWtRa3cxZ0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIng5QjFYNU1RbUwyZytYYXVCYWk1a1QzdFBOUWdUMUtmMFNhblNpS25vM2V6VEtoRG1UWGZaQ3FESklLYjMzcmtsbVB6ZXpkeXJhenVyeU90S1kzZkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzk2MjUyNToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTk0NTAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1FpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxMGxHVS9nRmtNSEYwd0c3Y3pVcVUzWmxmWVJmRFRBTmdSQlprRXQvbTNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5MjE3OTA4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTk0NTAzODUwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
