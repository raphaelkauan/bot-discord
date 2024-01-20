const {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription("Relembrar comandos do Git'"),

    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(`${interaction.user.username}`)
            .setThumbnail(`${interaction.user.displayAvatarURL()}`)
            .setDescription('Olá, meu nome é Raphael Kauan!')
        // const confirmButton = new ButtonBuilder()
        //     .setCustomId('confirm')
        //     .setLabel('Click aqui!')
        //     .setStyle(ButtonStyle.Danger)

        await interaction.reply({
            embeds: [exampleEmbed],
            // components: [exampleEmbed.components],
        })
    },
}
