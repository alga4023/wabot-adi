let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Gopay [088292201767]
│ • OVO/DANA [088292201767]
│ • Saweria https://saweria.co/?
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
