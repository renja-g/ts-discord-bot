import { 
  Awaitable,
  Client,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from "discord.js";

type LoggerFunction = (...args: unknown[]) => void;

export interface ICommandProps {
  interaction: ChatInputCommandInteraction;
  client: Client;
  log: LoggerFunction;
}

export type CommandExec = (
  props: ICommandProps,
) => Awaitable<unknown>;

export type CommandMeta = 
  | SlashCommandBuilder
  | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;

export interface ICommand {
  meta: CommandMeta;
  exec: CommandExec;
}

export interface ICommandCategory {
  name: string;
  commands: ICommand[];
}