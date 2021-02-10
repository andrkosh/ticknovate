import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { JokeService } from '../../services';
const route = Router();

export default (app: Router) => {
    app.use('/joke', route);

    route.get('/', async (req: Request, res: Response, next: NextFunction) => {
        const logger: Logger = Container.get('logger');
        logger.debug('Calling Joke endpoint');
        try {
            const jokeServiceInstance = Container.get(JokeService);
            const data = await jokeServiceInstance.joke();
            return res.status(201).json(data);
        } catch (e) {
            logger.error('Error: %o', e);
            return next(e);
        }
    });
};
