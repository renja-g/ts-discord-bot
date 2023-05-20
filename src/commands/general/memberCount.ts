import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
  .setName('membercount')
  .setDescription('Replies with the current member count.')

  export default command(meta, ({ interaction }) => {
    const memberCount = interaction.guild?.memberCount
    interaction.reply({
      ephemeral: false,
      content: `There are currently ${memberCount} members in this server.` ?? 'There was an error getting the member count.'
    })
  })
