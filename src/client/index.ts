import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "../utils/event";
import events from "../events";
import keys from "../keys";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

registerEvents(client, events);

client.login(keys.clientToken)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });