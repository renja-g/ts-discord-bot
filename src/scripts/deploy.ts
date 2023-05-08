import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '..', '..', '.env') });

import { REST, Routes, APIUser } from 'discord.js';
import commands from '../commands';
import keys from '../keys';

const body = commands
  .map(({ commands }) => commands.map(({ meta }) => meta))
  .flat();

const rest = new REST({ version: '10' }).setToken(keys.clientToken);

async function main() {
  const currentUser = (await rest.get(Routes.user())) as APIUser;

  const endpint =
    process.env.NODE_ENV === 'production'
      ? Routes.applicationCommands(currentUser.id)
      : Routes.applicationGuildCommands(currentUser.id, keys.testGuildId);

  await rest.put(endpint, { body });

  return currentUser;
}

main()
  .then((user) => {
    const tag = `${user.username}#${user.discriminator}`;
    const response =
      process.env.NODE_ENV === 'production'
        ? `Successfully registered application commands for production for as ${tag}!`
        : `Successfully registered application commands for development for in ${keys.testGuildId} as ${tag}!`;
  
    console.log(response);
  })
  .catch(console.error);
