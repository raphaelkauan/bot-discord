const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Tocar musicas!'),

    async execute(interacation) {
        await interacation.reply(
            'https://open.spotify.com/playlist/6V7MDV3Rbg6ud9RbEaRE1C?si=503e12350c964718'
        )
    },
}
