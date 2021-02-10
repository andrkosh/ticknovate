import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { CountService } from '../../services';
const route = Router();

export default (app: Router) => {
    app.use('/count', route);

    route.get('/', async (req: Request, res: Response, next: NextFunction) => {
        const logger: Logger = Container.get('logger');
        logger.debug('Calling Count endpoint');
        try {
            const countServiceInstance = Container.get(CountService);
            const count = await countServiceInstance.count();
            return res.status(201).json({ count });
        } catch (e) {
            logger.error('Error: %o', e);
            return next(e);
        }
    });
};
