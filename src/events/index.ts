import { IEvent } from '../types';
import ready from './ready';
import interactionCreate from './interactionCreate';

const events: IEvent<any>[] = [
    ready,
    interactionCreate,
];

export default events;