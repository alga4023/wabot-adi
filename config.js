const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['6288292201767', '6288292201767'] || os.env["6288292201767"]// Put your number here
global.linkGC = ['https://chat.whatsapp.com/HAB17G9Xx2CJDDqhBqsM0p']
global.mods = ['6288292201767', '6288292201767'] // Want some help?
global.prems = ['6288292201767', '6288292201767'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ISI APIKEY LU',
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'apivinz'
}

// Sticker WM
global.packname = 'Sticker Dari Bot Alga'
global.author = 'GH: Alga-OfficialL'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
