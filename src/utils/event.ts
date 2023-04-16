import { IEvent, EventExec, EventKeys } from '../types';
import { Client } from 'discord.js';

export function event<T extends EventKeys>(
    id: T,
    exec: EventExec<T>
): IEvent<T> {
    return {
        id,
        exec,
    };
}

export function registerEvents(client: Client, events: IEvent<any>[]): void {
    for (const event of events) {
        client.on(event.id, async (...args) => {
            // Create props
            const props = {
                client,
                log: (...args: unknown[]) => {
                    console.log(`[${event.id}]`, ...args);
                },
            };

            // Catch uncought errors
            try {
                await event.exec(props, ...args);
            } catch (error) {
                props.log('Uncought error:', error);
            }
        });
    }
}
