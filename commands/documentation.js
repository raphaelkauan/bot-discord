const {
    SlashCommandBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
} = require('discord.js')

const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nenhuma linguagem selecionada')
        .addOptions(
            {
                label: 'javascript',
                description: 'Veja a documentação de Javascript',
                value: 'javascript',
            },
            {
                label: 'python',
                description: 'Veja a documentação de python',
                value: 'python',
            },
            {
                label: 'java',
                description: 'Veja a documentação de Java',
                value: 'java',
            }
        )
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('acesse a documentação'),

    async execute(interaction) {
        await interaction.reply({ content: 'teste', components: [row] })
    },
}
