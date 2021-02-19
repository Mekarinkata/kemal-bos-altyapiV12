const Discord = require("discord.js");
const config = require('../kemalayar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Netflix`}, status: 'idle' })
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
