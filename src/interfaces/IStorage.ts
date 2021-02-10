export interface IStorage {
    get(key: string): string;
    set(key: string, value: string): void;
}
