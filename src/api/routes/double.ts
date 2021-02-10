import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { DoubleService } from '../../services';
const route = Router();

export default (app: Router) => {
    app.use('/double', route);

    route.get('/:number', async (req: Request, res: Response, next: NextFunction) => {
        const logger: Logger = Container.get('logger');
        logger.debug('Calling Double endpoint');
        try {
            const doubleServiceInstance = Container.get(DoubleService);
            const result = doubleServiceInstance.double(+req.params.number);

            return res.status(201).json({ result });
        } catch (e) {
            logger.error('Error: %o', e);
            return next(e);
        }
    });
};
