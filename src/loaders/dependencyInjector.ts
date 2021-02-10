import { Container } from 'typedi';
import redisInstance from './redis';
import loggerInstance from './logger';

export default () => {
    try {
        Container.set('redis', redisInstance);
        Container.set('logger', loggerInstance);
    } catch (e) {
        loggerInstance.error('Error on dependency injector loader: %o', e);
        throw e;
    }
};
