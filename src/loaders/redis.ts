import redis from 'redis';
import { promisify } from 'util';
import { IStorage } from '../interfaces/IStorage';
import config from '../config';

const client = redis.createClient(config.redis);
const set = promisify(client.set).bind(client);
const get = promisify(client.get).bind(client);

const redisStorage: IStorage = {
    get(key: string): string {
        return get(key);
    },
    set(key: string, value: string): void {
        return set(key, value);
    },
};

export default redisStorage;
