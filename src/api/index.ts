import { Router } from 'express';
import double from './routes/double';
import count from './routes/count';
import joke from './routes/joke';

export default () => {
    const app = Router();
    double(app);
    count(app);
    joke(app);

    return app;
};
