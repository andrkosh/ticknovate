import { Service } from 'typedi';

@Service()
export default class DoubleService {
    public double(number: number): number {
        return number * 2;
    }
}
