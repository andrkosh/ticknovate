import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import logger from './logger';

export default ({ expressApp }) => {
    dependencyInjectorLoader();
    logger.info('Dependency Injector loaded');

    expressLoader({ app: expressApp });
    logger.info('Express loaded');
};
