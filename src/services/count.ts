import { Service, Inject } from 'typedi';

@Service()
export default class CountService {
    constructor(@Inject('logger') private logger, @Inject('redis') private redis) {}

    public async count(): Promise<number> {
        try {
            this.logger.silly('Fetching old count');
            const oldCount = await this.redis.get('count');

            const newCount = oldCount ? +oldCount + 1 : 1;

            this.logger.silly('Saving new count');
            await this.redis.set('count', newCount);

            return newCount;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}
