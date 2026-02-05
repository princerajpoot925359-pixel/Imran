 const fs = require("fs");
module.exports.config = {
	name: "Julmi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("khan sahab") ||
     react.includes("Boss") || 
     react.includes("BOSS") || 
     react.includes("ADMIN") ||
     react.includes("admin") || 
react.includes("Admin")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿ﮩ٨ـﮩ💚💖ـ٨\n\n✦🌸===『*★🌸◉❖khan≛sahab❖◉✦\n\n★★᭄𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀 :\n\n✦ https://instagram.com/_khan-sahab143==  ✦ \n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀😁😋 https://m.facebook.com/profile.php?id=61579619590022`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Julmi.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
