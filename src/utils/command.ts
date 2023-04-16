import {
    ICommand,
    ICommandCategory,
    CommandExec,
    CommandMeta,
    ICommandCategoryExtra,
} from '../types';

export function command(meta: CommandMeta, exec: CommandExec): ICommand {
    return {
        meta,
        exec,
    };
}

export function category(
    name: string,
    commands: ICommand[],
    extra: ICommandCategoryExtra
): ICommandCategory {
    return {
        name,
        commands,
        ...extra,
    };
}
