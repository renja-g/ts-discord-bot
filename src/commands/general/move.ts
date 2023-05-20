// Moves a member to a voice channel and back to the original channel n times.
//
// Usage: /move @user @channel n

import { SlashCommandBuilder, GuildMember, VoiceChannelResolvable } from 'discord.js';
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
  .setName('move')
  .setDescription('Moves a member to a voice channel and back to the original channel.')
  .addUserOption(option => option.setName('user').setDescription('The user to move.').setRequired(true))
  .addChannelOption(option => option.setName('channel').setDescription('The channel to move the user to.').setRequired(true))
  .addIntegerOption(option => option.setName('n').setDescription('The number of times to move the user. (max 3)').setMaxValue(3).setRequired(true));

export default command(meta, async ({ interaction }) => {
  const user = interaction.options.getMember('user') as GuildMember;
  const channel = interaction.options.getChannel('channel') as VoiceChannelResolvable;
  const n = interaction.options.getInteger('n');

  if (!user || !channel || !n) {
    interaction.reply({
      ephemeral: true,
      content: 'There was an error getting the user, channel, or number of times.'
    });
    return;
  }

  const originalChannel = user.voice.channel;

  if (!originalChannel) {
    interaction.reply({
      ephemeral: true,
      content: 'The user is not in a voice channel.'
    });
    return;
  }

  for (let i = 0; i < n; i++) {
    await user.voice.setChannel(channel);
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 0.2 seconds
    await user.voice.setChannel(originalChannel);
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 0.2 seconds
  }

  // Send a reply to without mentioning the user, by first sending a message and then editing it
  const reply = await interaction.reply({
    content: `Moved ${user.displayName} ${n} times.`,
    fetchReply: true
  });
  await reply.edit({
    content: `Moved ${user} ${n} times.`
  });
});git
