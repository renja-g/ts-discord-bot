import { ClientEvents, Awaitable, Client } from 'discord.js';

type LoggerFunction = (...args: unknown[]) => void;

export interface IEventProps {
  client: Client;
  log: LoggerFunction;
}

export type EventKeys = keyof ClientEvents;

export type EventExec<T extends EventKeys> = (
  props: IEventProps,
  ...args: ClientEvents[T]
) => Awaitable<void>;

export interface IEvent<T extends EventKeys> {
  id: T;
  exec: EventExec<T>;
}
