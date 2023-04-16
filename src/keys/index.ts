import { IKeys } from '../types';

const keys: IKeys = {
    clientToken: process.env.CLIENT_TOKEN ?? 'nil'
}

if (Object.values(keys).includes('nil')) {
    throw new Error('Missing environment variables');
}

export default keys;