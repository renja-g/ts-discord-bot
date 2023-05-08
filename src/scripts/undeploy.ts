import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '..', '.env') })

import { REST, Routes, APIUser } from 'discord.js'
import keys from '../keys'

const rest = new REST({ version: '9' }).setToken(keys.clientToken)

async function main() {
  const currentUser = await rest.get(Routes.user()) as APIUser

  const endpoint = process.env.NODE_ENV === 'production'
    ? Routes.applicationCommands(currentUser.id)
    : Routes.applicationGuildCommands(currentUser.id, keys.testGuildId)

  await rest.put(endpoint, { body: [] })

  return currentUser
}

main()
  .then((user) => {
    const tag = `${user.username}#${user.discriminator}`
    const response =
    process.env.NODE_ENV === 'production'
      ? `Successfully removed commands in production as ${tag}!`
      : `Successfully removed commands for development in ${keys.testGuildId} as ${tag}!`
  
    console.log(response)
  })
  .catch(console.error)