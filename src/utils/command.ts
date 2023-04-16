import { ICommand, ICommandCategory, CommandExec, CommandMeta } from '../types';

export function command(meta: CommandMeta, exec: CommandExec): ICommand {
    return {
        meta,
        exec,
    };
}

export function category(name: string, commands: ICommand[]): ICommandCategory {
    return {
        name,
        commands,
    };
}
