const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos
const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, 'commands')
const commandsFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file)
    const commands = require(filePath)
    if ('data' in commands && 'execute' in commands) {
        client.commands.set(commands.data.name, commands)
    } else {
        console.log(
            `Esse comando em ${filePath} está com "data" ou "execute ausentes"`
        )
    }
}

// login bot
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.login(TOKEN)

// Listener de interações com o bot

client.on(Events.InteractionCreate, async (interacation) => {
    if (interacation.isStringSelectMenu()) {
        const selected = interacation.values[0]
        if (selected == 'javascript') {
            await interacation.reply('Documentação do Javacript:')
        } else if (selected == 'python') {
            await interacation.reply('Documentação do Python:')
        } else if (selected == 'java') {
            await interacation.reply('Documentação do Java:')
        }
    }

    if (!interacation.isChatInputCommand()) return
    const command = interacation.client.commands.get(interacation.commandName)
    if (!command) {
        console.log('Comando não encontrado!')
        return
    }
    try {
        await command.execute(interacation)
    } catch (error) {
        console.error(error)
        await interacation.reply('Houve um erro!')
    }
})
