import { Service, Inject } from 'typedi';

@Service()
export default class CountService {
    constructor(@Inject('logger') private logger) {}

    public async joke(): Promise<string> {
        try {
            const response = await require('axios').get('https://api.jokes.one/jod?category=animal');
            return response.data;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}
