import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file️");
}

export default {
    port: parseInt(process.env.PORT, 10),

    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },

    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    api: {
        prefix: '/api',
    },
};
