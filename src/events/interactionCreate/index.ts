import { IEvent } from '../../types';
import commands from './commands';
import help from './help';

const events: IEvent<any>[] = [
  commands,
  help
];

export default events;
